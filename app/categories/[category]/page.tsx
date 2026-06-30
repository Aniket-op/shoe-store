"use client";

import { useMemo } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { shoes, categories } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CategoryPage() {
  const params = useParams();
  // Decode URL parameter (e.g., %20 to space)
  const categoryParam = decodeURIComponent(params.category as string);
  
  // Try to find exact match in categories array
  const categoryName = categories.find(c => c.toLowerCase() === categoryParam.toLowerCase()) || categoryParam;

  const categoryShoes = useMemo(() => {
    return shoes.filter(shoe => shoe.category === categoryName);
  }, [categoryName]);

  // Determine a hero image based on category (using random unsplash for dummy)
  const getHeroImage = () => {
    if (categoryName.includes("Jordan")) return "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=2000";
    if (categoryName.includes("Running")) return "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=2000";
    if (categoryName.includes("Basketball")) return "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=2000";
    return "https://images.unsplash.com/photo-1552346154-21d32810baa3?auto=format&fit=crop&q=80&w=2000";
  };

  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* Category Hero */}
      <section className="relative h-[40vh] md:h-[50vh] bg-gray-900 mb-12">
        <Image
          src={getHeroImage()}
          alt={categoryName}
          fill
          className="object-cover opacity-60"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 h-full relative z-10 flex flex-col justify-end pb-12">
          <Link href="/shoes" className="text-white/70 hover:text-white flex items-center gap-2 mb-4 text-sm font-medium w-fit transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to all shoes
          </Link>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter uppercase text-white mb-2">
            {categoryName}
          </h1>
          <p className="text-gray-300 text-lg">{categoryShoes.length} Products</p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-4 md:px-6">
        {categoryShoes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {categoryShoes.map((shoe, index) => (
              <ProductCard key={shoe.id} shoe={shoe} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-gray-50 rounded-3xl">
            <h3 className="text-2xl font-bold mb-2">No shoes found</h3>
            <p className="text-gray-500 mb-6">We currently don't have any shoes in this category.</p>
            <Link 
              href="/shoes"
              className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Browse All Shoes
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
