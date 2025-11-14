import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Leadership from "@/components/Leadership";
import WhyChooseUs from "@/components/WhyChooseUs";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Building2, Award, Users, Sparkles } from "lucide-react";

export default function WhoWeAre() {
  const stats = [
    { number: "20+", label: "Cities", icon: MapPin },
    { number: "20+", label: "Projects", icon: Building2 },
    { number: "100%", label: "Happy Clients", icon: Award },
    { number: "1000+", label: "Rooms", icon: Users },
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
              Who We Are
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 mb-8 leading-tight">
              We design and construct buildings tailored to your specific requirements.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-lg text-gray-600 leading-relaxed font-light"
            >
              <p>
                Reddy Hotels and Management group has worked with several cities in and around DFW Metroplex to build hotels for the communities and cities. Our group started with a small boutique hotel 20 years ago in Plainview TX and has since built over 20 hotels both ranging from elite franchises to custom boutique hotels.
              </p>
              <p>
                We've pioneered the hospitality industries in several cities and built the first hotel for the city of Plainview, Childress, Willspoint, Chandler and Bonham. As we continue in our mission to bring top notch hospitality to the cities in Texas, we're currently building 4 new hotels in the Metroplex. In addition to ground up constructions, we own and manage the hotels to ensure our customers and communities experience the best of hospitality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] overflow-hidden group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img 
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800"
                  alt="Hotel Construction"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement && !target.parentElement.querySelector('.fallback')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 flex items-center justify-center fallback';
                      fallback.innerHTML = '<div class="text-center text-gray-400"><svg class="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg><p class="text-sm font-light">Hotel Image</p></div>';
                      target.parentElement.appendChild(fallback);
                    }
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-4"
                >
                  <stat.icon className="w-10 h-10 text-gray-900 group-hover:text-gray-700 transition-colors" />
                </motion.div>
                <div className="text-6xl md:text-7xl font-light text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Journey Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-12 md:p-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-10">Our Journey</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "20 Years of Excellence",
                  description: "Starting with a modest boutique hotel in Plainview, TX, we've grown into a trusted name in hospitality development across the DFW Metroplex."
                },
                {
                  title: "Pioneering Firsts",
                  description: "We're proud to have built the first hotels in multiple cities including Plainview, Childress, Willspoint, Chandler, and Bonham."
                },
                {
                  title: "Diverse Portfolio",
                  description: "From elite franchise properties to custom boutique hotels, we've successfully completed over 20 projects, each tailored to meet unique needs."
                },
                {
                  title: "Full-Service Approach",
                  description: "Beyond construction, we own and manage our properties, ensuring consistent quality and exceptional guest experiences from the ground up."
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <h3 className="text-xl font-light text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <Leadership />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}
