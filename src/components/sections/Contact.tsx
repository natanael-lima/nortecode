'use client';

import { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdSend, MdPerson } from 'react-icons/md';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id='contact' className="min-h-screen">
      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
         Ponte En <span className="text-teal-700">Contacto</span>
        </h1>
        <p className="text-lg text-gray-600/70 max-w-2xl mx-auto px-4">
          Nos encantaría saber de usted. Envíenos un mensaje y le responderemos lo antes posible.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-teal-600/20 relative overflow-hidden">
            {/* Light effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-teal-800"></div>
            
            
            <div className="relative z-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Enviar Mensaje</h2>
                <p className="text-gray-600">Complete el siguiente formulario y nos comunicaremos con usted en breve.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <MdPerson className="absolute left-3 top-3 h-5 w-5 text-teal-700" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nombre"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:teal-sky-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div className="relative">
                    <MdEmail className="absolute left-3 top-3 h-5 w-5 text-teal-700" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                  />
                </div>
                <button className="w-full group  bg-teal-700 text-white shadow-md hover:scale-102 hover:shadow-lg hover:shadow-teal-500/20 text-teal-50 cursor-pointer text-teal-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out flex items-center justify-center gap-2">
                           <MdSend className="h-5 w-5" />
                  Send Message
                  </button>


              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Additional Info */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-teal-600/30">
              <h4 className="font-semibold text-teal-800 mb-3">Business Hours</h4>
              <div className="space-y-2 text-sm text-teal-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-teal-700/20 hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-teal-600/15 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MdEmail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Dirección de Mail</h4>
                    <p className="text-gray-600">contact@nortecode.com</p>
                    <p className="text-gray-600">support@nortecode.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-teal-700/20 hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-teal-600/15 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MdPhone className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone Number</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-teal-700/20 hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-teal-600/15 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MdLocationOn className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Office Location</h4>
                    <p className="text-gray-600">123 Business Street</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}