import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Play, ArrowRight, Building2, Hammer, Clock } from "lucide-react";

export default function Projects() {
  const completedProjects = [
    { 
      name: "HOLIDAY INN EXPRESS", 
      location: "Bonham, TX",
      year: "2016",
      description: "Built the first hotel in the city of Bonham, TX in 2016 on the intersection of highway 121 and GK Reddy Ave to serve the community with events, leisure and travel services.",
      image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800"
    },
    { 
      name: "BEST WESTERN PLUS", 
      location: "Willspoint, TX",
      description: "Opened the first hotel in the city of Willspoint, TX to help the community with events, leisure and travel services. Hotel was opened during the Covid pandemic and the business has been exceptional.",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"
    },
    { 
      name: "HOLIDAY INN EXPRESS", 
      location: "Childress, TX",
      description: "Hotel in Childress, TX is contemporary lodging next to Highway 287, 1.8 miles from the antique stores in Downtown Childress and a 19-minute drive from Baylor Lake.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800"
    },
    { 
      name: "HOLIDAY INN EXPRESS & SUITES", 
      location: "PLAINVIEW, TX",
      description: "We built the first Holiday Inn Express in the city of Plainview, TX. It is a mid-priced hotel within the InterContinental Hotels Group family of brands. Originally founded as an 'express' hotel, their focus is on offering limited services at a reasonable price.",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"
    },
    { 
      name: "BEST WESTERN PLUS", 
      location: "Chandler, TX",
      description: "Opened the first hotel in the city of Chandler, TX. Best Western Plus Chandler hotel is a pet-friendly hotel where guests enjoy free Wi-Fi, free breakfast outdoor pool, fitness center along with a conference center.",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800"
    },
    { 
      name: "REDDY HOTEL", 
      location: "Plainview, TX",
      description: "First boutique hotel of Plainview, TX - This hotel is just off Interstate 27 and 7 minute's drive from downtown Plainview.",
      image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800"
    },
  ];

  const projectsInProgress = [
    {
      name: "BEST WESTERN - UNDER CONSTRUCTION",
      location: "Bonham, TX",
      description: "As the city of Bonham, TX continues to grow Reddy Hotels is building the second hotel in the city right adjacent to the first hotel to help with the growing needs of the city and the community.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600",
      status: "Under Construction"
    },
    {
      name: "COMMUNITY EVENT CENTER",
      location: "Bonham, TX",
      description: "Building a 20,000 sqft event center for the community in the city of Bonham, TX, the city honored Mr. G K Reddy by naming the street after him.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600",
      status: "In Progress"
    },
    {
      name: "APARTMENTS",
      location: "Lubbock & Bonham, TX",
      description: "200+ contemporary apartments built in Lubbock, TX and Bonham, TX to meet the cities high residential demand and growth.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600",
      status: "In Progress"
    },
    {
      name: "HOLIDAY INN EXPRESS - COMING SOON",
      location: "Pilot Point, TX",
      description: "Breaking ground in 2022 for the first hotel in the city of Pilot Point, TX working closely with the city and the local community to serve our guests and nearby upcoming businesses.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600",
      status: "Coming Soon"
    },
    {
      name: "HOLIDAY INN - COMING SOON",
      location: "Farmersville, TX",
      description: "Breaking ground in 2022 for the first hotel in the city of Farmersville, TX working closely with the city and the local community to serve our guests and nearby upcoming businesses.",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600",
      status: "Coming Soon"
    },
    {
      name: "HOLIDAY INN EXPRESS - COMING SOON",
      location: "Mineola, TX",
      description: "Breaking ground in 2022 for a new Holiday Inn Express in the growing historic city of Mineola, TX we are committed to working with the cities to help our community grow and sustain.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
      status: "Coming Soon"
    }
  ];

  const videos = [
    { id: 1, title: "Project Overview", thumbnail: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" },
    { id: 2, title: "Client Testimonials", thumbnail: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600" },
    { id: 3, title: "Construction Progress", thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" },
    { id: 4, title: "Completed Projects", thumbnail: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" }
  ];

  const eventCenterImages = [
    { title: "Conference Hall", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600" },
    { title: "Inner View", image: "https://images.unsplash.com/photo-1519167758481-83f29da8c19f?w=600" },
    { title: "External View", image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600" },
    { title: "Birds Eye View", image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-7">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-12 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium mb-4">
              Our Projects
            </div>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6 leading-tight">
              Our work is our reputation, and we protect it with every project we do
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed mb-8">
              We have worked with many clients and partners on a variety of projects throughout our journey. In every project, we carefully guided our partners, investors and clients to overcome their challenges and build effective, long-lasting strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-48 rounded overflow-hidden shadow-md">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-gray-900 transition-colors">
                      <Play className="w-5 h-5 text-gray-900 group-hover:text-white ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-sm font-light">{video.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block bg-gray-900 text-white px-10 py-6 rounded">
              <div className="text-5xl font-light mb-1">40+</div>
              <div className="text-xs uppercase tracking-wider">Years of Experience</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Project - Reddy Event Center */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium mb-3">
              Our Latest Project
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Reddy Event Center
            </h2>
            <p className="text-base text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Our event center in Bonham Texas is a premier destination for hosting various events, including weddings, corporate meetings, trade shows, concerts, and more. With state-of-the-art facilities and a team of experienced professionals, we ensure that every event hosted at our center is executed flawlessly. Our venue features spacious halls, elegant décor, advanced audiovisual equipment, and a range of amenities to make your event memorable.
            </p>
          </motion.div>

          {/* Event Center Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {eventCenterImages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative group overflow-hidden rounded shadow-md"
              >
                <div className="relative h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-medium text-sm">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium mb-3">
              Our Featured Projects
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Completed Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <motion.div
                key={`${project.name}-${project.location}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group bg-white border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  {project.year && (
                    <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-900">
                      Est. {project.year}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects in Progress */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium mb-3">
              Projects in Progress
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Building the Future
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto font-light">
              Check out some of our projects below to find out more about our ongoing developments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsInProgress.map((project, index) => (
              <motion.div
                key={`${project.name}-${project.location}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group bg-white border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-3 right-3 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {project.status}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Ready For Next Project?
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-light">
              Let's Build something greater together
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild 
                className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 text-base font-medium transition-all duration-300"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
