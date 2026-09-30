import { PAKET } from '@/lib/siaran';

export default function Paket() {
  return (
    <section id="paket" className="relative scroll-mt-16 overflow-hidden bg-sheet py-20 md:py-28">
      <div aria-hidden="true" className="ruled absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="slug mb-5 text-live">Paket</p>
          <h2 className="text-[2rem] leading-[1.1] font-semibold md:text-[2.6rem]">
            Siaran langsungnya gratis. Yang berbayar adalah waktu sesudahnya.
          </h2>
        </div>
        <ul className="grid gap-6 lg:grid-cols-3">
          {PAKET.map((p) => (
            <li key={p.nama} className={`flex flex-col border bg-sheet p-7 ${p.unggulan ? 'border-live border-t-4' : 'border-rule'}`}>
              <p className="slug text-ink-soft">{p.nama}{p.unggulan && <span className="ml-2 text-live">· paling banyak dipilih</span>}</p>
              <p className="mt-4 text-3xl font-semibold text-ink">
                {p.harga} <span className="text-sm font-normal text-ink-soft">{p.satuan}</span>
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-rule pt-6 text-sm">
                {p.dapat.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-live" />
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href={`/?paket=${encodeURIComponent(p.nama)}#daftar`}
                className={`mt-8 inline-flex justify-center py-3.5 text-sm font-semibold ${p.unggulan ? 'bg-live text-white hover:opacity-90' : 'border border-ink text-ink hover:bg-ink hover:text-white'}`}
              >
                {p.tombol}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
