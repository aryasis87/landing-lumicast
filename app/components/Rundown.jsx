'use client';

import { motion } from 'framer-motion';

/* ============================================================================
   Bagian penanda Lumicast: RUNDOWN.
   Jadwal acara biasanya ditulis sebagai daftar jam mulai saja. Di sini
   ditampilkan seperti lembar rundown penyiaran — ada durasi tiap segmen,
   penanggung jawab, dan jenis segmennya, sehingga peserta bisa menghitung
   sendiri kapan mereka bisa kembali bekerja.
   ========================================================================== */

const segmen = [
  {
    mulai: '08.30',
    durasi: '30′',
    judul: 'Registrasi & uji perangkat',
    jenis: 'Persiapan',
    pj: 'Panitia',
    catatan: 'Tautan dibuka 15 menit lebih awal untuk uji suara.',
  },
  {
    mulai: '09.00',
    durasi: '120′',
    judul: 'Standar pelaporan terbaru',
    jenis: 'Materi',
    pj: 'Pemateri I',
    catatan: 'Termasuk 20 menit tanya jawab di akhir segmen.',
  },
  {
    mulai: '11.00',
    durasi: '90′',
    judul: 'Studi kasus penyusunan laporan',
    jenis: 'Praktik',
    pj: 'Pemateri II',
    catatan: 'Peserta mengerjakan berkas latihan bersama-sama.',
  },
  {
    mulai: '12.30',
    durasi: '60′',
    judul: 'Rehat',
    jenis: 'Jeda',
    pj: '—',
    catatan: 'Ruang tetap terbuka bagi yang ingin berdiskusi.',
  },
  {
    mulai: '13.30',
    durasi: '120′',
    judul: 'Etika profesi & diskusi panel',
    jenis: 'Panel',
    pj: 'Pemateri I & II',
    catatan: 'Pertanyaan dikumpulkan sejak segmen pertama.',
  },
  {
    mulai: '15.30',
    durasi: '30′',
    judul: 'Penutup & penyerahan sertifikat',
    jenis: 'Penutup',
    pj: 'Panitia',
    catatan: 'Sertifikat dikirim ke surel pada hari yang sama.',
  },
];

const warnaJenis = {
  Materi: 'bg-live/12 text-live',
  Praktik: 'bg-deck/8 text-deck',
  Panel: 'bg-live/12 text-live',
  Jeda: 'bg-rule/50 text-ink-soft',
  Persiapan: 'bg-rule/50 text-ink-soft',
  Penutup: 'bg-rule/50 text-ink-soft',
};

export default function Rundown() {
  return (
    <section id="rundown" className="relative overflow-hidden bg-sheet py-20 md:py-28">
      <div aria-hidden="true" className="ruled absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="slug mb-5 text-live">Rundown</p>
          <h2 className="text-[2rem] leading-[1.1] font-semibold md:text-[2.6rem]">
            Enam segmen, total 450 menit, tanpa jam karet
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Durasi tiap segmen sudah dikunci sejak rundown disusun. Kalau satu segmen selesai lebih
            cepat, jedanya tidak dipakai untuk memanjangkan segmen berikutnya.
          </p>
        </div>

        {/* Kepala kolom */}
        <div className="hidden border-y-2 border-ink py-3 md:grid md:grid-cols-[5.5rem_3.5rem_minmax(0,1.6fr)_7rem_minmax(0,1fr)] md:gap-5">
          {['Mulai', 'Durasi', 'Segmen', 'Jenis', 'Penanggung jawab'].map((h) => (
            <span key={h} className="slug text-ink-soft/70">
              {h}
            </span>
          ))}
        </div>

        <ol>
          {segmen.map((s, i) => (
            <motion.li
              key={s.mulai}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.42, delay: i * 0.05 }}
              className="grid gap-x-5 gap-y-2 border-b border-rule py-5 md:grid-cols-[5.5rem_3.5rem_minmax(0,1.6fr)_7rem_minmax(0,1fr)] md:items-baseline"
            >
              <span className="tnum text-lg font-semibold text-ink md:text-base">{s.mulai}</span>
              <span className="slug tnum text-ink-soft/70">{s.durasi}</span>

              <span>
                <span className="block font-medium text-ink">{s.judul}</span>
                <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{s.catatan}</span>
              </span>

              <span className="justify-self-start">
                <span className={`slug inline-block px-2.5 py-1.5 ${warnaJenis[s.jenis]}`}>
                  {s.jenis}
                </span>
              </span>

              <span className="text-sm text-ink-soft">{s.pj}</span>
            </motion.li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-3 border-t-2 border-ink pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="slug text-ink-soft/70">Total tayang</span>
          <span className="tnum text-lg font-semibold text-ink">450 menit · 08.30–16.00 WIB</span>
        </div>

        <p className="slug mt-8 leading-[1.7] text-ink-soft/45">
          Susunan acara di atas adalah contoh untuk keperluan purwarupa desain.
        </p>
      </div>
    </section>
  );
}
