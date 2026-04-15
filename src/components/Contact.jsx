import React from 'react';

function Contact() {
  return (
    <section className="page page-contact">
      <div className="page_backdrop" />
      <div className="content_frame content_stack">
        <div className="eyebrow">Contact</div>
        <h1>Bookings, collaborations, and music inquiries.</h1>
        <p className="lead">
          For festival slots, venue bookings, press, or creative collaborations,
          reach out directly and include your event date, city, and a short brief.
        </p>
        <div className="contact_card">
          <span>Email</span>
          <a href="mailto:ekke.music.gh@gmail.com">ekke.music.gh@gmail.com</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
