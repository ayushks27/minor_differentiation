"use client";

import Sidebar from "@/components/sidebar";
import SearchBar from "@/components/searchbar";
import Overview from "@/components/overview"; 
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function OverviewPage() {
  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/ml-background.jpg')" }}
    >
      {/* User profile (top-right corner) */}
      <SignedIn>
        <div className="absolute top-4 right-4 z-50">
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>

      {/* Sidebar and Search Bar */}
      <Sidebar />
      <SearchBar />

      {/* Overview content area */}
      <div className="absolute inset-0 overflow-y-auto bg-white/80 z-20 p-10">
        <Overview />
      </div>
    </div>
  );
}
