import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ArrowRight, MapPin, Building2, Award, Users, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { number: "20+", label: "Cities", icon: MapPin },
    { number: "20+", label: "Projects", icon: Building2 },
    { number: "100%", label: "Happy Clients", icon: Award },
    { number: "1000+", label: "Rooms", icon: Users },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-gray-900 overflow-hidden pt-7">
      <Navigation />

      {/* Hero Section - Full Screen with Image Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
        {/* Background Image with Parallax */}
        <motion.div
          style={{
            x: useSpring(mousePosition.x, { stiffness: 50, damping: 20 }),
            y: useSpring(mousePosition.y, { stiffness: 50, damping: 20 }),
            scale: heroScale,
            opacity: heroOpacity,
          }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-blue-900/10 to-white/90"></div>
          {/* Hero Image */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920')] bg-cover bg-center opacity-15"></div>
            {/* Pattern overlay */}
            <div className="absolute inset-0 pattern-bg opacity-30"></div>
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto max-w-7xl px-6 relative z-10"
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm uppercase tracking-[0.4em] text-gray-600 font-light mb-6"
              >
                REDDY HOTELS & MANAGEMENT GROUP
              </motion.div>

              <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-gray-900 leading-[0.95] mb-8"
              >
                Quality Urban
                <br />
                <span className="font-normal">Lifestyle</span>
                <br />
                <span className="text-6xl md:text-7xl lg:text-8xl">Is Being Created</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-2xl mb-12"
              >
                We believe hospitality is an art. Every detail refined, every experience curated, 
                we weave a tapestry of luxury that leaves an indelible mark.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-8 text-lg font-light rounded-none transition-all duration-300 shadow-lg"
                  >
                    <Link to="/projects" className="flex items-center gap-3">
                      Discover
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-gray-900 bg-transparent hover:bg-gray-900 hover:text-white text-gray-900 px-12 py-8 text-lg font-light rounded-none transition-all duration-300"
                  >
                    <Link to="/contact">Book a Consultation</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-600 uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-gray-600 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Welcome Message Section */}
      <section className="relative py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Happy to see you here!
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              We proudly present Reddy Hotels & Management Group. A one of a kind hospitality 
              development company bringing luxury to communities across Texas. We take great pride 
              in our work and hope to enchant you with exceptional hospitality experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-6 bg-gray-900">
        <div className="absolute inset-0 pattern-bg opacity-5"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-4"
                >
                  <stat.icon className="w-10 h-10 text-white group-hover:text-gray-300 transition-colors drop-shadow-lg" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-6xl md:text-7xl font-light text-white mb-2 drop-shadow-lg"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-300 uppercase tracking-wider font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="relative py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="text-sm uppercase tracking-[0.4em] text-gray-500 font-light mb-4">
                Who We Are
              </div>
              <h2 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 leading-tight">
                We design and construct buildings tailored to your specific requirements.
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  Reddy Hotels and Management group has worked with several cities in and around 
                  DFW Metroplex to build hotels for the communities and cities. Our group started 
                  with a small boutique hotel 20 years ago in Plainview TX and has since built over 
                  20 hotels both ranging from elite franchises to custom boutique hotels.
                </p>
                <p>
                  We've pioneered the hospitality industries in several cities and built the first 
                  hotel for the city of Plainview, Childress, Willspoint, Chandler and Bonham. 
                  As we continue in our mission to bring top notch hospitality to the cities in Texas, 
                  we're currently building 4 new hotels in the Metroplex.
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-2 border-gray-900 bg-transparent hover:bg-gray-900 hover:text-white text-gray-900 px-10 py-6 text-base font-light rounded-none transition-all duration-300"
                >
                  <Link to="/who">Know More...</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[600px] overflow-hidden group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img 
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800"
                  alt="Hotel"
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
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="text-sm uppercase tracking-[0.4em] text-gray-600 font-light mb-4">
              What We Do
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6">
              Our work is our reputation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              We protect it with every project we do
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild 
                variant="outline" 
                className="border-2 border-gray-900 bg-transparent hover:bg-gray-900 hover:text-white text-gray-900 px-10 py-6 text-base font-light rounded-none transition-all duration-300"
              >
                <Link to="/what">Know More...</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Projects Preview - Image Gallery */}
      <section className="relative py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="text-sm uppercase tracking-[0.4em] text-gray-500 font-light mb-4">
              Our Projects
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6">
              Laying a solid foundation together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Bringing visions to life across Texas
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { name: "HOLIDAY INN EXPRESS", location: "Bonham, TX", image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800" },
              { name: "BEST WESTERN PLUS", location: "Willspoint, TX", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800" },
            ].map((hotel, index) => (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer overflow-hidden"
              >
                <div className="relative h-[500px] bg-gray-200 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement && !target.parentElement.querySelector('.fallback')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 flex items-center justify-center fallback';
                          fallback.innerHTML = `<div class="text-center text-gray-400 p-8"><svg class="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg><p class="text-sm font-light">${hotel.name}</p></div>`;
                          target.parentElement.appendChild(fallback);
                        }
                      }}
                    />
                  </motion.div>
                  <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h3 className="text-3xl font-light text-white mb-2 uppercase tracking-wider">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{hotel.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild 
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-8 text-lg font-light rounded-none transition-all duration-300 shadow-lg"
              >
                <Link to="/projects" className="flex items-center gap-3">
                  View All Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
              Ready For Next Project?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Let's Build something greater together
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-8 text-lg font-light rounded-none transition-all duration-300 shadow-lg"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
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
