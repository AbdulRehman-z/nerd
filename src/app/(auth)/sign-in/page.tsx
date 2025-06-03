"use client"

import { signInAction } from "@/actions/sign-in-action";
import AuthForm from "@/components/custom/authForm";
import { signInSchema } from "@/lib/validations";

export default function SignInPage() {
  return (
    <AuthForm
      defaultValues={{
        email: "",
        password: ""
      }}
      schema={signInSchema}
      type="SIGN_IN"
      onSubmit={signInAction}
    />
  );
}
