'use client';

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import axios from "axios";

interface SignUpFormData {
  username: string;
  password: string;
}

export default function SignIn() {
    const form = useForm<SignUpFormData>({
      defaultValues: {
        username: '',
        password: ''
      },
    });

    const onSubmit = async (data: SignUpFormData) => {
        try {
          const response = await axios.post("/api/auth/sign-in", data);
          console.log('Response from server: ', response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              rules={{
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters"
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username-john_doe" {...field} />
                  </FormControl>
                  <FormDescription>
                    Choose a unique username for your account
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormDescription>
                    Password must be at least 6 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Sign Up</Button>
          </form>
        </Form>
    );
}


