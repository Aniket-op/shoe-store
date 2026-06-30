"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Filter, ChevronDown, Search, X } from "lucide-react";
import { shoes, categories } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

export default function ShoesListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState("latest");

  const filteredShoes = useMemo(() => {
    let result = shoes;

    if (searchQuery) {
      result = result.filter(shoe => shoe.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (selectedCategory) {
      result = result.filter(shoe => shoe.category === selectedCategory);
    }

    switch (sortOption) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      // dummy sort for latest and popular
      default:
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortOption]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tighter uppercase">All Shoes</h1>
          <p className="text-gray-500 mt-2">{filteredShoes.length} Products</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filter
            {selectedCategory && (
              <span className="w-2 h-2 rounded-full bg-black ml-1"></span>
            )}
          </button>
          
          <div className="relative group">
            <button className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors">
              Sort By <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 overflow-hidden">
              {["latest", "price-low", "price-high", "popular"].map(option => (
                <button
                  key={option}
                  onClick={() => setSortOption(option)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${sortOption === option ? 'font-medium bg-gray-50' : ''}`}
                >
                  {option === 'latest' ? 'Latest' : option === 'price-low' ? 'Price: Low to High' : option === 'price-high' ? 'Price: High to Low' : 'Popular'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isFilterOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-12"
        >
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-bold uppercase tracking-wide">Categories</h3>
              {selectedCategory && (
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="text-sm text-gray-500 hover:text-black flex items-center gap-1"
                >
                  <X className="w-4 h-4" /> Clear Filter
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === selectedCategory 
                      ? "bg-black text-white" 
                      : "bg-white border hover:border-black"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {filteredShoes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredShoes.map((shoe, index) => (
            <ProductCard key={shoe.id} shoe={shoe} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <h3 className="text-2xl font-bold mb-2">No shoes found</h3>
          <p className="text-gray-500">Try adjusting your filters or search query.</p>
          <button 
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory(null);
            }}
            className="mt-6 border border-black rounded-full px-6 py-2 font-medium hover:bg-black hover:text-white transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Pagination (Dummy) */}
      {filteredShoes.length > 0 && (
        <div className="flex justify-center mt-16">
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white font-medium">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 font-medium transition-colors">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 font-medium transition-colors">3</button>
          </div>
        </div>
      )}
    </div>
  );
}
