export type HasilSNBT = "lolos" | "tidak" | "unknown";

export const dataPacar = {
  nama: "Cinta",
  hasilSNBT: "unknown" as HasilSNBT,
  fotoHero: "/images/cinta-1.jpg",
  tandaTangan: "Barlian",
};

export const pesanAkhir = [
  "Halo Cintaaa,",
  "Pasti rasanya campur aduk ya hari ini? Aku tau banget gimana kerasnya perjuangan kamu. Tiap malem nugas, ngerjain tryout sampe kadang ketiduran, nahan capek padahal pengen banget rebahan. Aku merhatiin itu semua kok.",
  "Hari ini hasilnya bakal keluar, dan apa pun itu, aku cuma mau kamu tau kalo aku bener-bener bangga sama kamu. Nilai ujian itu cuma sekadar angka, nggak nentuin seberapa hebat kamu atau seberapa cerahnya masa depan kamu. Usaha kamu itu yang paling luar biasa.",
  "Kalo hasilnya sesuai harapan, asikkk! Kita rayain ya! Tapi kalo pun belum rezeki, nggak apa-apa banget sayang, dunia belum kiamat kok. Masih banyak banget jalan lain buat sukses, dan aku bakal selalu ada di sini buat nemenin kamu di setiap langkahnya.",
  "Jangan pernah ngerasa kurang atau gagal, ya. Kamu tuh pintar, tekun, dan aku yakin kamu bakal bersinar cerah di manapun kamu berada. Sekarang, istirahat ya, jangan dipikirin terlalu berat lagi. Kamu sudah berusaha semampumu.",
  "Aku sayang banget sama kamu, dan aku akan selalu dukung kamu. Semangat terus cantiknya aku!",
];

export const motivasiList = [
  "Semangat sayang, kamu pasti bisa.",
  "Nggak usah dipikirin terlalu berat ya, kamu udah ngelakuin yang terbaik.",
  "Apa pun hasilnya, aku tetep bangga banget sama pacarku ini.",
  "Kerja keras kamu selama ini nggak bakal sia-sia kok.",
  "Kamu lebih hebat dari yang kamu bayangin lho.",
  "Santai aja, jalan ke depan tuh masih panjang banget.",
  "Jangan lupa istirahat ya, kesehatan kamu nomor satu.",
  "Kalo capek, cerita aja ke aku. Aku siap dengerin kapanpun.",
  "Pede aja! Persiapan kamu udah super matang kok.",
  "Aku selalu ada buat kamu, inget itu ya.",
];

export const hasilCopy: Record<
  HasilSNBT,
  { judul: string; paragraf: string; kutipan: string }
> = {
  lolos: {
    judul: "Selamat, Cinta",
    paragraf:
      "Kamu diterima. Semua kerja kerasmu belajar, begadang, dan catatan rapi itu akhirnya membuahkan hasil. Aku bangga banget sama kamu.",
    kutipan:
      "Semua akan baik-baik saja. Cantik itu butuh waktu untuk mekar.",
  },
  tidak: {
    judul: "Tetap juara, Cinta",
    paragraf:
      "Mungkin hasilnya belum sesuai harapan, tapi percaya sama aku: usahamu tidak pernah sia-sia. Ini bukan akhir cerita, cuma satu babak. Aku tetap bangga banget sama kamu.",
    kutipan:
      "Dunia belum kiamat. Masih banyak jalan, dan aku bakal selalu nemenin kamu.",
  },
  unknown: {
    judul: "Untuk hasilnya nanti",
    paragraf:
      "Apa pun hasil SNBT-mu nanti, aku udah siap peluk kamu. Yang aku lihat bukan angkanya, tapi kamu yang mau berjuang sampai sejauh ini.",
    kutipan:
      "Semua akan baik-baik saja. Cantik itu butuh waktu untuk mekar.",
  },
};

