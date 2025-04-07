import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Footer from '../components/Footer';

const products = [
  {
    id: 1,
    title: "Pro Camera Kit",
    description: "Professional-grade camera equipment for stunning shots",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Lighting Package",
    description: "Complete studio lighting setup for perfect illumination",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1516724562728-afc4865086e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Audio Bundle",
    description: "High-quality audio recording equipment for crystal clear sound",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1520866218514-a60d7c02273b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-zinc-800 to-zinc-900 border-b border-zinc-800"
        >
          <div className="relative z-10 text-center px-4 space-y-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="announcement-chip">
                <Sparkles className="w-4 h-4" />
                <span>Donut Setup Foila Now Available!</span>
              </div>
            </motion.div>
            
            <motion.h1 
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.4 }}
  className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent"
>
  Welcome to Pikz Studios
</motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
            >
              Crafting premium Minecraft solutions for servers and players
            </motion.p>
          </div>
        </motion.section>

        {/* Products Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="product-card"
              >
                <div className="aspect-video">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <p className="text-red-400 font-bold text-2xl">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default Home;