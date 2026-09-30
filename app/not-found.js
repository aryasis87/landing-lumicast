import Link from "next/link";

export const metadata = { title: "Siaran tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center bg-deck px-6 pt-16 text-white">
      <div className="mx-auto max-w-2xl">
        <p className="slug text-live-bright">404 · Tidak ada sinyal</p>
        <h1 className="mt-5 text-4xl font-semibold text-white md:text-5xl">Halaman ini tidak ada di rundown</h1>
        <p className="mt-4 leading-relaxed text-white/80">Mungkin alamatnya salah ketik, atau siarannya sudah dipindah ke jadwal lain.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="bg-live px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90">Kembali ke beranda</Link>
          <Link href="/jadwal-siaran" className="border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:border-white">Lihat jadwal siaran</Link>
        </div>
      </div>
    </main>
  );
}
