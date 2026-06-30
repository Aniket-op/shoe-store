"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-6">Contact Us</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            Have a question about a product, order, or just want to talk sneakers? Our team is here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-8 md:p-12 rounded-3xl"
          >
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide mb-8">Send us a message</h2>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="firstName" className="w-full bg-white border-gray-200 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" id="lastName" className="w-full bg-white border-gray-200 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" className="w-full bg-white border-gray-200 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" className="w-full bg-white border-gray-200 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={5} className="w-full bg-white border-gray-200 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow resize-none"></textarea>
              </div>
              <button className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Store Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-12"
          >
            <div>
              <h2 className="font-display text-2xl font-bold uppercase tracking-wide mb-8">Store Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Flagship Store</h3>
                    <p className="text-gray-500 font-light">123 Sneaker Avenue, SoHo<br />New York, NY 10012</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Phone</h3>
                    <p className="text-gray-500 font-light">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <p className="text-gray-500 font-light">hello@soleboutique.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Hours</h3>
                    <p className="text-gray-500 font-light">Mon - Sat: 10AM - 8PM<br />Sun: 11AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="flex-grow min-h-[300px] bg-gray-200 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white px-6 py-3 rounded-full font-medium shadow-lg flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-black" /> Get Directions
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
