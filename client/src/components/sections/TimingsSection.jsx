const TimingsSection = () => {
  const timings = [
    {
      id: 1,
      course: 'Mathematics',
      days: 'Mon, Wed, Fri',
      morning: '8:00 AM - 10:00 AM',
      evening: '4:00 PM - 6:00 PM',
      weekend: '10:00 AM - 12:00 PM',
      duration: '2 hours'
    },
    // Add other timing data
  ];

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Batch Timings</h1>
        <p className="section-subtitle">
          Flexible schedules designed to accommodate different student needs
          and preferences
        </p>

        {/* Timing options and table would go here */}

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            to="/contact"
            className="btn"
            style={{ background: '#4f46e5', color: 'white', marginRight: '1rem' }}
          >
            Book Your Slot
          </Link>
          <Link
            to="/courses"
            className="btn"
            style={{ border: '1px solid #4f46e5', color: '#4f46e5', background: 'transparent' }}
          >
            View Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TimingsSection;