import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";

type Props = {};

const InputUser = (props: Props) => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");

  const onSubmit = useCallback(() => {
    localStorage.setItem("socket.io", JSON.stringify(username));
    router.push("/");
  }, [username, router]);

  return (
    <>
      <Head>
        <title>SOCKET.IO | Input User</title>
        <meta name="description" content="Generated by Create Next Stack." />
      </Head>
      <div className="flex flex-col items-center justify-center w-1/2 h-screen mx-auto">
        <h1 className="mb-5 text-2xl font-bold">SOCKET.IO</h1>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Input Username</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                <div className="flex flex-col gap-2 my-3">
                  <Label>Username</Label>
                  <Input
                    type="text"
                    placeholder="Input username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onSubmit}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default InputUser;