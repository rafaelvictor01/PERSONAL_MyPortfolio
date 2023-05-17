import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rafael Victor Bernardes - Web Developer",
  description: "Olá! Este é meu site",
};

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout(props: IRootLayout) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{props.children}</body>
    </html>
  );
}
