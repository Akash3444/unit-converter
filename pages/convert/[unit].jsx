import convert from 'convert-units';
import ConversionDescription from '../../components/ConversionDescription';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import OtherConversions from '../../components/OtherConversions';
import QuickConversions from '../../components/QuickConversions';

const UnitConverter = () => {
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
};

export const getStaticPaths = () => {
  return {
    paths: convert()
      .measures()
      .map((measure) => ({ params: { unit: measure } })),
    fallback: false,
  };
};

export const getStaticProps = () => {
  return { props: {} };
};

export default UnitConverter;
