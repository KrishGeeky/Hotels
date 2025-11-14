import { motion } from "framer-motion";
import { Users, Award, Target, Heart, Play, Facebook, Twitter, Linkedin, Mail, Palette, Package, GitMerge, MessageSquare } from "lucide-react";

export default function Leadership() {
  const teamMembers = [
    {
      name: "MISTY ROWELL",
      position: "Vice President Operations",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      social: {
        facebook: "https://www.facebook.com/reddyhotels",
        twitter: "https://twitter.com/reddyhotels",
        linkedin: "https://www.linkedin.com/company/reddy-hotels",
        email: "mailto:gk@reddyhotels.com"
      }
    },
    {
      name: "CRYSTAL THOMAS",
      position: "Customer Experience Leader",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      social: {
        facebook: "https://www.facebook.com/reddyhotels",
        twitter: "https://twitter.com/reddyhotels",
        linkedin: "https://www.linkedin.com/company/reddy-hotels",
        email: "mailto:gk@reddyhotels.com"
      }
    },
  ];

  const workPrinciples = [
    { icon: Palette, title: "Design", color: "from-blue-500 to-blue-600" },
    { icon: Package, title: "Material", color: "from-green-500 to-green-600" },
    { icon: GitMerge, title: "Coordination", color: "from-purple-500 to-purple-600" },
    { icon: MessageSquare, title: "Communication", color: "from-orange-500 to-orange-600" }
  ];

  const videos = [
    { id: 1, title: "Company Overview", thumbnail: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" },
    { id: 2, title: "Project Showcase", thumbnail: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600" },
    { id: 3, title: "Client Testimonials", thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" },
    { id: 4, title: "Our Journey", thumbnail: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" }
  ];

  return (
    <section className="relative py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* GK Reddy - CEO Profile - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-[0.4em] text-gray-500 font-light mb-4">
              Leadership
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              We create living spaces that meet your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center bg-gradient-to-br from-gray-50 via-white to-red-50/20 p-12 shadow-xl">
            {/* CEO Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg opacity-20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop"
                alt="GK Reddy"
                className="relative w-full h-[500px] object-cover rounded-lg shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement && !target.parentElement.querySelector('.fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'relative w-full h-[500px] bg-gradient-to-br from-gray-300 to-gray-200 rounded-lg flex items-center justify-center fallback shadow-2xl';
                    fallback.innerHTML = `
                      <div class="text-center text-gray-500">
                        <svg class="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        <p class="text-xl font-light">GK Reddy</p>
                      </div>
                    `;
                    target.parentElement.appendChild(fallback);
                  }
                }}
              />
            </motion.div>

            {/* CEO Content */}
            <div className="space-y-6">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm uppercase tracking-wider font-medium rounded-full">
                President & CEO
              </div>
              
              <h3 className="text-4xl font-bold text-gray-900">GK Reddy</h3>
              
              <div className="border-l-4 border-red-600 pl-6 py-4 bg-red-50/50">
                <p className="text-xl text-gray-800 italic font-light leading-relaxed">
                  "There is only one Boss. <span className="font-semibold text-red-700">The Guest</span>."
                </p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg font-light">
                  I am a <span className="font-semibold text-gray-900">servant leader</span> on a mission to help my guests, customers, partners and the community at large to achieve their goals.
                </p>
                
                <p className="text-lg font-light">
                  My <span className="font-semibold text-red-600">40+ years of experience</span> in the industry and having worked every step of the way enables me to service with a broad spectrum of services.
                </p>

                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Award className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">20+ Projects</p>
                      <p className="text-sm text-gray-600 font-light">Developed as team leader</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Users className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">50+ Team Members</p>
                      <p className="text-sm text-gray-600 font-light">Employees and partners</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg mt-6">
                  <p className="text-sm uppercase tracking-wider mb-2 opacity-90">Education</p>
                  <p className="text-lg font-semibold">Masters in Business Administration</p>
                  <p className="text-sm opacity-90">University of Alabama, 1984</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our Company Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <div className="text-sm uppercase tracking-[0.4em] text-gray-500 font-light mb-4">
            Our Company
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
            Our work is our reputation, and we protect it with every project we do
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-12">
            As a professional consulting group, we know what it means to provide exceptional service and deliver outstanding results. See what our partners, clients and investors have to say about the work we've done.
          </p>

          {/* Video Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:bg-red-600 transition-colors"
                    >
                      <Play className="w-8 h-8 text-red-600 group-hover:text-white ml-1" fill="currentColor" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-light text-sm">{video.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-block mt-16"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white px-12 py-8 rounded-lg shadow-2xl">
              <div className="text-6xl font-light mb-2">40+</div>
              <div className="text-sm uppercase tracking-wider">Years of Experience</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Team Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm uppercase tracking-[0.4em] text-gray-500 font-light mb-4">
            Meet the Team
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
            A diverse group of people united by common principles and ethics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            With great teamwork, comes great success!
          </p>
        </motion.div>

        {/* Work Principles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {workPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex p-6 bg-gradient-to-br ${principle.color} rounded-xl mb-4 shadow-lg`}
              >
                <principle.icon className="w-8 h-8 text-white" />
              </motion.div>
              <p className="text-lg font-medium text-gray-900">{principle.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-red-600 rounded-lg"
            >
              <div className="text-center">
                {/* Photo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-48 h-48 mx-auto mb-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-600 rounded-full transform group-hover:rotate-6 transition-transform" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement && !target.parentElement.querySelector('.fallback')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'relative w-full h-full bg-gradient-to-br from-gray-300 to-gray-200 rounded-full flex items-center justify-center fallback border-4 border-white shadow-2xl';
                        fallback.innerHTML = `
                          <div class="text-center text-gray-500">
                            <svg class="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                          </div>
                        `;
                        target.parentElement.appendChild(fallback);
                      }
                    }}
                  />
                </motion.div>

                {/* Info */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="text-red-600 font-semibold mb-6 uppercase tracking-wider text-sm">
                  {member.position}
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-200">
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 hover:bg-red-600 hover:text-white rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 hover:bg-red-600 hover:text-white rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 hover:bg-red-600 hover:text-white rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href={member.social.email}
                    className="p-3 bg-gray-100 hover:bg-red-600 hover:text-white rounded-full transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Values - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-12 md:p-16 rounded-lg shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-light text-white text-center mb-8">
            Built on Principles of Hard Work, Integrity, and Honesty
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Target, title: "Hard Work", description: "Dedication to excellence in every project" },
              { icon: Award, title: "Integrity", description: "Honest and transparent in all our dealings" },
              { icon: Heart, title: "Honesty", description: "Building trust through authentic service" }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex p-5 bg-gradient-to-br from-red-600 to-orange-600 rounded-full mb-4 shadow-lg"
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-300 text-sm font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

