"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import bg from "./../assets/cine.jpg";

const styling = {
    backgroundImage: `url('${bg.src}')`,
    width: "100%",
    height: "100vh",
    backgroundSize: "100%",
};

export default function Home() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <div className="w-44 h-44 relative mb-4">
                    <Image
                        src={session.user?.image as string}
                        fill
                        alt=""
                        className="object-cover rounded-full"
                    />
                </div>
                <p className="text-2xl mb-2">
                    Welcome{" "}
                    <span className="font-bold">{session.user?.name}</span>.
                    Signed In As
                </p>
                <p className="font-bold mb-4">{session.user?.email}</p>
                <button
                    className="bg-red-600 py-2 px-6 rounded-md text-white"
                    onClick={() => signOut()}
                >
                    Sign out
                </button>
            </div>
        );
    }

    return (
        <div
            style={styling}
            className="flex flex-col justify-center items-center"
        >
            <div className="mx-auto max-w-4xl py-48 sm:py-32 lg:py-48 text-center backdrop-blur-xl bg-white/30 ">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Welcome to WatchLog!
                </h1>
                <p className="mt-16 text-lg leading-8 text-gray-100">
                    Track your favorite movies, TV shows, and anime. Discover
                    new releases, explore different genres, and stay up-to-date
                    with the latest trends in the entertainment world. Join our
                    community of movie enthusiasts and start organizing your
                    watchlist today!
                </p>
                <div className="mt-16">
                    <Button
                        endIcon={<SendIcon />}
                        onClick={() => signIn("github")}
                        className="text-white outline outline-2 font-bold py-2 px-4 rounded hover:bg-gray-400"
                    >
                        Sign In using GitHub
                    </Button>
                </div>
            </div>
        </div>
    );
}
