export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-(--paper)">

      <div className="absolute top-8 left-14">
        <span className="font-mono text-[11px] tracking-[0.25em] text-(--muted)">
          01 / 04
        </span>
      </div>

      <div className="absolute top-8 right-10 text-right">
        <div className="flex items-center justify-end gap-2 mb-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-(--accent)" />
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-(--muted)">
            Applied Informatics
          </p>
        </div>
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-(--muted) pr-[14px]">
          Software Engineer
        </p>
      </div>

      <div className="absolute left-[9%] top-[18%] bottom-[22%] w-px bg-(--ink) opacity-[0.1]" />

      <div className="absolute left-5 top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-rl]">
        <span className="font-mono text-[9px] tracking-[0.55em] text-(--muted) uppercase">
          Bucharest — 2026
        </span>
      </div>

      <div className="absolute bottom-[18%] left-[11%] animate-fade-up">
        <h1 className="leading-[0.88] font-display font-light select-none">
          <span className="block text-[clamp(4.5rem,10vw,10.5rem)] text-(--ink)">
            Răzvan
          </span>
          <span className="block text-[clamp(4.5rem,10vw,10.5rem)] text-(--ink) pl-[clamp(2.5rem,5.5vw,5.5rem)] animate-fade-up-delay">
            Ştirbu
          </span>
        </h1>
      </div>

      <div className="absolute bottom-[13%] left-[10%] w-[48%] h-px bg-(--ink) opacity-[0.12]" />

      <div className="absolute bottom-8 right-10">
        <span className="font-mono text-[11px] tracking-[0.3em] text-(--muted)">
          scroll ↓
        </span>
      </div>

    </main>
  )
}