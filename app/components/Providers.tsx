"use client";
import { Theme } from "@radix-ui/themes";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Theme 
      appearance="light" 
      accentColor="indigo"
      scaling="100%"
      radius="medium"
    >
      {children}
    </Theme>
  );
} 