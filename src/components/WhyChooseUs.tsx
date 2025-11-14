import { motion } from "framer-motion";
import { Building2, Lightbulb, Zap, DollarSign, CheckCircle2, Hammer } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Hammer,
      title: "Manage Construction Properly",
      description: "We are a versatile business offering expertise in construction, hospitality, real estate consultancy, and hotel management.",
      color: "bg-red-50 text-red-600",
      hoverColor: "group-hover:bg-red-600"
    },
    {
      icon: Lightbulb,
      title: "Innovative",
      description: "Pioneering hospitality solutions with cutting-edge designs and forward-thinking approaches to hotel development.",
      color: "bg-orange-50 text-orange-600",
      hoverColor: "group-hover:bg-orange-600"
    },
    {
      icon: Zap,
      title: "Speed Builder",
      description: "Efficient project delivery without compromising quality. We get your hotel operational faster than industry standards.",
      color: "bg-blue-50 text-blue-600",
      hoverColor: "group-hover:bg-blue-600"
    },
    {
      icon: DollarSign,
      title: "Affordable Price",
      description: "Competitive pricing with transparent cost structures. Maximum value for your investment in hospitality development.",
      color: "bg-green-50 text-green-600",
      hoverColor: "group-hover:bg-green-600"
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <CheckCircle2 className="w-12 h-12 text-red-600 mx-auto" />
          </motion.div>
          <div className="text-sm uppercase tracking-[0.4em] text-gray-500 font-light mb-4">
            Our Advantages
          </div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Experience the difference of working with a trusted hospitality development partner
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-red-600"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex p-4 rounded-xl ${feature.color} mb-6 transition-colors ${feature.hoverColor} group-hover:text-white`}
              >
                <feature.icon className="w-8 h-8" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-red-600 to-red-700 p-8 text-white text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-light mb-2">20+</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light mb-2">20+</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light mb-2">100%</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light mb-2">5+</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Cities Pioneered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

