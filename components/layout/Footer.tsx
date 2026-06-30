import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-display font-bold text-3xl tracking-tighter uppercase">Sole</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Premium sneaker boutique offering the latest releases, classic silhouettes, and limited edition collaborations.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold tracking-wide uppercase mb-6 text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/shoes" className="hover:text-white transition-colors">Shop</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold tracking-wide uppercase mb-6 text-sm">Categories</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link href="/categories/Air%20Jordan%201" className="hover:text-white transition-colors">Air Jordan 1</Link></li>
              <li><Link href="/categories/Dunk" className="hover:text-white transition-colors">Nike Dunk</Link></li>
              <li><Link href="/categories/Yeezy" className="hover:text-white transition-colors">Yeezy</Link></li>
              <li><Link href="/categories/Running%20Shoes" className="hover:text-white transition-colors">Running</Link></li>
              <li><Link href="/categories/Basketball%20Shoes" className="hover:text-white transition-colors">Basketball</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold tracking-wide uppercase mb-6 text-sm">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sole Inc. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
