"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import HomePage from "../components/home/page";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    //router.push("https://www.behance.net/hanna_gomozova");
  }, [router]);

  return (
    <div className="font-[family-name:var(--font-neue-montreal)] flex h-full w-full flex-col">
      <main className="flex-1 relative">
        <HomePage />
      </main>
      <footer className="">Footer for all</footer>
    </div>
  );
}
