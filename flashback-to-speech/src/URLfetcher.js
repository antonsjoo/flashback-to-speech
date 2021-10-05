import React from "react";

const URLfetcher = ({ text, setText }) => {
  const handleChange = ({ target }) => {
    setText(target.value);
  };

  console.log("Hej!");

  return (
    <div className="pt-30">
      <form className="bg-white shadow-md rounded px-10 pt- pb-8 mb-10 max-w-md mx-auto sm:max-w-xl">
        <div className="m-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="url"
          >
            Flashback URL here:
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            value={text}
            id="url"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default URLfetcher;
