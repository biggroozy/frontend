"use client";
import AppContext from "./context/AppContext";
import { useLayout } from "./context/AppContext";
import "../app/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const flag = useLayout();

  return (
    <html lang="en">
      <AppContext>
        <body data-theme={flag ? "dark" : ""}>{children}</body>
      </AppContext>
    </html>
  );
}
