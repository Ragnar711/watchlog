import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "WatchLog",
    description: "Movies, TV Shows, and Anime tracking platform",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SessionWrapper>
            <html lang="en">
                <body className={inter.className}>{children}</body>
            </html>
        </SessionWrapper>
    );
}
