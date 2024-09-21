import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import Header from '../components/Header';
import { myTheme } from "../theme/theme";

export const metadata: Metadata = {
  title: "Harshit",
  description: "Harshit's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <ColorSchemeScript />
      </head>
      <body>
      <MantineProvider theme={myTheme}>
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
