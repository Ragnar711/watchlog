import { Navbar } from "@/components/Navbar";

const Main = () => {
    return (
        <div
            className="h-screen flex flex-col justify-between items-center"
            style={{ backgroundColor: "#0C0F11" }}
        >
            <Navbar />
            <div className="h-screen flex flex-col justify-around border-b border-gray-900/10 pb-12">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                        Add a new media details
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Enter a new movie, TV show, or anime details to track
                    </p>
                </div>
                <div className="h-2/5 flex flex-col justify-between items-center">
                    <div className="flex flex-row justify-between items-center gap-8">
                        <div className="flex flex-col justify-between">
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between">
                            <label
                                htmlFor="year"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Year
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="year"
                                    id="year"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between">
                            <label
                                htmlFor="rating"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Rating
                            </label>
                            <div className="mt-2">
                                <select
                                    id="rating"
                                    name="rating"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-8">
                        <div className="flex flex-col justify-between">
                            <label
                                htmlFor="genre"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Type
                            </label>
                            <div className="mt-2">
                                <select
                                    id="genre"
                                    name="genre"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value="Movie">Movie</option>
                                    <option value="TVShow">TV Show</option>
                                    <option value="Anime">Anime</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between">
                            <label
                                htmlFor="categories"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Categories
                            </label>
                            <div className="mt-2">
                                <select
                                    id="categories"
                                    name="categories"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value="Drama">Drama</option>
                                    <option value="Action">Action</option>
                                    <option value="Comedy">Comedy</option>
                                    <option value="Fantasy">Fantasy</option>
                                    <option value="SciFi">SciFi</option>
                                    <option value="Horror">Horror</option>
                                    <option value="Romance">Romance</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="Mystery">Mystery</option>
                                    <option value="Historical">
                                        Historical
                                    </option>
                                    <option value="Adventure">Adventure</option>
                                    <option value="Biography">Biography</option>
                                    <option value="Documentary">
                                        Documentary
                                    </option>
                                    <option value="Crime">Crime</option>
                                    <option value="Animation">Animation</option>
                                    <option value="Family">Family</option>
                                    <option value="Music">Music</option>
                                    <option value="War">War</option>
                                    <option value="Western">Western</option>
                                    <option value="Sport">Sport</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-8">
                        <label
                            htmlFor="actor"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Actors
                        </label>
                        <div className="sm:col-span-2 sm:col-start-1">
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="actor"
                                    id="actor"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2 mt-2">
                            <input
                                type="text"
                                name="actor"
                                id="actor"
                                autoComplete="address-level2"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className="sm:col-span-2 mt-2">
                            <input
                                type="text"
                                name="actor"
                                id="actor"
                                autoComplete="address-level2"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-8">
                        <label
                            htmlFor="director"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Director
                        </label>
                        <div className="sm:col-span-2 sm:col-start-1">
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="director"
                                    id="director"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
