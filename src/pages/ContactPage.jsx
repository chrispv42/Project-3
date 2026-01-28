// src/pages/ContactPage.jsx
import React, { useState } from 'react';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  comments: '',
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (key) => (e) => {
    setSubmitted(false);
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const isValid =
    form.firstName.trim() && form.lastName.trim() && form.email.trim() && form.comments.trim();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <>
      <div className="grid">
        <section className="card">
          <h1>Contact</h1>
          <p className="muted">Fill out the form and submit.</p>

          <form className="contact-form" onSubmit={onSubmit}>
            <label className="contact-field">
              First Name
              <input
                className="input"
                value={form.firstName}
                onChange={onChange('firstName')}
                autoComplete="given-name"
                required
              />
            </label>

            <label className="contact-field">
              Last Name
              <input
                className="input"
                value={form.lastName}
                onChange={onChange('lastName')}
                autoComplete="family-name"
                required
              />
            </label>

            <label className="contact-field">
              Email
              <input
                className="input"
                type="email"
                value={form.email}
                onChange={onChange('email')}
                autoComplete="email"
                required
              />
            </label>

            <label className="contact-field">
              Comments
              <textarea
                className="input contact-textarea"
                value={form.comments}
                onChange={onChange('comments')}
                required
              />
            </label>

            <div className="contact-actions">
              <button className="btn" type="submit">
                Submit
              </button>
              {submitted && <span className="muted">Message sent successfully! Please allow for up to 24 hours for a response.</span>}
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
