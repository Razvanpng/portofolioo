export default function Home() {
  return (
    <main className="w-full min-h-screen bg-(--paper) text-(--ink) selection:bg-(--accent) selection:text-(--paper) font-mono">
      <section className="relative min-h-screen w-full p-8 md:p-16 flex flex-col justify-center border-b border-(--muted) border-opacity-20">

        <div className="w-full max-w-6xl mx-auto">
          <h1 className="leading-none font-black tracking-tighter uppercase">
            <span className="block text-[12vw] text-(--ink)">
              Razvan
            </span>
            <span className="block text-[12vw] text-(--ink) pl-[12vw] md:pl-[20vw] mt-2">
              Stirbu
            </span>
          </h1>

          <div className="flex flex-col md:flex-row justify-end items-end w-full mt-32">
            <div className="w-full md:w-2/5 border-t-2 border-(--accent) pt-6">
              <p className="text-base md:text-lg leading-relaxed text-(--ink)">
                Applied Informatics Student. Software Engineer. Building raw products from database schemas to interface.
              </p>
            </div>
          </div>
        </div>

      </section>

      <section className="relative min-h-screen w-full p-8 md:p-16 flex flex-col justify-center bg-(--ink) text-(--paper)">

        <div className="w-full max-w-6xl mx-auto md:pl-[8vw]">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight uppercase max-w-5xl">
            3rd-year applied informatics student at the faculty of automatic control and computers.
          </h2>
          
          <div className="mt-16 border-l-4 border-(--accent) pl-6 md:ml-[12vw] max-w-2xl">
            <p className="text-lg md:text-2xl leading-snug">
              Specialized in full-stack development. I bypass generic templates to build custom architecture. 
            </p>
          </div>

          <div className="mt-32 pt-16 border-t border-(--paper) border-opacity-20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 text-xl md:text-2xl font-black uppercase tracking-widest">
              <div className="hover:text-(--accent) transition-colors">JavaScript</div>
              <div className="hover:text-(--accent) transition-colors md:mt-12">TypeScript</div>
              <div className="hover:text-(--accent) transition-colors">React.js</div>
              <div className="hover:text-(--accent) transition-colors md:mt-12">Next.js</div>
              <div className="hover:text-(--accent) transition-colors md:mt-24">Node.js</div>
              <div className="hover:text-(--accent) transition-colors md:mt-12">PostgreSQL</div>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}