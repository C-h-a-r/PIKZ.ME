import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Footer from '../components/Footer';

const products = [
  {
    id: 1,
    title: "Shards - AFK Area & Shop",
    description: "Allow your players to gain Shards while staying AFK on your server.",
    price: 9.99,
    image: "https://builtbybit.com/attachments/shards-design-thumb-png.881406/"
  },
  {
    id: 2,
    title: "NeoSpawner - Sellwand & Boosters",
    description: "The new Solution for E-spawners, Configurable, Boosters, Sellwand +MORE!",
    price: 19.99,
    image: "https://cdn.builtbybit.com/carousel_images/1685/1685672-cdc0eea55ef49e207fb103d7c7ed64ef.jpg"
  },
  {
    id: 3,
    title: "EasySell - Fast & Efficient",
    description: "Simple Sell plugin that you wished to have on your server.",
    price: 4.99,
    image: "https://cdn.builtbybit.com/carousel_images/1682/1682042-ec9d24f1fafd8714155f554cfcd4b43d.jpg"
  },
  {
    id: 4,
    title: "Halloween Cosmetics - Ultimate Cosmetics",
    description: "Perfect item's to bring to your server for halloween update",
    price: 5.99,
    image: "https://cdn.builtbybit.com/carousel_images/1651/1651032-55d405894afbea6ccf4f24a8654f4895.jpg"
  },
  {
    id: 5,
    title: "DonutSMP Setup - The Ultimate replica",
    description: "The #1 DonutSMP replica - Premium & Optimized server setup!",
    price: 29.99,
    image: "https://cdn.builtbybit.com/carousel_images/1687/1687434-76515bbe9c89a73f8aef52db5feff0c6.jpg"
  },
  {
    id: 6,
    title: "ZelBounty - UI Based & Optimized",
    description: "The ultimate GUI based bounty plugin for SMP servers.",
    price: 8.99,
    image: "https://cdn.builtbybit.com/carousel_images/1573/1573617-cd440840bf521c86a48cdd2f763260f0.jpg"
  },
  {
    id: 7,
    title: "ZelAuction - Ultimate Auction house",
    description: "Premium & Optimized Ever imagined an auction plugin with no duplication bugs? Well here it is..",
    price: 11.99,
    image: "https://cdn.builtbybit.com/carousel_images/1694/1694536-9bae6e438fd20d65c4dec71f1df21cea.jpg"
  },
  {
    id: 8,
    title: "UltraSteal - Ultimate Lives Plugin",
    description: "The most advanced lifesteal system on the market.",
    price: 8.99,
    image: "https://cdn.builtbybit.com/carousel_images/1691/1691273-1d9266c7b689e8127e699e3d22b6c9ca.jpg"
  },
  {
    id: 9,
    title: "Practice Setup CrystalPVP",
    description: "Set up the perfect practice environment for your server to begin the Crystal PvP aura.",
    price: 19.99,
    image: "https://cdn.builtbybit.com/carousel_images/1561/1561159-083fa420c65fc1614f16e7c398adbfbd.jpg"
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