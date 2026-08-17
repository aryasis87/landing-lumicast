'use client';

import { motion } from 'framer-motion';

const berkas = [
  ['Penyelenggara', 'IAI Muda Komisariat Malang'],
  ['Format', 'In-house training, daring'],
  ['Durasi', '180 menit · 3 segmen'],
  ['Peserta', 'Anggota muda & umum'],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-deck pt-28 pb-0 text-white md:pt-36">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="slug on-air mb-7 flex items-center text-white"
            >
              Siaran terjadwal · Satu hari penuh
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-[2.5rem] leading-[1.02] font-semibold text-white sm:text-5xl lg:text-[3.9rem]"
            >
              Acaranya dimulai
              <br />
              <span className="text-live-bright">tepat menit ke-nol.</span>
            </motion.h1>

            <motion.p className="mt-7 max-w-lg leading-relaxed text-white">
              In-house training yang dijalankan dengan rundown tercetak: tiap segmen punya durasi
              pasti, dan tiap pergantian sudah dihitung. Anda tahu persis kapan bisa kembali ke
              pekerjaan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#daftar"
                className="inline-flex items-center justify-center bg-live px-8 py-4 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-90"
              >
                Daftar Sekarang
              </a>
              <a
                href="#rundown"
                className="inline-flex items-center justify-center border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60"
              >
                Baca Rundown
              </a>
            </motion.div>
          </div>

          {/* Kartu berkas acara — meniru header lembar rundown */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-fit bg-white/5 p-7 backdrop-blur-sm"
          >
            <p className="slug mb-6 border-b border-white/20 pb-4 text-white">Berkas Acara</p>
            {berkas.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1 border-b border-white/12 py-4 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <dt className="slug text-white">{k}</dt>
                <dd className="text-sm font-medium text-white sm:text-right">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      {/* Pita waktu di kaki hero */}
      <div className="relative z-10 mt-14 border-t border-white/15">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-6 sm:grid-cols-4">
          {['08.30 Registrasi', '09.00 Segmen I', '11.00 Segmen II', '13.30 Segmen III'].map((t) => (
            <div key={t} className="timecol border-white/15 px-4 py-5 first:border-l-0">
              <span className="slug tnum text-white">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
