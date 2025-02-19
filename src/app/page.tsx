import Carousel from '@/components/Carousel/Carousel2';
import ActiveBlock from '@/components/Active/Active';
import ProductList from '@/components/Products/ProductList';
import IntroSection1 from '@/components/IntroSection/IntroSection1';
import IntroSection2 from '@/components/IntroSection/IntroSection2';
import IntroSection3 from '@/components/IntroSection/IntroSection3';

const slides = [
    {
      image: '/assets/carousel2/slide1.webp',
      alt: 'Slide 1',
      title: 'iBUYPOWER x VCT Americas',
      subtitle: 'UNLOCK YOUR ACE. iBUYPOWER is now the Official PC of Valorant Champions Tour Americas.',
      buttonText: 'PLAY LIKE THE PROS',
    },
    {
      image: '/assets/carousel2/slide2.webp',
      alt: 'Slide 2',
      title: 'THIS LEGEND IS UNBEATABLE',
      subtitle: 'NVIDIA GeForce RTX™ 50 Series, powered by Blackwell and AI',
      buttonText: 'LEARN MORE',
    },
    {
      image: '/assets/carousel2/slide3.webp',
      alt: 'Slide 3',
      title: 'Game Changer',
      subtitle: 'AMD Ryzen™ 7 9800X3D',
      buttonText: 'GET YOURS',
    },
];

const HomePage = () => {
  return (
    <main>
      {/* 輪播區塊 */}
      <Carousel slides={slides} />

      {/* Active 區塊 */}
      <ActiveBlock />

      {/* 產品列表 */}
      <ProductList />

      {/* IntroSection 區塊 */}
      <IntroSection1 />

      <IntroSection2 />
      
      <IntroSection3 />
    </main>
  );
};

export default HomePage;
