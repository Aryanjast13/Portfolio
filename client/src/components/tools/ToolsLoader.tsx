const ToolsLoader = () => {
	return (
		<div className="mx-auto mt-5 flex max-w-screen-2xl flex-wrap items-center justify-center gap-4 lg:mt-10 xl:px-36">
			{Array.from({ length: 18 }).map((_, index) => (
    <div
      key={index}
      className="px-4 py-2 sm:px-4 sm:py-2 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md border border-zinc-800 bg-zinc-900/30 animate-pulse"
    >
      <div className="w-4 h-4 rounded-full bg-zinc-700" />
      <div className="h-3 w-16 sm:w-20 bg-zinc-700 rounded" />
    </div>
  ))}
</div>
	);
};

export default ToolsLoader;

