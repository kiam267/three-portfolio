'use client';

import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
  const fromRef = useRef();
  const [loading, setLoading] = useState(false);
  const [from, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handelChange = ({ target: { name, value } }) => {
    setForm({ ...from, [name]: value });
  };
  const handelSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_gam4nco',
        'template_5ble8jp',
        {
          from_name: from.name,
          to_name: 'Abid Hasan Kiam',
          to_email: 'kiamhasan267@gmail.com',
          from_email: from.email,
          message: from.message,
        },
        'E0FukAyJG2zst2Kfq'
      );
      setLoading(false);
      alert('Your message has been sent!');
      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <section
      className="c-space my-20 lg:container mx-auto"
      id="contact"
    >
      <div className="relative  min-h-screen flex items-center justify-center flex-col ">
        <img
          src="/assets/terminal.png "
          alt="teminal"
          className="absolute hidden sm:block inset-0 sm:min-h-screen "
        />

        <div className="contact-container">
          <h3 className="head-text">Let's talk </h3>
          <p className="text-lg text-white-600 ">
            Whether you're looking to build a new website,
            improve your existing platform, or bring a
            unique project to life, I'm here to help.
          </p>
          <form
            ref={fromRef}
            onSubmit={handelSubmit}
            className="mt-12 flex flex-col space-y-7 "
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={from.name}
                onChange={handelChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={from.email}
                onChange={handelChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">
                Your message
              </span>
              <textarea
                name="message"
                value={from.message}
                onChange={handelChange}
                required
                rows={5}
                className="field-input max-h-96"
                placeholder="Hi, I wanna give you a job..."
              />
            </label>
            <button
              className="field-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sendeing' : 'Send Message'}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
