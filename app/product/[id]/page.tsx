"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { ChevronRight, ArrowLeft, Star, Heart, Share2 } from "lucide-react";
import { shoes } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const shoe = shoes.find(s => s.id === id);
  
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  if (!shoe) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <button onClick={() => router.push('/shoes')} className="text-blue-600 hover:underline">
          Return to Shop
        </button>
      </div>
    );
  }

  const relatedProducts = shoes.filter(s => s.category === shoe.category && s.id !== shoe.id).slice(0, 4);

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/shoes" className="hover:text-black transition-colors">Shoes</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-black font-medium truncate max-w-[200px]">{shoe.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
        {/* Image Gallery */}
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative aspect-[4/5] md:aspect-square bg-gray-100 rounded-3xl overflow-hidden"
          >
            <Image
              src={shoe.images[activeImage]}
              alt={shoe.name}
              fill
              className="object-cover object-center"
              priority
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
            {shoe.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl overflow-hidden snap-start ${
                  activeImage === idx ? "ring-2 ring-black" : "opacity-70 hover:opacity-100"
                } transition-all`}
              >
                <Image src={img} alt={`${shoe.name} ${idx + 1}`} fill className="object-cover" referrerPolicy="no-referrer"/>
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4 leading-tight">
              {shoe.name}
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-medium">${shoe.price}</span>
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <span className="text-gray-500 text-sm ml-1">(124)</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed font-light">{shoe.description}</p>
          </div>

          <div className="mb-8 space-y-6">
            {/* Colors */}
            <div>
              <h3 className="font-medium mb-3 flex items-center justify-between">
                Color {selectedColor && <span className="text-gray-500 font-normal">{selectedColor}</span>}
              </h3>
              <div className="flex flex-wrap gap-3">
                {shoe.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-3 rounded-xl border text-sm font-medium transition-colors ${
                      selectedColor === color 
                        ? "border-black bg-black text-white" 
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Size (US)</h3>
                <button className="text-sm text-gray-500 underline hover:text-black">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {shoe.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-xl border text-sm font-medium transition-colors ${
                      selectedSize === size 
                        ? "border-black bg-black text-white" 
                        : "border-gray-200 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            <button className="w-full bg-black text-white py-4 rounded-full font-medium text-lg tracking-wide hover:bg-gray-800 transition-colors">
              {shoe.status === 'Pre-order' ? 'Pre-Order Now' : 'Add to Bag'}
            </button>
            <div className="flex gap-4">
              <button className="flex-1 border border-gray-200 py-4 rounded-full font-medium hover:border-black transition-colors flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" /> Favorite
              </button>
              <button className="flex-1 border border-gray-200 py-4 rounded-full font-medium hover:border-black transition-colors flex items-center justify-center gap-2">
                <Share2 className="w-5 h-5" /> Share
              </button>
            </div>
          </div>

          {/* Specs & Features Accordion (Simplified) */}
          <div className="mt-12 border-t pt-8 space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-4">Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 font-light">
                {shoe.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            {shoe.specs && (
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(shoe.specs).map(([key, value]) => (
                    <div key={key}>
                      <span className="block text-xs text-gray-500 uppercase">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t pt-16">
          <h2 className="font-display text-3xl font-bold tracking-tighter uppercase mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map((relatedShoe, index) => (
              <ProductCard key={relatedShoe.id} shoe={relatedShoe} index={index} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
