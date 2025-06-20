import { Link } from "react-router";

type Props = {
	project: IProject;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
	return (
		<div className="flex h-[230px] w-full flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-[#07090f] shadow-lg transition-all duration-300 hover:scale-[1.015] md:h-[260px] md:flex-row md:w-[80%]">
			{/* Left: Text Content */}
			<div className="flex flex-col justify-between p-6 md:w-[60%]">
				<div>
					<h3 className="mb-2 text-lg font-semibold capitalize text-white line-clamp-1 lg:text-xl">
						{project.title}
					</h3>
					<p className="mb-4 text-sm text-gray-300 line-clamp-3">
						{project.description}
					</p>

					<div className="mb-4 flex flex-wrap gap-2">
						{project.tools.map((tool) => (
							<span
								key={tool._id}
								className="rounded-full bg-[#211633] px-2 py-1 text-xs text-indigo-200"
							>
								{tool.text}
							</span>
						))}
					</div>
				</div>

				<div className="flex items-center gap-4 text-lg font-normal">
					{project.live_link && (
						<Link to={project.live_link}
						className="border border-neutral-400 px-4 py-0 inline-flex items-center gap-3 rounded-xl" ><div className="bg-green-500 size-2.5 rounded-full relative"><div className="bg-green-500 absolute inset-0 rounded-full animate-ping"></div></div><span >Live</span></Link>
					)}
					{project.github_link && (
						<Link to={project.github_link} className="border border-neutral-400 px-4 py-0 inline-flex items-center gap-2 rounded-xl" ><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg><span>Github</span></Link>
					)}
				</div>
			</div>

			{/* Right: Image */}
			<div className="md:w-[40%] w-full mt-10 overflow-hidden">
				<img
					src={project.image.url}
					alt={project.title}
					className="h-full w-full object-cover"
				/>
			</div>
		</div>
	);
};

export default ProjectCard;