export const timelineData = [
  {
    title: "Waktu yang kamu habiskan buat belajar",
    desc: "Sebenernya aku pengen banget nemenin kamu belajar, tapi belum kesampaian. Gapapa, kamu bisa handle sendiri, dan aku proud of you.",
    photo: "/images/wa-20260524-39a.jpeg",
  },
  {
    title: "Rajin ikut les",
    desc: "Waktu luang yang harusnya buat santai, malah kamu pake buat belajar tiap hari. Komitmen kamu sudah hebat.",
    photo: "/images/wa-20260524-39.jpeg",
  },
  {
    title: "Tetap bangkit waktu susah",
    desc: "Pasti ada momen ngerasa down kalo soalnya susah atau nilai TO kurang, tapi kamu selalu bisa bangkit lagi dan belajar terus. Proud of you.",
    photo: "/images/wa-20260524-40a.jpeg",
  },
  {
    title: "Catetan paling rapi",
    desc: "Tulisan tangan kamu di catetan selalu rapi, bikin belajarnya jadi lebih gampang kan? Keliatan banget kok niatnya.",
    photo: "/images/wa-20260524-40b.jpeg",
  },
  {
    title: "Tetap senyum meski capek",
    desc: "Walaupun capek banget mikirin pelajaran, kamu tetep senyum cantik dan nggak ngeluh berlebihan. Aku sayang banget jadinya.",
    photo: "/images/wa-20260524-40.jpeg",
  },
];

export type GaleriItem = {
  src: string;
  label: string;
  tanggal: string;
  asal: string;
};

export const galeriData: GaleriItem[] = [
  { src: "/images/cinta-2.jpg", label: "Kamu yang ini", tanggal: "Mei 2026", asal: "Foto kamu" },
  { src: "/images/img-20260508-18.jpg", label: "Kiriman pagi", tanggal: "8 Mei 2026", asal: "WhatsApp" },
  { src: "/images/snap-2033389452.jpg", label: "Snap favorit", tanggal: "Snapchat", asal: "Snapchat" },
  { src: "/images/cinta-3.jpg", label: "Senyum biasa", tanggal: "Mei 2026", asal: "Foto kamu" },
  { src: "/images/img-20260517-15.jpg", label: "Lagi santai", tanggal: "17 Mei 2026", asal: "WhatsApp" },
  { src: "/images/snap-1046836981.jpg", label: "Ekspresi lucu", tanggal: "Snapchat", asal: "Snapchat" },
  { src: "/images/cinta-4.jpg", label: "Sore itu", tanggal: "Mei 2026", asal: "Foto kamu" },
  { src: "/images/img-20260519-16.jpg", label: "Sesi tuker foto", tanggal: "19 Mei 2026", asal: "WhatsApp" },
  { src: "/images/snap-1160792591.jpg", label: "Momen random", tanggal: "Snapchat", asal: "Snapchat" },
  { src: "/images/cinta-5.jpg", label: "Favorit aku", tanggal: "Mei 2026", asal: "Foto kamu" },
  { src: "/images/img-20260508-55.jpg", label: "Pagi-pagi", tanggal: "8 Mei 2026", asal: "WhatsApp" },
  { src: "/images/snap-1947761707.jpg", label: "Gaya bebas", tanggal: "Snapchat", asal: "Snapchat" },
  { src: "/images/img-20260518-21.jpg", label: "Habis les", tanggal: "18 Mei 2026", asal: "WhatsApp" },
  { src: "/images/snap-506933324.jpg", label: "Tetap ceria", tanggal: "Snapchat", asal: "Snapchat" },
  { src: "/images/img-20260517-28.jpg", label: "Nunggu jawaban", tanggal: "17 Mei 2026", asal: "WhatsApp" },
  { src: "/images/snap-992708733.jpg", label: "Teman main hati", tanggal: "Snapchat", asal: "Snapchat" },
];

export const heroCrossfade = [
  "/images/cinta-1.jpg",
  "/images/cinta-3.jpg",
  "/images/cinta-5.jpg",
];
