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

  function updateField(key) {
    return function handleChange(e) {
      setSubmitted(false);
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };
  }

  const isValid =
    form.firstName.trim() && form.lastName.trim() && form.email.trim() && form.comments.trim();

  function onSubmit(e) {
    e.preventDefault();
    if (!isValid) return;

    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <div className="grid">
      <section className="card" aria-label="Contact form">
        <h1>Contact</h1>
        <p className="muted">Fill out the form and submit.</p>

        <form className="contact-form" onSubmit={onSubmit}>
          <label className="contact-field" htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            className="input"
            value={form.firstName}
            onChange={updateField('firstName')}
            autoComplete="given-name"
            required
          />

          <label className="contact-field" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            className="input"
            value={form.lastName}
            onChange={updateField('lastName')}
            autoComplete="family-name"
            required
          />

          <label className="contact-field" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="input"
            type="email"
            value={form.email}
            onChange={updateField('email')}
            autoComplete="email"
            required
          />

          <label className="contact-field" htmlFor="comments">
            Comments
          </label>
          <textarea
            id="comments"
            className="input contact-textarea"
            value={form.comments}
            onChange={updateField('comments')}
            required
          />

          <div className="contact-actions">
            <button className="btn" type="submit">
              Submit
            </button>

            {submitted && (
              <span className="muted" role="status" aria-live="polite">
                Message sent successfully! Please allow up to 24 hours for a response.
              </span>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}
