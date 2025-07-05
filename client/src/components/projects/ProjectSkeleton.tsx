const ProjectSkeleton: React.FC = () => {
	return (
		<>
			{Array.from({ length: 2 }).map((_, i) => (
				<div key={i} className="w-full max-w-md mx-2 overflow-hidden bg-zinc-900/30 rounded-xl border border-zinc-700">
				{/* Content skeleton */}
				<div className="p-6 space-y-2">
				  {/* Title skeleton */}
				  <div className="h-5 bg-zinc-700 rounded animate-pulse"></div>
		  
				  {/* Description skeleton */}
				  <div className="space-y-2">
					<div className="h-3 bg-zinc-700 rounded animate-pulse"></div>
					<div className="h-3 bg-zinc-700 rounded w-4/5 animate-pulse"></div>
					<div className="h-3 bg-zinc-700 rounded w-3/5 animate-pulse"></div>
				  </div>
		  
				  {/* Skills badges skeleton */}
				  <div className="flex flex-wrap gap-2 rounded-lg">
					<div className="h-5 w-20 bg-zinc-700 rounded-full animate-pulse"></div>
					<div className="h-5 w-16 bg-zinc-700 rounded-full animate-pulse"></div>
					<div className="h-5 w-18 bg-zinc-700 rounded-full animate-pulse"></div>
					<div className="h-5 w-24 bg-zinc-700 rounded-full animate-pulse"></div>
					<div className="h-5 w-20 bg-zinc-700 rounded-full animate-pulse"></div>
				  </div>
		  
				  {/* Buttons skeleton */}
				  <div className="flex flex-col sm:flex-row gap-2 rounded-xl">
					<div className="flex-1 h-10 bg-zinc-700 rounded animate-pulse"></div>
					<div className="flex-1 h-10 bg-zinc-700 rounded animate-pulse"></div>
				  </div>
				</div>
			  </div>
			))}
		</>
	);
};

export default ProjectSkeleton;

// export function ProjectCardSkeleton() {
// 	return (
// 	  <div className="w-full max-w-md mx-auto overflow-hidden bg-slate-800 rounded-xl border border-slate-700">
// 		{/* Content skeleton */}
// 		<div className="p-6 space-y-4">
// 		  {/* Title skeleton */}
// 		  <div className="h-7 bg-slate-700 rounded animate-pulse"></div>
  
// 		  {/* Description skeleton */}
// 		  <div className="space-y-2">
// 			<div className="h-4 bg-slate-700 rounded animate-pulse"></div>
// 			<div className="h-4 bg-slate-700 rounded w-4/5 animate-pulse"></div>
// 			<div className="h-4 bg-slate-700 rounded w-3/5 animate-pulse"></div>
// 		  </div>
  
// 		  {/* Skills badges skeleton */}
// 		  <div className="flex flex-wrap gap-2">
// 			<div className="h-6 w-20 bg-slate-700 rounded-full animate-pulse"></div>
// 			<div className="h-6 w-16 bg-slate-700 rounded-full animate-pulse"></div>
// 			<div className="h-6 w-18 bg-slate-700 rounded-full animate-pulse"></div>
// 			<div className="h-6 w-24 bg-slate-700 rounded-full animate-pulse"></div>
// 			<div className="h-6 w-20 bg-slate-700 rounded-full animate-pulse"></div>
// 		  </div>
  
// 		  {/* Buttons skeleton */}
// 		  <div className="flex flex-col sm:flex-row gap-2">
// 			<div className="flex-1 h-10 bg-slate-700 rounded animate-pulse"></div>
// 			<div className="flex-1 h-10 bg-slate-700 rounded animate-pulse"></div>
// 		  </div>
// 		</div>
// 	  </div>
// 	)
//   }
  