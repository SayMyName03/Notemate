"use client"
import { useMutation } from "convex/react";
import { useEffect } from "react";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../components/ui/Button.jsx";

export default function Home() {

    const{user}=useUser();
    const createUser=useMutation(api.user.createUser);

    useEffect(()=>{
      user&&CheckUser();
    },[user])

    const CheckUser=async()=>{
      const result = await createUser({
        email:user?.primaryEmailAddress?.emailAddress,
        imageUrl:user?.imageUrl,
        userName:user?.fullName
      });
    }

  return (
    <div>
      <h2>Hello World</h2>
      <Button>Random</Button>
    </div>
  );
}
