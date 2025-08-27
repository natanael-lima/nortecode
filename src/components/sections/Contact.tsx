'use client';

import { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdSend, MdPerson, MdMessage } from 'react-icons/md';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100">
      {/* Header */}
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Get In <span className="text-sky-600">Touch</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          We d love to hear from you. Send us a message and we ll respond as soon as possible.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-sky-100 relative overflow-hidden">
            {/* Light effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-500"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-sky-100 to-transparent rounded-full opacity-50"></div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Send Message</h2>
                <p className="text-gray-600">Fill out the form below and we ll get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <MdPerson className="absolute left-3 top-3 h-5 w-5 text-sky-500" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div className="relative">
                    <MdEmail className="absolute left-3 top-3 h-5 w-5 text-sky-500" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="relative">
                  <MdMessage className="absolute left-3 top-3 h-5 w-5 text-sky-500" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-sky-600 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <MdSend className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Image */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-sky-100 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-sky-500"></div>
              <div className="h-64 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-25"></div>
                <div className="relative z-10 text-center text-white">
                  <div className="w-20 h-20 bg-white opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <MdEmail className="h-10 w-10 text-sky-800" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Let s Connect</h3>
                  <p className="text-sky-100">We re here to help you succeed</p>
                </div>
               
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-sky-100 hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MdEmail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Address</h4>
                    <p className="text-gray-600">contact@company.com</p>
                    <p className="text-gray-600">support@company.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-sky-100 hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MdPhone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone Number</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-sky-100 hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MdLocationOn className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Office Location</h4>
                    <p className="text-gray-600">123 Business Street</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-200">
              <h4 className="font-semibold text-gray-800 mb-3">Business Hours</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}