function PlayPause() {
  return (
    <div className="flex items-center justify-center p-10">
      <span>
        <button
          type="button"
          className="px-10 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 font-bold"
        >
          Play
        </button>
      </span>
    </div>
  );
}

export default PlayPause;
