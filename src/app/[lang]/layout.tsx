import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { TranslationProvider } from "@/contexts/TranslationContext";

import "../globals.css";

export const metadata: Metadata = {
  title: "Arjes | Private Guide in Albania",
  description: "Private guide in Albania",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'de' }]
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }> | { lang: string };
}>) {
  const resolvedParams = await Promise.resolve(params);
  const dict = await getDictionary(resolvedParams.lang as 'en' | 'de');
  
  return (
    <html lang={resolvedParams.lang}>
      <body>
        <TranslationProvider dictionary={dict}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
