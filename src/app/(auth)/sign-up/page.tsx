"use client"

import { signUpAction } from "@/actions/sign-up-action";
import AuthForm from "@/components/custom/authForm";
import { signUpSchema } from "@/lib/validations";

export default function SignUpPage() {
  return (
    <AuthForm
      defaultValues={{
        fullName: "",
        email: "",
        password: "",
        universityId: 0,
        universityCard: ""
      }}
      schema={signUpSchema}
      type="SIGN_UP"
      onSubmit={signUpAction}
    />
  );
}
