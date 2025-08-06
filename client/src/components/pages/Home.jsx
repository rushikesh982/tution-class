import HeroSection from '../sections/HeroSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import '../css/Home.css';
import HomeAbout from '../sections/HomeAbout';
import HomeCourses from '../sections/HomeCourses';
import HomeTiming from '../sections/HomeTiming';
import HomeContact from '../sections/HomeContact';

const Home = () => {
  return (
    <div className="page active">
      <HeroSection />
      <HomeAbout/>
      <HomeCourses/>
      <HomeTiming/>
      <TestimonialsSection/>
      <HomeContact/>
    </div>
  );
};

export default Home;