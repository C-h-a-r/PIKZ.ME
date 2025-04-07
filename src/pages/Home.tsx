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
    image: "https://builtbybit.com/attachments/shards-design-thumb-png.881406/",
    url: "https://builtbybit.com/resources/shards-afk-area-shop.38393/"
  },
  {
    id: 2,
    title: "NeoSpawner - Sellwand & Boosters",
    description: "The new Solution for E-spawners, Configurable, Boosters, Sellwand +MORE!",
    price: 19.99,
    image: "https://cdn.builtbybit.com/carousel_images/1685/1685672-cdc0eea55ef49e207fb103d7c7ed64ef.jpg",
    url: "https://builtbybit.com/resources/neospawner-sellwand-boosters.56785/"
  },
  {
    id: 3,
    title: "EasySell - Fast & Efficient",
    description: "Simple Sell plugin that you wished to have on your server.",
    price: 4.99,
    image: "https://cdn.builtbybit.com/carousel_images/1682/1682042-ec9d24f1fafd8714155f554cfcd4b43d.jpg",
    url: "https://builtbybit.com/resources/easysell-fast-efficient.56512/"
  },
  {
    id: 4,
    title: "Halloween Cosmetics - Ultimate Cosmetics",
    description: "Perfect item's to bring to your server for halloween update",
    price: 5.99,
    image: "https://cdn.builtbybit.com/carousel_images/1651/1651032-55d405894afbea6ccf4f24a8654f4895.jpg",
    url: "https://builtbybit.com/resources/halloween-cosmetics-ultimate-cosmetics.53036/"
  },
  {
    id: 5,
    title: "DonutSMP Setup - The Ultimate replica",
    description: "The #1 DonutSMP replica - Premium & Optimized server setup!",
    price: 29.99,
    image: "https://cdn.builtbybit.com/carousel_images/1687/1687434-76515bbe9c89a73f8aef52db5feff0c6.jpg",
    url: "https://builtbybit.com/resources/donutsmp-setup-the-ultimate-replica.45325/"
  },
  {
    id: 6,
    title: "ZelBounty - UI Based & Optimized",
    description: "The ultimate GUI based bounty plugin for SMP servers.",
    price: 8.99,
    image: "https://cdn.builtbybit.com/carousel_images/1573/1573617-cd440840bf521c86a48cdd2f763260f0.jpg",
    url: "https://builtbybit.com/resources/zelbounty-ui-based-optimized.44894/"
  },
  {
    id: 7,
    title: "ZelAuction - Ultimate Auction house",
    description: "Premium & Optimized Ever imagined an auction plugin with no duplication bugs? Well here it is..",
    price: 11.99,
    image: "https://cdn.builtbybit.com/carousel_images/1694/1694536-9bae6e438fd20d65c4dec71f1df21cea.jpg",
    url: "https://builtbybit.com/resources/zelauction-ultimate-auction-house.43698/"
  },
  {
    id: 8,
    title: "UltraSteal - Ultimate Lives Plugin",
    description: "The most advanced lifesteal system on the market.",
    price: 8.99,
    image: "https://cdn.builtbybit.com/carousel_images/1691/1691273-1d9266c7b689e8127e699e3d22b6c9ca.jpg",
    url: "https://builtbybit.com/resources/donutlives-ultimate-lives-plugin.42408/"
  },
  {
    id: 9,
    title: "Practice Setup CrystalPVP",
    description: "Set up the perfect practice environment for your server to begin the Crystal PvP aura.",
    price: 19.99,
    image: "https://cdn.builtbybit.com/carousel_images/1561/1561159-083fa420c65fc1614f16e7c398adbfbd.jpg",
    url: "https://builtbybit.com/resources/practice-setup-crystal-style.40945/"
  },
  {
    id: 10,
    title: "GENS - Premium Server Setup",
    description: "The best Gens setup on the market! Supports 1.21.",
    price: 24.99,
    image: "https://cdn.builtbybit.com/carousel_images/1640/1640742-aec72a7c8a51aaa14017cc129e6145ce.jpg",
    url: "https://builtbybit.com/resources/gens-premium-server-setup.29769/"
  },
  {
    id: 11,
    title: "DonutXFolia - Built For Speed",
    description: "The Only Folia DonutSMP Replica providing incredible speed and high player count support.",
    price: 41.99,
    image: "https://cdn.builtbybit.com/carousel_images/1727/1727422-74cb97c8962e0b09495517c865b1f0aa.jpg",
    url: "https://builtbybit.com/resources/donutxfolia-built-for-speed.61129/"
  },
  {
    id: 12,
    title: "FastHub - Sleek & Simple",
    description: "FastHub - Sleek & Simple",
    price: 4.99,
    image: "https://cdn.builtbybit.com/carousel_images/1687/1687093-073638ec545808fbdee05c0e854f98f2.jpg",
    url: "https://builtbybit.com/resources/fasthub-sleek-simple.56768/"
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
              <motion.a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer" 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="product-card block cursor-pointer hover:shadow-lg transition-shadow duration-300"
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
                  <div className="flex justify-between items-center">
                    <p className="text-red-400 font-bold text-2xl">
                      ${product.price.toFixed(2)}
                    </p>
                    <span className="text-white bg-red-600 px-3 py-1 rounded text-sm">
                      View Product
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;