import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '@/components/Banner';

export const metadata = {
  title: 'E-Commerce',
  description: 'An example e-commerce website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        
        <main>{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
