import ConversionDescription from '../components/ConversionDescription';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OtherConversions from '../components/OtherConversions';
import QuickConversions from '../components/QuickConversions';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[937px] mx-auto md:max-w-xl lg:max-w-[937px] lg:flex lg:justify-between lg:gap-12">
        <div className="lg:flex-1 lg:max-w-[34rem]">
          <ConversionDescription />
          <OtherConversions />
        </div>

        <QuickConversions />
      </main>
      <Footer />
    </>
  );
}
