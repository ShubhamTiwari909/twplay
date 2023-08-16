"use client";
import "./globals.css";
import { useLocalStorage } from "@mantine/hooks";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorScheme] = useLocalStorage({
    key: "color-scheme",
    defaultValue: "dark",
  });
  return (
    <html lang="en" data-theme={colorScheme}>
      <body>
        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}
