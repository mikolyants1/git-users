'use client';

import { PropsWithChildren } from "react";
import { QueryProvider } from "./QueryProvider";

export const Providers = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <QueryProvider>
      {children}
    </QueryProvider>
  )
}
