'use client';
import { useState } from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ArrowRight, CheckCircle, Phone, Mail, User, Briefcase, MessageSquare } from 'lucide-react';

const Registration = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulasi network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="register" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-light text-ink mb-3">
            <span className="text-live font-bold">Daftar</span> Sekarang
          </h1>
          <p className="text-ink-soft max-w-2xl mx-auto">
            Isi formulir berikut untuk mengamankan tempat Anda di training eksklusif ini. Gratis & terbatas!
          </p>
        </div>

        {/* Form and Info */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Registration Form */}
          <LazyMotion features={domAnimation}>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ type: "tween", ease: "easeOut" }}
              className="w-full lg:w-1/2"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-rule rounded-xl p-6">
                {isSuccess ? (
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-8"
                    role="alert"
                    aria-live="polite"
                  >
                    <CheckCircle className="w-12 h-12 text-live mx-auto mb-4" aria-hidden="true" />
                    <h2 className="text-xl font-medium text-ink mb-2">Pendaftaran Berhasil!</h2>
                    <p className="text-ink-soft mb-6">
                      Kami telah mengirimkan email konfirmasi ke alamat Anda. Cek juga folder spam/promotions.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="text-live hover:text-live font-medium text-sm"
                      aria-label="Daftarkan peserta lain"
                    >
                      Daftarkan peserta lain
                    </button>
                  </m.div>
                ) : (
                  <>
                    <div className="space-y-4">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-ink-soft mb-1">
                          Nama Lengkap <span className="text-live">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-ink-soft" aria-hidden="true" />
                          </div>
                          <input
                            id="name"
                            type="text"
                            {...register('name', { required: 'Nama lengkap wajib diisi' })}
                            className={`w-full pl-10 pr-3 py-2.5 rounded-md border ${errors.name ? 'border-live/40' : 'border-rule'} focus:ring-1 focus:ring-red-500 focus:border-live`}
                            placeholder="Masukkan nama lengkap"
                            aria-required="true"
                            aria-invalid={errors.name ? "true" : "false"}
                          />
                        </div>
                        {errors.name && <p className="mt-1 text-xs text-live" role="alert">{errors.name.message}</p>}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-ink-soft mb-1">
                          Email <span className="text-live">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-ink-soft" aria-hidden="true" />
                          </div>
                          <input
                            id="email"
                            type="email"
                            {...register('email', { 
                              required: 'Email wajib diisi',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email tidak valid'
                              }
                            })}
                            className={`w-full pl-10 pr-3 py-2.5 rounded-md border ${errors.email ? 'border-live/40' : 'border-rule'} focus:ring-1 focus:ring-red-500 focus:border-live`}
                            placeholder="email@contoh.com"
                            aria-required="true"
                            aria-invalid={errors.email ? "true" : "false"}
                          />
                        </div>
                        {errors.email && <p className="mt-1 text-xs text-live" role="alert">{errors.email.message}</p>}
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-ink-soft mb-1">
                          Nomor WhatsApp <span className="text-live">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-ink-soft" aria-hidden="true" />
                          </div>
                          <input
                            id="phone"
                            type="tel"
                            {...register('phone', { 
                              required: 'Nomor WhatsApp wajib diisi',
                              pattern: {
                                value: /^[0-9]+$/,
                                message: 'Hanya angka yang diperbolehkan'
                              },
                              minLength: {
                                value: 10,
                                message: 'Nomor terlalu pendek'
                              }
                            })}
                            className={`w-full pl-10 pr-3 py-2.5 rounded-md border ${errors.phone ? 'border-live/40' : 'border-rule'} focus:ring-1 focus:ring-red-500 focus:border-live`}
                            placeholder="81234567890"
                            aria-required="true"
                            aria-invalid={errors.phone ? "true" : "false"}
                          />
                        </div>
                        {errors.phone && <p className="mt-1 text-xs text-live" role="alert">{errors.phone.message}</p>}
                      </div>

                      {/* Status Field */}
                      <div>
                        <label htmlFor="status" className="block text-sm font-medium text-ink-soft mb-1">
                          Status di Organisasi <span className="text-live">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Briefcase className="h-5 w-5 text-ink-soft" aria-hidden="true" />
                          </div>
                          <select
                            id="status"
                            {...register('status', { required: 'Pilih status Anda' })}
                            className={`w-full pl-10 pr-3 py-2.5 rounded-md border ${errors.status ? 'border-live/40' : 'border-rule'} focus:ring-1 focus:ring-red-500 focus:border-live`}
                            aria-required="true"
                            aria-invalid={errors.status ? "true" : "false"}
                          >
                            <option value="">-- Pilih Status --</option>
                            <option value="pengurus-inti">Pengurus Inti</option>
                            <option value="staff-divisi">Staff Divisi</option>
                            <option value="anggota-aktif">Anggota Aktif</option>
                            <option value="calon-pengurus">Calon Pengurus</option>
                            <option value="alumni">Alumni/Mentor</option>
                          </select>
                        </div>
                        {errors.status && <p className="mt-1 text-xs text-live" role="alert">{errors.status.message}</p>}
                      </div>

                      {/* Divisi Field (Optional) */}
                      <div>
                        <label htmlFor="divisi" className="block text-sm font-medium text-ink-soft mb-1">
                          Divisi (Jika Ada)
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Briefcase className="h-5 w-5 text-ink-soft" aria-hidden="true" />
                          </div>
                          <input
                            id="divisi"
                            type="text"
                            {...register('divisi')}
                            className="w-full pl-10 pr-3 py-2.5 rounded-md border border-rule focus:ring-1 focus:ring-red-500 focus:border-live"
                            placeholder="Contoh: Divisi Pendidikan"
                          />
                        </div>
                      </div>

                      {/* Expectations Field */}
                      <div>
                        <label htmlFor="expectations" className="block text-sm font-medium text-ink-soft mb-1">
                          Harapan dari Training Ini
                        </label>
                        <div className="relative">
                          <div className="absolute top-3 left-3 pointer-events-none">
                            <MessageSquare className="h-5 w-5 text-ink-soft" aria-hidden="true" />
                          </div>
                          <textarea
                            id="expectations"
                            rows={3}
                            {...register('expectations')}
                            className="w-full pl-10 pr-3 py-2.5 rounded-md border border-rule focus:ring-1 focus:ring-red-500 focus:border-live"
                            placeholder="Apa yang ingin Anda pelajari atau dapatkan dari training ini?"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex justify-center items-center px-6 py-3 rounded-md bg-live text-white font-medium hover:bg-deck transition-colors ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                        aria-busy={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></span>
                            Memproses...
                          </>
                        ) : (
                          <>
                            Daftar Sekarang
                            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Privacy Notice */}
                    <p className="mt-4 text-xs text-ink-soft text-center">
                      Dengan mendaftar, data Anda akan digunakan untuk keperluan training dan komunikasi terkait acara IAI Muda Malang Raya.
                    </p>
                  </>
                )}
              </form>
            </m.div>

            {/* Registration Info */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ type: "tween", ease: "easeOut" }}
              className="w-full lg:w-1/2"
            >
              <div className="bg-sheet-2 p-6 rounded-xl border border-rule">
                <h2 className="text-xl font-medium text-ink mb-6">Informasi Penting</h2>

                <div className="space-y-6">
                  {/* Benefits */}
                  <div>
                    <h3 className="text-lg font-medium text-ink mb-3">Yang Anda dapatkan:</h3>
                    <ul className="space-y-2">
                      {[
                        "Akses ke training live via Zoom",
                        "Materi presentasi (PDF)",
                        "Sertifikat partisipasi resmi",
                        "Rekaman training (untuk peserta terdaftar)",
                        "Akses ke grup diskusi WhatsApp"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-live mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                          <span className="text-ink-soft">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Important Info */}
                  <div className="bg-white p-4 rounded-lg border border-rule">
                    <h3 className="font-medium text-ink mb-2">📌 Catatan Penting:</h3>
                    <ul className="space-y-1.5 text-sm text-ink-soft">
                      <li>• Training GRATIS untuk semua anggota</li>
                      <li>• Kuota terbatas - daftar segera!</li>
                      <li>• Link Zoom dikirim H-1 via email</li>
                      <li>• Wajib hadir tepat waktu</li>
                      <li>• Dress code: Smart Casual</li>
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white p-4 rounded-lg border border-rule" role="region" aria-label="Testimonial">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-10 h-10 bg-live/12 rounded-full flex items-center justify-center text-live font-medium">
                          AS
                        </div>
                      </div>
                      <div>
                        <blockquote className="text-ink-soft italic mb-1 text-sm">
                          "Training ini sangat membantu saya memahami peran sebagai pengurus. Materinya praktis dan langsung applicable!"
                        </blockquote>
                        <p className="text-ink font-medium text-sm">Andi Susanto</p>
                        <p className="text-ink-soft text-xs">Pengurus Gen 8</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="bg-sheet-2 p-4 rounded-lg border border-rule">
                    <h3 className="font-medium text-ink mb-2 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-live" />
                      Butuh Bantuan?
                    </h3>
                    <p className="text-sm text-ink-soft mb-2">Hubungi panitia:</p>
                    <p className="text-sm text-ink-soft">
                      <strong>WhatsApp:</strong> 0812-3456-7890<br/>
                      <strong>Email:</strong> iaimuda.malang@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
};

export default Registration;