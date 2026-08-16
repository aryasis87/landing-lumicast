'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Lazy load non-critical icons
const CheckCircleIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.CheckCircleIcon), {
  loading: () => <span className="inline-block w-5 h-5 bg-rule/60 rounded-full animate-pulse" />,
  ssr: false
});
const UsersIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.UsersIcon), {
  loading: () => <span className="inline-block w-5 h-5 bg-rule/60 rounded-full animate-pulse" />,
  ssr: false
});
const ArrowTrendingUpIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.ArrowTrendingUpIcon), {
  loading: () => <span className="inline-block w-5 h-5 bg-rule/60 rounded-full animate-pulse" />,
  ssr: false
});
const BriefcaseIcon = dynamic(() => import('@heroicons/react/24/outline').then(mod => mod.BriefcaseIcon), {
  loading: () => <span className="inline-block w-5 h-5 bg-rule/60 rounded-full animate-pulse" />,
  ssr: false
});

const About = () => {
  // Data moved to constants for better maintainability
  const FEATURES = [
    {
      icon: <CheckCircleIcon className="w-5 h-5 text-live" aria-hidden="true" />,
      title: "Materi Praktis",
      desc: "Kurikulum berbasis kebutuhan organisasi"
    },
    {
      icon: <UsersIcon className="w-5 h-5 text-live" aria-hidden="true" />,
      title: "Networking",
      desc: "Sesi diskusi dengan sesama pengurus"
    },
    {
      icon: <ArrowTrendingUpIcon className="w-5 h-5 text-live" aria-hidden="true" />,
      title: "Best Practice",
      desc: "Strategi kepengurusan yang terbukti efektif"
    },
    {
      icon: <BriefcaseIcon className="w-5 h-5 text-live" aria-hidden="true" />,
      title: "Sertifikat",
      desc: "Bukti partisipasi dari IAI Muda"
    }
  ];

  const LEARNING_POINTS = [
    "Fundamental kepengurusan organisasi",
    "Strategi pengembangan anggota",
    "Manajemen program dan kegiatan",
    "Best practice dari generasi sebelumnya"
  ];

  const TARGET_AUDIENCE = [
    {
      title: "Pengurus Gen 9",
      desc: "Pengurus aktif IAI Muda Malang Raya"
    },
    {
      title: "Calon Pengurus",
      desc: "Anggota yang berminat aktif di organisasi"
    },
    {
      title: "Alumni Pengurus",
      desc: "Mentor dan advisor dari generasi sebelumnya"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header Section */}
        <header className="text-center mb-8 md:mb-12">
          <h1 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-light text-ink mb-3">
            Tentang <span className="text-live font-bold">Training</span>
          </h1>
          <p className="text-ink-soft max-w-xl mx-auto leading-relaxed">
            Meningkatkan pemahaman dan kapabilitas kepengurusan organisasi untuk IAI Muda Malang Raya Gen 9.
          </p>
        </header>

        {/* Main Content */}
        <main>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Deskripsi */}
            <article className="flex-1 space-y-6">
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-ink">Yang Akan Dipelajari</h2>
                <ul className="space-y-3">
                  {LEARNING_POINTS.map((item, i) => (
                    <li key={i} className="flex items-start text-ink-soft">
                      <CheckCircleIcon className="w-4 h-4 text-live mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Context */}
              <div className="p-4 bg-sheet-2 rounded-lg border border-rule">
                <h3 className="font-medium text-ink mb-2">Konteks Training</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Training ini dirancang khusus untuk internalisasi pemahaman dan meningkatkan kapabilitas 
                  pengurus dalam menjalankan tugas dan tanggung jawab organisasi IAI Muda Komisariat Malang.
                </p>
              </div>
            </article>

            {/* Fitur Training */}
            <aside className="flex-1 grid grid-cols-1 gap-3 md:gap-4">
              {FEATURES.map((feature, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  viewport={{ once: true, margin: "50px" }}
                  className="p-3 md:p-4 bg-sheet-2/30 rounded-lg"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-1.5 bg-white rounded-md border border-rule" aria-hidden="true">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-ink">{feature.title}</h3>
                      <p className="text-ink-soft text-sm mt-1">{feature.desc}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </aside>
          </div>
        </main>
      </div>
    </section>
  );
};

export default About;