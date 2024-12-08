"use client"

import { NextUIProvider } from "@nextui-org/react";

export const Config = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
