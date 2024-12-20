"use client";
import { Theme } from "@radix-ui/themes";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	display: "block",
	variable: "--font-inter",
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Theme 
      appearance="light" 
      accentColor="indigo"
      scaling="100%"
      radius="medium"
      className={`${inter.variable} radix-themes`}
    >
      {children}
    </Theme>
  );
} 