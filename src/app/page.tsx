export default function Home() {
  return (
    <main className="w-full min-h-screen bg-(--paper) text-(--ink) font-mono selection:bg-(--accent) selection:text-(--paper)">
      <section className="relative min-h-[85vh] w-full pt-24 pb-24 px-[8vw] flex flex-col justify-center">
        <div className="w-full">
          <h1 className="flex flex-col gap-4 font-black tracking-tighter uppercase leading-none">
            <span className="text-[14vw] md:text-[10vw] text-(--ink)">
              Razvan
            </span>
            <span className="text-[14vw] md:text-[10vw] text-(--ink) ml-[15vw] md:ml-[20vw]">
              Stirbu
            </span>
          </h1>
        </div>

        <div className="flex justify-end w-full mt-24">
          <div className="w-full md:w-1/2 lg:w-1/3 text-sm md:text-base leading-relaxed border-l border-(--accent) pl-6">
            Applied Informatics Student and Software Engineer. Building raw products from database schemas to the interface.
          </div>
        </div>
      </section>

      <section className="relative min-h-screen w-full px-[8vw] py-32 border-t border-(--muted) border-opacity-20">
        <div className="mb-24">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight uppercase max-w-4xl">
            3rd-year applied informatics student at the faculty of automatic control and computers.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 w-full mt-24">
          <div className="md:col-span-5 text-lg md:text-xl leading-relaxed text-(--muted)">
            Specialized in full-stack development. I bypass generic templates to build custom architecture.
          </div>

          <div className="md:col-span-7 flex justify-end">
            <div className="w-full max-w-md">
              <ul className="flex flex-col gap-6 text-xl md:text-2xl font-bold uppercase tracking-widest">
                <li className="flex justify-between items-center group">
                  <span className="group-hover:text-(--accent) transition-colors">JavaScript</span>
                  <span className="text-xs text-(--muted)">01</span>
                </li>
                <li className="flex justify-between items-center group ml-4">
                  <span className="group-hover:text-(--accent) transition-colors">TypeScript</span>
                  <span className="text-xs text-(--muted)">02</span>
                </li>
                <li className="flex justify-between items-center group ml-8">
                  <span className="group-hover:text-(--accent) transition-colors">React.js</span>
                  <span className="text-xs text-(--muted)">03</span>
                </li>
                <li className="flex justify-between items-center group ml-12">
                  <span className="group-hover:text-(--accent) transition-colors">Next.js</span>
                  <span className="text-xs text-(--muted)">04</span>
                </li>
                <li className="flex justify-between items-center group ml-16">
                  <span className="group-hover:text-(--accent) transition-colors">Node.js</span>
                  <span className="text-xs text-(--muted)">05</span>
                </li>
                <li className="flex justify-between items-center group ml-20">
                  <span className="group-hover:text-(--accent) transition-colors">PostgreSQL</span>
                  <span className="text-xs text-(--muted)">06</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen w-full px-[8vw] py-32 border-t border-(--muted) border-opacity-20">
        <div className="mb-32">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight uppercase max-w-4xl">
            selected work.
          </h2>
        </div>

        <div className="flex flex-col gap-32 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start group">
            <div className="md:col-span-4 text-sm md:text-base text-(--muted) group-hover:text-(--accent) transition-colors mt-2">
              vanilla js / html5 / css3
            </div>
            <div className="md:col-span-8 flex flex-col gap-6">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                <a href="https://github.com/asmi-buchahrst-hackathon-2026/SmartStack" target="_blank" rel="noreferrer" className="hover:text-(--accent) transition-colors">
                  Cloud Split Dashboard ↗
                </a>
              </h3>
              <p className="text-lg md:text-xl text-(--muted) leading-relaxed max-w-2xl">
                Carbon-aware compute routing simulator. Built with a k-means clustering algorithm to optimize server distribution based on local carbon intensity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start group">
            <div className="md:col-span-4 text-sm md:text-base text-(--muted) group-hover:text-(--accent) transition-colors mt-2">
              react / tailwind / supabase / postgresql
            </div>
            <div className="md:col-span-8 flex flex-col gap-6">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                <a href="https://peer-tutoring-app.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-(--accent) transition-colors">
                  PeerTutor ↗
                </a>
              </h3>
              <p className="text-lg md:text-xl text-(--muted) leading-relaxed max-w-2xl">
                Real-time collaborative academic workspace. Integrated monaco editor and websockets for live chat and state synchronization without page refreshes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start group">
            <div className="md:col-span-4 text-sm md:text-base text-(--muted) group-hover:text-(--accent) transition-colors mt-2">
              next.js / express / prisma / postgresql
            </div>
            <div className="md:col-span-8 flex flex-col gap-6">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                <a href="https://github.com/Razvanpng/rpg-habit-tracker" target="_blank" rel="noreferrer" className="hover:text-(--accent) transition-colors">
                  RPG Habit Tracker ↗
                </a>
              </h3>
              <p className="text-lg md:text-xl text-(--muted) leading-relaxed max-w-2xl">
                Full-stack habit tracking platform. Implemented cross-domain authentication with jwt and rigorous api route protection via zod and rate limiting.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start group">
            <div className="md:col-span-4 text-sm md:text-base text-(--muted) group-hover:text-(--accent) transition-colors mt-2">
              python / whisper ai
            </div>
            <div className="md:col-span-8 flex flex-col gap-6">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                <a href="https://github.com/Razvanpng/smart_music_player" target="_blank" rel="noreferrer" className="hover:text-(--accent) transition-colors">
                  Smart Music Player ↗
                </a>
              </h3>
              <p className="text-lg md:text-xl text-(--muted) leading-relaxed max-w-2xl">
                Academic multimedia application. Developed an intelligent audio playback system integrated with an open-source speech-to-text pipeline to generate synchronized lyrics on the fly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen w-full px-[8vw] py-32 border-t border-(--muted) border-opacity-20">
        <div className="mb-24">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight uppercase max-w-4xl">
            hackathons.
          </h2>
        </div>

        <div className="flex flex-col gap-24 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-l border-(--muted) border-opacity-30 pl-6">
            <div className="md:col-span-4 text-xs text-(--accent) uppercase tracking-widest mt-1">
              May 2026 // Microsoft
            </div>
            <div className="md:col-span-8 flex flex-col gap-4">
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
                GitGood Hack
              </h3>
              <p className="text-base md:text-lg text-(--muted) leading-relaxed max-w-2xl">
                Developed a carbon-aware compute routing simulator for greenops infrastructure efficiency. Engineered a k-means clustering algorithm to distribute server load dynamically based on regional carbon intensity metrics.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-l border-(--muted) border-opacity-30 pl-6">
            <div className="md:col-span-4 text-xs text-(--accent) uppercase tracking-widest mt-1">
              December 2024 // 6th place
            </div>
            <div className="md:col-span-8 flex flex-col gap-4">
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
                ZebraHack 2.0
              </h3>
              <p className="text-base md:text-lg text-(--muted) leading-relaxed max-w-2xl">
                Competed in a high-intensity 4-person team. Took complete ownership of the front-end development, architecture execution, and custom UI assembly under extreme time constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full px-[8vw] py-32 border-t border-(--muted) border-opacity-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        <div>
          <h2 className="text-[10vw] md:text-[6vw] font-black uppercase tracking-tighter leading-none mb-8">
            connect.
          </h2>
          <div className="flex flex-col gap-2 text-lg md:text-xl text-(--muted) mb-8">
            <a href="mailto:razvanstirbu4@gmail.com" className="hover:text-(--accent) transition-colors w-fit">razvanstirbu4@gmail.com</a>
          </div>
          <a 
            href="/Stirbu_Razvan_CV.pdf" 
            download 
            className="inline-block border border-(--ink) px-5 py-2 text-xs uppercase tracking-widest font-bold hover:bg-(--accent) hover:border-(--accent) hover:text-(--paper) transition-colors"
          >
            [ download_cv.pdf ]
          </a>
        </div>

        <div className="flex flex-col gap-4 text-xl md:text-3xl font-bold uppercase tracking-widest text-left md:text-right">
          <a href="https://github.com/Razvanpng" target="_blank" rel="noreferrer" className="hover:text-(--accent) transition-colors">
            github
          </a>
          <a href="https://linkedin.com/in/razvan-stirbu" target="_blank" rel="noreferrer" className="hover:text-(--accent) transition-colors">
            linkedin
          </a>
        </div>
      </section>
    </main>
  )
}