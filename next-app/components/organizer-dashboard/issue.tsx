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
import { toast } from "@/components/ui/use-toast";

const FormSchema1 = z.object({
  bio: z
    .string()
    .min(10, {
      message: "Generated Certificate URL must contain more than 10 letters.",
    })
    .max(50, {
      message: "Generated Certificate URL must not be longer than 50 letters.",
    }),
});

const FormSchema2 = z.object({
  bio: z
    .string()
    .min(10, {
      message: "Users Wallet Address must contain more than 10 letters.",
    })
    .max(50, {
      message: "Users Wallet Address must not be longer than 50 letters.",
    }),
});

export function TextareaForm1() {
  const form = useForm<z.infer<typeof FormSchema1>>({
    resolver: zodResolver(FormSchema1),
  });

  function onSubmit(data_Certificate_URL: z.infer<typeof FormSchema1>) {
    console.log(data_Certificate_URL);
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-1/2">
        <FormField
          control={form.control}
          name="bio"
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export function TextareaForm2() {
  const form = useForm<z.infer<typeof FormSchema2>>({
    resolver: zodResolver(FormSchema2),
  });

  function onSubmit(data_Wallet_Address: z.infer<typeof FormSchema2>) {
    console.log(data_Wallet_Address);
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/2 space-y-6">
        <FormField
          control={form.control}
          name="bio"
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
