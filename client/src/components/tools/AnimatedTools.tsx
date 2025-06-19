import { Tool } from "./Tools";



const AnimatedTools = ({ tools }: { tools: Tool[] }) => {
	return (
		<div className="mx-auto mt-5 flex max-w-screen-2xl flex-wrap items-center px-4 justify-center gap-4 lg:mt-10 xl:px-36">
			{tools.map((tool) => (
				<div className=" px-3 py-2 sm:px-4 sm:py-2 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md border border-zinc-800 transition-all duration-300 ease-in-out group hover:bg-[#191126d2] hover:rotate-[3deg] hover:scale-105"><img className="transition-transform duration-300 group-hover:scale-125 w-4 "  src={tool.image.url }  alt={tool.name || "Tool icon"} /><span className="transition duration-300 text-[.9rem] group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500 group-hover:bg-clip-text group-hover:text-transparent">{tool.name }</span></div>
			))}
		</div>
	);
};

export default AnimatedTools;

