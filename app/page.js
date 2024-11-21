"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/Dashboard");
  }, [router]);
  return null;
}

export default Page;