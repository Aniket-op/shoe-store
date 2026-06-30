"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Mail } from "lucide-react";
import { shoes } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const featuredShoes = shoes.filter(shoe => shoe.isFeatured).slice(0, 4);
  const newArrivals = shoes.filter(shoe => shoe.isNew).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 md:p-6 w-full mx-auto max-w-[1600px]">
        
        {/* Top Bento Section: Hero (8) & Latest Drops (4) */}
        
        {/* Left Column (8 cols) - Hero and Top Featured */}
        <div className="lg:col-span-8 flex flex-col md:grid md:grid-rows-2 gap-4 min-h-[600px] lg:min-h-0">
          
          {/* Top Hero Bento Box */}
          <div className="md:row-span-1 relative overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 flex-1 min-h-[350px]">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 p-8 md:p-12 flex flex-col justify-center max-w-xl">
              <span className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-gray-500">Premium Collection</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black italic tracking-tighter leading-none mb-6 uppercase">
                Define Your<br/><span className="text-gray-300">Step.</span>
              </h1>
              <p className="text-gray-600 mb-8 font-light leading-relaxed hidden sm:block">
                Discover the latest releases and exclusive collaborations. Premium sneakers for those who demand excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/shoes" 
                  className="bg-black text-white px-8 py-3 rounded-full font-medium hover:opacity-80 transition-all text-sm"
                >
                  Shop Now
                </Link>
                <Link 
                  href="/categories/Lifestyle" 
                  className="border border-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-all text-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
            
            {/* Background Graphic elements mimicking Bento design */}
            <div className="absolute right-0 top-0 h-full w-full sm:w-2/3 bg-[#E5E5E5] flex items-center justify-center overflow-hidden">
              <div className="w-96 h-96 bg-gray-200/50 rounded-full absolute blur-3xl"></div>
              <div className="relative z-0 transform -rotate-12 scale-110 opacity-40 md:opacity-100">
                <div className="w-80 h-40 bg-neutral-400/20 rounded-full absolute bottom-4 blur-xl"></div>
                <div className="w-full text-[12rem] md:text-[15rem] font-black text-white/40 absolute -top-24 md:-top-32 -left-10 select-none">AJ4</div>
                <div className="w-64 h-40 md:w-80 md:h-48 bg-neutral-900 rounded-2xl relative shadow-2xl flex items-center justify-center overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" alt="Hero Shoe" fill className="object-cover opacity-80" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Two Bento Boxes (Featured subset) */}
          <div className="md:row-span-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Featured Box 1 */}
            {featuredShoes[0] && (
              <Link href={`/product/${featuredShoes[0].id}`} className="bg-white rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group cursor-pointer border border-gray-100 shadow-sm min-h-[250px]">
                <div className="relative z-10">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-black text-white text-[10px] rounded-full uppercase font-bold tracking-widest">
                      {featuredShoes[0].status}
                    </span>
                    <span className="text-lg font-bold">${featuredShoes[0].price}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight font-display uppercase leading-none">{featuredShoes[0].name}</h3>
                  <p className="text-sm text-gray-500 mt-2">{featuredShoes[0].category}</p>
                </div>
                <div className="absolute -right-4 bottom-0 w-40 h-40 md:w-48 md:h-48 bg-neutral-100 rounded-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110 overflow-hidden">
                  <Image src={featuredShoes[0].images[0]} alt={featuredShoes[0].name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </Link>
            )}

            {/* Featured Box 2 */}
            {featuredShoes[1] && (
              <Link href={`/product/${featuredShoes[1].id}`} className="bg-neutral-900 rounded-3xl p-6 md:p-8 text-white flex flex-col justify-between relative overflow-hidden group cursor-pointer shadow-sm min-h-[250px]">
                <div className="relative z-10">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-white text-black text-[10px] rounded-full uppercase font-bold tracking-widest">
                      Featured
                    </span>
                    <span className="text-lg font-bold">${featuredShoes[1].price}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight font-display uppercase leading-none">{featuredShoes[1].name}</h3>
                  <p className="text-neutral-400 mt-2">{featuredShoes[1].category}</p>
                </div>
                <div className="absolute -right-10 -bottom-10 w-56 h-56 md:w-64 md:h-64 bg-white/5 rounded-full flex items-center justify-center transition-transform duration-700 group-hover:rotate-12 overflow-hidden">
                  <Image src={featuredShoes[1].images[0]} alt={featuredShoes[1].name} fill className="object-cover opacity-80" referrerPolicy="no-referrer" />
                </div>
              </Link>
            )}

          </div>
        </div>

        {/* Right Column (4 cols) - Latest Drops Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="bg-white rounded-3xl p-6 flex flex-col flex-1 border border-gray-100 shadow-sm min-h-[400px]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-black uppercase italic font-display">Latest Drops</h2>
              <Link href="/shoes" className="text-xs font-bold border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">View All</Link>
            </div>
            
            <div className="flex-1 flex flex-col gap-6">
              {newArrivals.slice(0,3).map((shoe) => (
                <Link href={`/product/${shoe.id}`} key={shoe.id} className="flex items-center gap-4 group">
                  <div className="w-20 h-20 bg-gray-100 rounded-2xl flex-shrink-0 relative overflow-hidden">
                    <Image src={shoe.images[0]} alt={shoe.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm line-clamp-1 group-hover:text-gray-600 transition-colors">{shoe.name}</h4>
                    <p className={`text-[11px] uppercase tracking-wider font-bold mt-1 ${shoe.status === 'Sold Out' ? 'text-red-500 italic' : 'text-gray-500'}`}>
                      {shoe.status === 'Sold Out' ? 'Sold Out' : shoe.category}
                    </p>
                    <p className={`font-black text-sm mt-1 ${shoe.status === 'Sold Out' ? 'text-gray-400' : ''}`}>
                      ${shoe.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 p-5 bg-neutral-100 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-neutral-200 transition-colors">
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Join the club</p>
                <h4 className="font-bold text-sm mt-1">15% Welcome Discount</h4>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
            </div>
          </div>
        </div>

        {/* Promotional Banner Bento Box */}
        <div className="lg:col-span-12 rounded-3xl overflow-hidden bg-black text-white relative flex flex-col md:flex-row items-center shadow-sm min-h-[350px]">
          <div className="p-8 md:p-12 lg:p-16 flex-1 relative z-10 w-full">
            <h2 className="font-display text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-tight mb-4">
              The Icons.<br/> Reimagined.
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-md font-light leading-relaxed mb-8">
              Explore our curated collection of timeless silhouettes upgraded with modern materials and bold new colorways.
            </p>
            <Link 
              href="/categories/Lifestyle" 
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium text-sm transition-opacity hover:opacity-90"
            >
              Explore The Collection
            </Link>
          </div>
          <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:h-full">
             <Image
                src="https://images.unsplash.com/photo-1552346154-21d32810baa3?auto=format&fit=crop&q=80&w=1200"
                alt="Sneaker Collection"
                fill
                className="object-cover object-center"
                referrerPolicy="no-referrer"
              />
          </div>
        </div>

        {/* Full Featured Collection Bento Box */}
        <div className="lg:col-span-12 bg-white rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-black italic uppercase tracking-tighter">More Featured</h2>
              <p className="text-gray-500 text-sm mt-1">Handpicked selections for you.</p>
            </div>
            <Link href="/shoes" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredShoes.map((shoe, index) => (
              <ProductCard key={shoe.id} shoe={shoe} index={index} />
            ))}
          </div>
        </div>

        {/* Categories Bento Row (12 cols) */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/categories/Air Jordan 1" className="group relative h-64 rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100">
            <Image src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800" alt="Jordans" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer"/>
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-[10px] text-white/80 uppercase font-bold tracking-widest mb-1">Explore</span>
              <h3 className="text-white font-display text-3xl font-black italic uppercase tracking-tighter">Jordan</h3>
            </div>
          </Link>
          <Link href="/categories/Running Shoes" className="group relative h-64 rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100">
            <Image src="https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800" alt="Running" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer"/>
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-[10px] text-white/80 uppercase font-bold tracking-widest mb-1">Explore</span>
              <h3 className="text-white font-display text-3xl font-black italic uppercase tracking-tighter">Running</h3>
            </div>
          </Link>
          <Link href="/categories/Lifestyle" className="group relative h-64 rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100">
            <Image src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800" alt="Lifestyle" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer"/>
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-[10px] text-white/80 uppercase font-bold tracking-widest mb-1">Explore</span>
              <h3 className="text-white font-display text-3xl font-black italic uppercase tracking-tighter">Lifestyle</h3>
            </div>
          </Link>
        </div>

        {/* Newsletter Bento Box (12 cols) */}
        <div className="lg:col-span-12 bg-white rounded-3xl p-8 md:p-16 flex flex-col items-center justify-center border border-gray-100 shadow-sm text-center relative overflow-hidden min-h-[300px]">
           <div className="relative z-10 max-w-xl w-full mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-black italic tracking-tighter uppercase mb-4">Stay in the loop</h2>
            <p className="text-gray-500 mb-8 font-light text-sm md:text-base">Sign up for exclusive drops, early access, and personalized recommendations.</p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full rounded-full bg-gray-50 border border-gray-200 px-6 py-3 pl-12 outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all text-sm"
                  required
                />
              </div>
              <button type="submit" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm">
                Subscribe
              </button>
            </form>
          </div>
          {/* Abstract background graphics */}
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-gray-50 rounded-full blur-3xl z-0 hidden md:block"></div>
          <div className="absolute -left-24 -top-24 w-72 h-72 bg-gray-50 rounded-full blur-3xl z-0 hidden md:block"></div>
        </div>

      </main>
    </div>
  );
}

