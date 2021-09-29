import PlayPause from "./PlayPause";
import URLfetcher from "./URLfetcher";

function App() {
  return (
    <div>
      <h1 className="text-5xl text-center py-7 m-1 font-bold">Flashify</h1>
      <h2 className="text-1xl text-center pb-10 font-medium text-gray-500">
        The first Flashback audiobook service in the world.
      </h2>
      <URLfetcher />
      <PlayPause />
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-center lg:px-8">
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-700">
              &copy; Mice Labs, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

console.log("hello world boys, nu händer det");

export default App;
