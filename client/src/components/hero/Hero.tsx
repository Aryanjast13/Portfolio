

const HeroSection = () => {
  return (
    <section className="relative z-0 h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-white px-4 sm:px-8">
      <div className="text-center">
        <h1 className="sm:mb-2 lg:mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
          I help founders turn ideas
        </h1>
        <div className="mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
          into seamless <br className="md:hidden sm:block" />
          <span
            className="bg-gradient-to-b from-zinc-700 via-zinc-200 to-zinc-50 bg-clip-text tracking-wide text-transparent font-bold"
            style={{ fontFamily: 'NyghtSerif' }}
          >
            digital experiences
          </span>
        </div>
        <div className="relative sm:mt-6 flex flex-col items-center justify-center text-center text-xl sm:flex-row  md:text-xl lg:mt-7 lg:text-2xl bg-gradient-to-b from-gray-50 via-zinc-200 to-gray-800 bg-clip-text tracking-wide text-transparent font-normal">
          <span className="flex flex-col sm:flex-row items-center justify-center">
            <span className="bg-gradient-to-b from-gray-50 via-zinc-200 to-gray-800 bg-clip-text tracking-wide text-transparent">
              Hello, I&apos;m Aryan Jast
            </span>
            <div className="group h-18 w-20 relative overflow-hidden rounded-3xl mx-2  mt-4 sm:mt-0">
              <div className="h-full w-20 relative overflow-hidden rounded-3xl ">
                <img
                  alt="user image"
                  src="/zoro2.png"
                />
              </div>
            </div>
          </span>
          <span className="leading-relaxed mt-4 sm:mt-0 bg-gradient-to-b from-gray-50 via-zinc-200 to-gray-800 bg-clip-text tracking-wide text-transparent">
            a Full Stack Developer
          </span>
        </div>
        <div className="relative z-50">
          <div className="mt-10">
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-r0"
              data-state="closed"
              data-slot="drawer-trigger"
              className="group relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center bg-[#272436] backdrop-blur-sm text-[#DDDCC7] font-normal hover:text-[#0D0C10]"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#DCDCC7] transition-all duration-300 group-hover:scale-[100.8]"></div>
                <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                  Let&apos;s Connect
                </span>
              </div>
              <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 group-hover:text-[#0D0C10]">
                <span>Let&apos;s Connect</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className="absolute lg:bottom-[-30vh] bottom-[-14vh] left-0 right-0 mx-auto h-72 sm:h-96 w-full max-w-[--breakpoint-2xl] overflow-hidden"
        style={{
          maskImage: 'radial-gradient(50% 50%, white, transparent)',
          transform: 'translateY(-10%)',
          opacity: 1,
        }}
      >
        <div
          className="absolute top-1/2 -left-1/2 z-20 aspect-[1/0.7] w-[200%] rounded-[100%] border-t-4 border-t-[#ff80ff] bg-[#0a0a0a] shadow-[inset_0_2px_20px_#ff80ff,0_-10px_50px_1px_#ff80ff6e]"
          style={{ transformOrigin: 'center center', transform: 'none' }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;