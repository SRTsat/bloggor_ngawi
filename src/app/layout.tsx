import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Bloggor Ngawi',
  description: 'Situs portofolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="text-black min-h-screen flex flex-col selection:bg-[#000080] selection:text-white p-2 sm:p-4">
        <Navbar />
        <main className="flex-1 w-full max-w-6xl mx-auto py-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}