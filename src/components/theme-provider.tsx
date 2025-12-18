"use client"

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ 
  children, 
  ...props 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <div style={{ transition: "background 0.4s, color 0.4s" }}>
        {children}
      </div>
    </NextThemesProvider>
  );
}