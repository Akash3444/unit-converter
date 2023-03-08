import ConversionDescription from '../components/ConversionDescription';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OtherConversions from '../components/OtherConversions';
import QuickConversions from '../components/QuickConversions';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl px-2 mx-auto md:max-w-xl lg:max-w-screen-xl lg:flex lg:justify-between lg:gap-12">
        <div>
          <ConversionDescription />
          <OtherConversions />
        </div>

        <QuickConversions />
      </main>
      <Footer />
    </>
  );
}
