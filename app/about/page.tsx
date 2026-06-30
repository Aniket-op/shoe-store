import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase mb-8 leading-[0.9] max-w-4xl">
          More than just a sneaker store.
        </h1>
        <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-100">
          <Image
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=2000"
            alt="About Sole"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Brand Story */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed font-light mb-6 text-lg">
              Founded in 2024, Sole was born out of a profound passion for sneaker culture. We recognized a gap in the market for a truly premium, curated retail experience that treats sneakers not just as footwear, but as art, history, and cultural artifacts.
            </p>
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              What started as a small boutique has grown into a destination for collectors, athletes, and style enthusiasts alike. We travel the world to source the most elusive drops, the finest materials, and the most innovative designs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1618354691438-25bc04584c23?auto=format&fit=crop&q=80&w=800" alt="Sneaker Detail" fill className="object-cover" referrerPolicy="no-referrer"/>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800" alt="Sneaker Detail" fill className="object-cover" referrerPolicy="no-referrer"/>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1584735175315-9d58231317ba?auto=format&fit=crop&q=80&w=800" alt="Sneaker Detail" fill className="object-cover" referrerPolicy="no-referrer"/>
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800" alt="Sneaker Detail" fill className="object-cover" referrerPolicy="no-referrer"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Quality */}
      <section className="bg-black text-white py-24 mb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide mb-4">Curated Excellence</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                We don't just sell shoes; we curate excellence. Every pair on our shelves is hand-selected for its design, cultural significance, and quality.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide mb-4">Authenticity Guaranteed</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Trust is our currency. We employ a rigorous, multi-step authentication process to ensure that every product you receive is 100% genuine.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide mb-4">Community First</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Sneaker culture is about community. We strive to foster an inclusive environment where passion for design brings people together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6 pb-24 text-center max-w-3xl">
        <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-6">Join the Culture</h2>
        <p className="text-gray-500 font-light text-lg mb-8">
          Experience the difference of a truly premium sneaker boutique. Explore our latest arrivals and find your next grail.
        </p>
        <Link 
          href="/shoes" 
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-gray-800 transition-colors"
        >
          Explore Catalog <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
