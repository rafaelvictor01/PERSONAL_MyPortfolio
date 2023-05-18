import "./globals.css";

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
      <body>{props.children}</body>
    </html>
  );
}
