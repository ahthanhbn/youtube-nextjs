import type { Metadata } from "next";
import './globals.css';

import { Roboto } from 'next/font/google';

import Header from '../components/Header';
import SideBar from '../components/SideBar';

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--Roboto",
});

export const metadata: Metadata = {
  title: "YouTube",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.png" sizes="" />
      <body
        className={`${roboto.className} bg-primary-850 text-primary-100 min-h-screen antialiased`}
      >
        <div className="h-full flex flex-col justify-start items-start">
          <Header />
          <div className="h-[calc(100%-56px)] flex">
            <div className="overflow-y-auto shrink-0  h-full">
              <SideBar />
            </div>
            <div className=" overflow-y-auto">
              <main className="">{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
