const CallToAction = () => {
  return (
    <section className="py-5 gradient-bg text-white">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="lead mb-4">
              Join thousands of successful students who have achieved their
              academic goals with Excellence Academy
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <button className="btn btn-light btn-lg px-4">
                Schedule Free Demo
              </button>
              <button className="btn btn-outline-light btn-lg px-4">
                Contact Counselor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToAction