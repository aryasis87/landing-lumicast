import { UNTUK } from '@/lib/siaran';

export default function Untuk() {
  return (
    <section className="bg-sheet-2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="slug mb-5 text-live">Peserta</p>
          <h2 className="text-[2rem] leading-[1.1] font-semibold md:text-[2.6rem]">
            Untuk pengurus yang tanda tangannya ada di laporan
          </h2>
        </div>
        <ul className="grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {UNTUK.map((u) => (
            <li key={u.judul} className="flex flex-col bg-sheet p-6">
              <h3 className="text-lg font-semibold">{u.judul}</h3>
              <p className="mt-3 text-sm leading-relaxed">{u.isi}</p>
              <p className="slug mt-auto pt-6 text-ink-soft">Posisi</p>
              <p className="mt-1.5 text-sm text-ink">{u.posisi.join(' · ')}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
