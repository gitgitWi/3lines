import type { PropsWithChildren } from "react";
import { NextHead } from "@features/next-head";

type DefaultLayoutProps = PropsWithChildren;

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <NextHead />
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center bg-neutral-700 p-4">
        {children}
      </main>
    </>
  );
};
