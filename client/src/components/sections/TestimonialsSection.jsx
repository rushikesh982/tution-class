const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      grade: "Grade 12 Student",
      text: "Excellence Academy helped me improve my math scores from 60% to 95%. The teachers are amazing!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      grade: "Parent",
      text: "My son's confidence in science has grown tremendously. The personalized attention is exceptional.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      grade: "Grade 10 Student",
      text: "The flexible timings and quality teaching helped me balance studies with other activities perfectly.",
      rating: 5,
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-4">
            What Our Students Say
          </h2>
          <div className="section-divider"></div>
        </div>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4">
              <div className="card bg-light border-0 h-100 card-hover">
                <div className="card-body p-4">
                  <div className="testimonial-stars mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-muted fst-italic mb-4">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h4 className="h6 fw-bold text-dark mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-primary small mb-0">
                      {testimonial.grade}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials
