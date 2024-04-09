import { Navbar } from "@/components/Navbar";

const Main = () => {
    return (
        <div
            className="h-screen flex flex-col justify-between items-center"
            style={{ backgroundColor: "#0C0F11" }}
        >
            <Navbar />
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-gray-900">WatchLog</h1>
                <p className="text-gray-500">
                    Movies, TV Shows, and Anime tracking platform
                </p>
            </div>
        </div>
    );
};

export default Main;
