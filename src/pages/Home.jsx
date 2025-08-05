// src/pages/Home.jsx
import HeroSlider from '../components/HeroSlider';
import CategoryCard from '../components/CategoryCard';
import DealsOfTheDay from '../components/DealsOfTheDay';
import FeaturedProducts from '../components/FeaturedProducts';
import TrendingProducts from '../components/TrendingProducts';
import CustomerTestimonials from '../components/CustomerTestimonials';
import Newsletter from '../components/Newsletter';


export default function Home() {
  return (
    <div className="font-poppins">
      {/* Hero section  */}
      <HeroSlider />

      {/* Category by shop section*/}
      <CategoryCard />
    
    {/* Deal of the day  */}
      <DealsOfTheDay />

    {/* Feature Product section  */}
      <FeaturedProducts />

    {/* Testimonila section  */}
    <CustomerTestimonials />

    {/* Trending product section  */}
    <TrendingProducts />

    {/* New Letter section  */}
    <Newsletter />

    </div>
  );
}
