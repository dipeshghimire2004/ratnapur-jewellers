'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ProductCard, ProductQuickView } from '@/components/products';
import { MOCK_PRODUCTS } from '@/data/products';
import { Product } from '@/types';

export function FeaturedProducts() {
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<Product | null>(null);

  // Take first 4 items for the homepage showcase grid
  const featuredItems = MOCK_PRODUCTS.slice(0, 4);

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-12 bg-[#1D1D1D] text-foreground border-t border-[#2A2A2A]">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-brand-gold font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Fine Jewelry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium tracking-wide">
              Iconic High Creations
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-medium text-foreground hover:text-brand-gold transition-colors group"
          >
            <span>Explore All Creations ({MOCK_PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Product Cards Grid (Matching reference screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setSelectedQuickViewProduct(p)}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductQuickView
        product={selectedQuickViewProduct}
        onClose={() => setSelectedQuickViewProduct(null)}
      />
    </section>
  );
}
