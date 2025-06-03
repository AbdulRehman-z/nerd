"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import Link from "next/link";
import ImageUpload from "./imageUpload";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";


type AuthFormProps<T extends FieldValues> = {
  type: "SIGN_UP" | "SIGN_IN"
  schema: ZodType<T>
  defaultValues: T
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>
}


export default function AuthForm<T extends FieldValues>({ type, schema, defaultValues, onSubmit }: AuthFormProps<T>) {
  const [block, setBlock] = useState(false)
  const router = useRouter()
  const isSignedIn = type === "SIGN_IN"

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  })

  const submit: SubmitHandler<T> = async (data: T) => {
    setBlock(true)
    const result = await onSubmit(data)
    if (result.success) {
      toast("Success!", {
        description: isSignedIn ? "You have successfully signed in." : "You have successfully signed up.",
      })

      if (isSignedIn) {
        router.push("/")
      } else {
        router.push("/sign-in")
      }

    } else {
      toast(`Error ${isSignedIn ? "signing in" : "signing up"}`, {
        description: result.error ?? "An error occurred",
      })
    }
    setBlock(false)
  }

  const handleUploadComplete = (url: string) => {
    // Update the form field with the uploaded file URL
    form.setValue("universityCard" as Path<T>, url as any)
  }

  const handleUploadError = (error: string) => {
    // Set form error for the university card field
    form.setError("universityCard" as Path<T>, {
      type: "manual",
      message: error,
    })
  }
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">
        {isSignedIn ? "Welcome back to NERD" : "Create your library account"}
      </h1>
      <p className="text-light-100">
        {isSignedIn ? "Access the vast collection of books and resources." : "Please fill out all the fields and upload a valid university ID to gain access to the library."}
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)} className="space-y-8  w-full">
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}</FormLabel>
                  <FormControl>
                    {field.name === "universityCard" ? (
                      <ImageUpload
                        value={field.value}
                        onChange={field.onChange}
                        onUploadComplete={handleUploadComplete}
                        onUploadError={handleUploadError}
                      />
                    ) : (
                      <Input required
                        type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]} {...field} className="form-input" />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit" disabled={block} className="form-btn">{block ? "Wait..." : isSignedIn ? "Sign In" : "Sign up"}</Button>
        </form>
      </Form>
      <p className="text-center text-base font-medium">
        {isSignedIn ? "New to NERD? " : "Already have an account? "}
        <Link className="text-primary underline underline-offset-4" href={isSignedIn ? "/sign-up" : "/sign-in"}>
          {isSignedIn ? "Create an account" : "Sign In"}
        </Link>
      </p>
    </div>
  );
}
