import NextAuth, { User } from "next-auth";
import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "./lib/utils";
import { signInSchema } from "./lib/validations";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const validatedFields = signInSchema.safeParse(credentials)
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUser(email);
          if (!user || !user.password) return null;

          const isValid = await compare(password, user.password);
          if (isValid) return {
            id: user.id.toString(),
            email: user.email,
            name: user.fullName
          } as User;
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
      }

      return session;
    },
  },
});
