import { useState, memo } from "react";
import axios from "axios";
import { Input, Button } from "@/components/ui";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";

const Contact = memo(function Contact() {
  const [details, setDetails] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
    await axios.post('http://localhost:8000/api/contact', details);
    setSubmitted(true);
      setDetails({ name: '', email: '', phone: '', message: '' });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      alert(error.response?.data?.error || 'Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-7">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-12 h-12 text-gray-400 mx-auto" />
            </motion.div>
            <div className="text-sm uppercase tracking-[0.4em] text-gray-500 font-light mb-6">
              Contact Us
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 mb-8 leading-tight">
              Ready For Next Project?
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Let's Build something greater together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-gray-50 via-white to-red-50/30 p-10 md:p-12 shadow-2xl border-t-4 border-red-600">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-light text-gray-900 mb-2">Send us a message</h3>
                      <p className="text-sm text-gray-600 font-light">We'll get back to you within 24 hours</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                        Name *
                      </label>
                      <Input
                        name="name"
                        placeholder="Enter your full name"
                        required
                        value={details.name}
                        onChange={handleChange}
                        className="bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 font-light py-6 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        value={details.email}
                        onChange={handleChange}
                        className="bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 font-light py-6 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                        Phone *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        required
                        value={details.phone}
                        onChange={handleChange}
                        className="bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 font-light py-6 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        placeholder="Tell us about your project..."
                        required
                        value={details.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full p-4 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 resize-none rounded-lg font-light transition-all"
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-7 text-base font-medium rounded-lg transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        {loading ? "Sending Message..." : "Send Message"}
                      </Button>
                    </motion.div>
                    <p className="text-xs text-center text-gray-500 mt-4">
                      * Required fields
                    </p>
    </form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-16"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    >
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-3xl font-light text-gray-900 mb-3">Message Sent Successfully!</h3>
                    <p className="text-gray-600 font-light mb-6">Thank you for contacting us. Our team will respond within 24 hours.</p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-lg"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-10">Get in Touch</h2>
                <div className="space-y-6">
                  {[
                    { icon: Phone, label: "Phone Number", value: "+1 806-292-6676", link: "tel:+18062926676" },
                    { icon: Mail, label: "Email Address", value: "gk@reddyhotels.com", link: "mailto:gk@reddyhotels.com" },
                    { icon: MapPin, label: "Location", value: "3001 Dimmitt Road Plainview, TX 79072", link: "https://maps.google.com/?q=3001+Dimmitt+Road+Plainview+TX+79072" },
                  ].map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.link}
                      target={item.icon === MapPin ? "_blank" : undefined}
                      rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 8, scale: 1.02 }}
                      className="flex items-start gap-4 p-5 bg-gradient-to-br from-gray-50 to-red-50/30 hover:from-red-50 hover:to-red-100/50 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer group rounded-lg"
                    >
                      <div className="p-4 bg-gradient-to-br from-red-600 to-red-700 group-hover:from-red-700 group-hover:to-red-800 rounded-lg shadow-md transition-all">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1 uppercase tracking-wider font-semibold">
                          {item.label}
                        </p>
                        <p className="text-base font-medium text-gray-900 group-hover:text-red-700 transition-colors">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-lg shadow-lg mt-8"
              >
                <h3 className="text-white font-semibold text-lg mb-3">Why Choose Us?</h3>
                <p className="text-red-100 font-light leading-relaxed text-sm">
                  Reddy Hotels and Management Group has worked with several cities in and around DFW Metroplex to build hotels for communities. With over 20 years of experience, we're your trusted partner in hospitality development.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
});

export default Contact;
