
import React from "react";

function URLfetcher() {
  return (
    <div>
  <label for="name" class="ml-px pl-4 block text-sm font-medium text-gray-700">Flashback URL here</label>
  <div class="mt-1">
    <input type="text" name="name" id="name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full" placeholder="URL"></input>
  </div>
</div>
  );
}

export default URLfetcher;


