import Link from 'next/link';

const NAV = [
  ['/#rundown', 'Rundown'],
  ['/#narasumber', 'Narasumber'],
  ['/jadwal-siaran', 'Jadwal siaran'],
  ['/cek-perangkat', 'Cek perangkat'],
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-deck/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="slug on-air flex items-center text-white">
          Lumicast
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 md:flex">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className="slug text-white/80 transition-colors hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/#daftar" className="inline-flex bg-live px-4 py-2.5 text-xs font-semibold text-white hover:opacity-90">
          Daftar siaran
        </Link>
      </div>
    </header>
  );
}
