"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  Generated_Certificate_URL: z
    .string()
    .min(10, {
      message: "Generated Certificate URL must contain more than 10 letters.",
    })
    .max(50, {
      message: "Generated Certificate URL must not be longer than 50 letters.",
    }),
});

const FormSchema2 = z.object({
  Users_Wallet_Address: z
    .string()
    .min(10, {
      message: "Users Wallet Address must contain more than 10 letters.",
    })
    .max(50, {
      message: "Users Wallet Address must not be longer than 50 letters.",
    }),
});

export function TextareaForm() {
  const form1 = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const form2 = useForm<z.infer<typeof FormSchema2>>({
    resolver: zodResolver(FormSchema2),
  });

  //   function onSubmit1(data: z.infer<typeof FormSchema>) {
  //     console.log("Certificate URL form data:", data);
  //   }

  //   function onSubmit2(data: z.infer<typeof FormSchema2>) {
  //     console.log("User Wallet Address form data:", data);
  //   }

  function onSubmit(event: any) {
    event.preventDefault();
    const formData1 = form1.getValues();
    const formData2 = form2.getValues();
    console.log("Combined form data:", formData1, formData2);
  }

  return (
    <>
      <div className="mr-5 ml-5 flex space-x-10 mt-20">
        <Form {...form1}>
          <form className="space-y-6 w-1/2">
            <FormField
              control={form1.control}
              name="Generated_Certificate_URL"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Certificate URL</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Generated Certificate URL"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Form {...form2}>
          <form className="w-1/2 space-y-6">
            <FormField
              control={form2.control}
              name="Users_Wallet_Address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">User Wallet Address</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Users Wallet Address"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
      <Button
        type="button"
        onClick={onSubmit}
        className="absolute left-1/2 bottom-20 transform -translate-x-1/2 ml-12"
      >
        Issue Certificate to user
      </Button>
    </>
  );
}
