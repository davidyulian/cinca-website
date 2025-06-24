import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white p-6">
      <header className="text-center py-10">
        <motion.h1
          className="text-4xl font-bold text-green-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          CinCA - Chemistry in Climate Action
        </motion.h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
          Mengintegrasikan kimia dan aksi iklim melalui pembelajaran berbasis proyek.
        </p>
      </header>

      <section className="my-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Visi</h2>
        <p className="text-gray-700 mb-6">
          Menjadi pelopor dalam menghubungkan konsep kimia dengan aksi nyata terhadap perubahan iklim melalui edukasi dan proyek berkelanjutan.
        </p>
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Misi</h2>
        <ul className="list-disc ml-5 text-gray-700 space-y-2">
          <li>Mengembangkan produk berbasis sains yang ramah lingkungan.</li>
          <li>Memberdayakan siswa untuk berpikir kritis dan bertindak nyata dalam isu perubahan iklim.</li>
          <li>Menumbuhkan kepedulian lingkungan melalui pembelajaran kimia kontekstual.</li>
        </ul>
      </section>

      <section className="my-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Produk CinCA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-lg">EGGSORB</h3>
            <p className="text-sm text-gray-600">
              Adsorben hibrid dari cangkang telur dan mikroalga untuk menyerap zat warna limbah laundry.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-lg">Biopads</h3>
            <p className="text-sm text-gray-600">
              Media filtrasi dari bahan alam untuk penyaringan mikroplastik pada air sungai dan limbah rumah tangga.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 CinCA. SMA Negeri 31 Jakarta.
      </footer>
    </div>
  );
}