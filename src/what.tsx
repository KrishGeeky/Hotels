import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Building2, Hammer, Briefcase, Home, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function WhatWeDo() {
  const services = [
    {
      icon: Building2,
      title: "HOSPITALITY",
      description: "Experience top-notch hospitality with our diverse range of hotel brands. Whether you're embarking on a routine business trip, seeking a luxurious getaway, or looking for a comfortable stay during your leisure travels, we have a hotel near you that will warmly welcome you. No matter where you go or how you choose to stay, our commitment to exceptional service ensures an unforgettable experience.",
      link: "/projects",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600"
    },
    {
      icon: Hammer,
      title: "CONSTRUCTION",
      description: "With our vast expertise, we excel in conceptualizing, planning, and executing projects in the realms of hospitality, residential, commercial, and high-density mixed-use development. Our track record includes successful partnerships with over 10 cities in the metroplex, guiding projects from initial conception and land acquisition to construction, development, and operational launch.",
      link: "/projects",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600"
    },
    {
      icon: Briefcase,
      title: "MANAGEMENT",
      description: "Reddy Management Group (RMG) is a leading provider of hotel management and consultation services. We specialize in optimizing operational earnings, cost reduction, and ensuring exceptional customer service for hotel owners. Working alongside our partners and investors, we actively recruit local talent to support communities and cities.",
      link: "/contact",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600"
    },
    {
      icon: Home,
      title: "REAL ESTATE CONSULTING",
      description: "Reddy Management Group (RMG) combines deep real estate knowledge and functional expertise, we assist our clients and partners in reimagining their real estate acquisition, development, and utilization processes. Our comprehensive real estate services encompass strategy development, revenue forecasting, capital allocation, consumer research, and more.",
      link: "/contact",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
    },
  ];

  const stats = [
    { number: "20+", label: "Years of Experience" },
    { category: "Commercial" },
    { category: "Residential" },
    { category: "Hospitality" },
    { category: "Multipurpose" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-7">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-16">
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
              What We Do
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 mb-8 leading-tight">
              Our work is our reputation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              We protect it with every project we do
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="text-center"
              >
                {stat.number ? (
                  <>
                    <div className="text-5xl md:text-6xl font-light text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wider font-light">
                      {stat.label}
                    </div>
                  </>
                ) : (
                  <div className="text-lg font-light text-gray-900 uppercase tracking-wider">
                    {stat.category}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-sm uppercase tracking-[0.4em] text-gray-500 font-light mb-4">
              Our Services
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6">
              Sure, we construct impressive structures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              We work with clients, providing exceptional services that are catered specifically to their needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-[300px] mb-6 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement && !target.parentElement.querySelector('.fallback')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 flex items-center justify-center fallback';
                          fallback.innerHTML = `<div class="text-center text-gray-400"><svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg><p class="text-sm font-light">${service.title}</p></div>`;
                          target.parentElement.appendChild(fallback);
                        }
                      }}
                    />
                  </motion.div>
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gray-900">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 uppercase tracking-wider">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-light mb-6">
                  {service.description}
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-gray-900 bg-transparent hover:bg-gray-900 hover:text-white text-gray-900 rounded-none"
                  >
                    <Link to={service.link} className="flex items-center gap-2">
                      Know More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 text-white p-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Powerful straight forward solutions for your construction needs
            </h2>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-white text-gray-900 hover:bg-gray-100 rounded-none mt-6 px-10 py-6 text-base font-light"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
