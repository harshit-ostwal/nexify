"use client";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

export function useUser() {
  const { data: session, status } = useSession();
  const [loader, setLoader] = useState(false);

  const handleSignOut = async () => {
    try {
      setLoader(true);
      await signOut({ callbackUrl: "/", redirect: true });
    } finally {
      setLoader(false);
    }
  };

  return { session, status, setLoader, loader, handleSignOut };
}