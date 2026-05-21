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
    </main>
  )
}