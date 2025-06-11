import React, { useState } from 'react';
import { submitContact } from '../utils/api';
import { validateEmail, validateMobile } from '../utils/validators';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic client-side validation
    if (!validateEmail(form.email)) return setStatus('Invalid e-mail');
    if (!validateMobile(form.mobile)) return setStatus('Mobile must be 10 digits');

    try {
      await submitContact(form);
      setStatus('Thank you! We will reach out soon.');
      setForm({ name: '', email: '', mobile: '', message: '' });
    } catch (err) {
      setStatus('Error sending message – please try again.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />
      <input
        name="mobile"
        value={form.mobile}
        onChange={handleChange}
        placeholder="Mobile (10 digits)"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="How can we help?"
        rows="4"
        required
      />
      <button type="submit">Send</button>
      {status && <p className="status">{status}</p>}
    </form>
  );
};

export default ContactForm;
