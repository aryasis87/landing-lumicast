import { FAQ as DAFTAR } from '@/lib/siaran';

export default function FAQ() {
  return (
    <section className="bg-sheet-2 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="slug mb-5 text-live">Pertanyaan</p>
          <h2 className="text-[2rem] leading-[1.1] font-semibold md:text-[2.6rem]">Sebelum siaran dimulai</h2>
        </div>
        <div className="border-t-2 border-ink">
          {DAFTAR.map((f) => (
            <details key={f.t} className="group border-b border-rule">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-medium text-ink [&::-webkit-details-marker]:hidden">
                {f.t}
                <span aria-hidden="true" className="slug text-live group-open:hidden">Buka</span>
                <span aria-hidden="true" className="slug hidden text-live group-open:inline">Tutup</span>
              </summary>
              <p className="pb-6 leading-relaxed">{f.j}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
