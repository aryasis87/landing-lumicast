import { DIBAHAS, SIARAN } from '@/lib/siaran';

export default function Dibahas() {
  return (
    <section className="bg-sheet py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="slug mb-5 text-live">Isi siaran #{SIARAN.nomor}</p>
          <h2 className="text-[2rem] leading-[1.1] font-semibold md:text-[2.6rem]">
            Laporan yang Anda tanda tangani, akhirnya bisa Anda baca sendiri
          </h2>
          <p className="mt-5 leading-relaxed">
            Banyak pengurus menandatangani laporan keuangan organisasi tanpa pernah diajari cara
            membacanya. Siaran ini tidak membuat Anda jadi akuntan — hanya cukup paham untuk
            bertanya hal yang tepat sebelum rapat anggota.
          </p>
        </div>
        <ol className="border-t-2 border-ink">
          {DIBAHAS.map((d, i) => (
            <li key={d} className="grid grid-cols-[3rem_minmax(0,1fr)] items-baseline border-b border-rule py-4">
              <span className="slug tnum text-live">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-medium text-ink">{d}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
