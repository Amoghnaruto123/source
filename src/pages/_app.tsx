import '@/app/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Don't show navbar and footer on login and signup pages
  const isAuthPage = router.pathname === '/login' || router.pathname === '/signup';

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