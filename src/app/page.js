"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import WelcomeMessage from "@/components/welcome";
import Sidebar from "@/components/sidebar";
import SearchBar from "@/components/searchbar";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn === false) {
      router.push("/auth/sign-in");
    }
  }, [isSignedIn, router]);

  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/ml-background.jpg')" }}
    >
      {/* User profile in top-right corner */}
      <SignedIn>
        <div className="absolute top-4 right-4 z-50">
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>

      {/* Sidebar & Search */}
      <Sidebar />
      <SearchBar />

      {/* Welcome text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 -translate-y-16">
        <WelcomeMessage message="Welcome to the Differentiation!" />
      </div>
    </div>
  );
}
