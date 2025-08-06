const ContactMap = () => {
  return (
    <div className="map-section">
      <div className="map-header">
        <h2 className="map-title">🗺️ Find Us</h2>
        <p className="map-subtitle">
          Located in the heart of the education district
        </p>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6827631507585!2d74.73432657543776!3d19.121568150539964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc8bd81c0da7dd%3A0xe0e59bd4e21a4f23!2sExcellence%20Academy!5e0!3m2!1sen!2sin!4v1754283957524!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Excellence Academy Location"
        ></iframe>

        <p style={{ marginTop: "1rem" }}>
          <strong>Address:</strong><br />
          123 Education Street, Learning District<br />
          Knowledge City, KC 12345
        </p>

        <p style={{ fontSize: "0.9rem", opacity: "0.8" }}>
          You can zoom and explore the area using the map above.
        </p>
      </div>
    </div>
  );
};

export default ContactMap;
