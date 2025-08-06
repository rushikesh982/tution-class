import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:1000/api/hero')
      .then(res => res.json())
      .then(data => {
        setHeroData(data[0]); // Get the first row from result
      })
      .catch(err => {
        console.error('Error fetching hero data:', err);
      });
  }, []);

  if (!heroData) return null; // or a loading spinner

  return (
    <section className="gradient-bg text-white py-5">
      <div className="container">
        <div className="row justify-content-center text-center" style={{ minHeight: '500px', display: 'flex', alignItems: 'center' }}>
          <div className="col-lg-10">
            <h1 className="hero-title mb-4">
              {heroData.heroHeading}
            </h1>
            <p className="hero-subtitle mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              {heroData.heroDescription}
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <button className="btn btn-light btn-lg px-4">
                Enroll Now
              </button>
              <button className="btn btn-outline-custom btn-lg px-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
