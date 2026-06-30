"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Shoe } from "@/lib/data";

export function ProductCard({ shoe, index = 0 }: { shoe: Shoe, index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/product/${shoe.id}`} className="block">
        <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4">
          <Image
            src={shoe.images[0]}
            alt={shoe.name}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {shoe.isNew && (
              <span className="bg-white text-black px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                New
              </span>
            )}
            {shoe.status === "Sold Out" && (
              <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                Sold Out
              </span>
            )}
          </div>
          
          {/* Quick Add (Hover) */}
          <div className="absolute bottom-4 left-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <button className="w-full bg-white/90 backdrop-blur-sm text-black py-3 rounded-xl font-medium hover:bg-black hover:text-white transition-colors shadow-sm">
              Quick View
            </button>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between items-start gap-4">
            <h3 className="font-medium text-lg leading-tight group-hover:text-gray-600 transition-colors">
              {shoe.name}
            </h3>
            <span className="font-medium">${shoe.price}</span>
          </div>
          <p className="text-gray-500 text-sm">{shoe.category}</p>
          <p className="text-gray-400 text-xs">{shoe.colors.length} Color{shoe.colors.length > 1 ? 's' : ''}</p>
        </div>
      </Link>
    </motion.div>
  );
}
