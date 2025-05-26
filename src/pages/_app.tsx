import '@/app/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  
  // Don't show navbar and footer on login and signup pages
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  return (
    <div className={`${inter.className} flex min-h-screen flex-col font-ubuntu`}>
      {!isAuthPage && <Navbar />}
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default MyApp; 