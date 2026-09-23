'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '@/components/layout';
import { ProductCard, ProductQuickView } from '@/components/products';
import { MOCK_PRODUCTS } from '@/data/products';
import { Product } from '@/types';
import { SlidersHorizontal, ChevronDown, Sparkles } from 'lucide-react';

const CATEGORIES = ['All', 'Earrings', 'Bracelets', 'Rings', 'Necklaces'];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest Arrivals', value: 'newest' },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<Product | null>(null);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  // Filter & Sort Products
  const filteredProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS];

    if (selectedCategory !== 'All') {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-[#1D1D1D] text-foreground flex flex-col selection:bg-brand-gold selection:text-black">
      {/* Site Header */}
      <Header />

      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto w-full">
        {/* Page Hero Header */}
        <section className="text-center py-10 md:py-14 border-b border-[#2A2A2A] mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-xs uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ratnapur Fine Jewelry Collection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-wide text-foreground mb-4">
            The Haute Joaillerie Catalog
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground font-sans font-light leading-relaxed">
            Discover our master-crafted jewelry creations. Hover over any design to view its silhouette worn on skin.
          </p>
        </section>

        {/* Filter & Sort Controls Top Bar (Matches reference screenshot) */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 py-4 border-b border-[#2A2A2A] mb-10 text-xs text-muted-foreground font-sans">
          {/* Left: Category Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full transition-all duration-300 font-medium whitespace-nowrap text-xs tracking-wider ${
                  selectedCategory === cat
                    ? 'bg-foreground text-background font-semibold shadow-md'
                    : 'hover:text-foreground hover:bg-[#282828] text-muted-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right: Item Count, Filters Button, & Sort Dropdown */}
          <div className="flex items-center justify-between md:justify-end gap-6 text-xs text-foreground">
            {/* Item Count */}
            <span className="text-muted-foreground tracking-wider font-light">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
            </span>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilterDrawer(!showFilterDrawer)}
              className="flex items-center gap-2 hover:text-brand-gold transition-colors font-medium tracking-wider"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>

            {/* Sort Select */}
            <div className="relative flex items-center gap-1.5 cursor-pointer group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-foreground cursor-pointer focus:outline-none font-medium tracking-wider appearance-none pr-5 py-1"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#1D1D1D] text-foreground">
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground pointer-events-none absolute right-0" />
            </div>
          </div>
        </div>

        {/* Collapsible Filter Info Drawer */}
        {showFilterDrawer && (
          <div className="mb-8 p-6 bg-[#242424] border border-[#333333] rounded-md animate-in slide-in-from-top-4 duration-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-heading text-lg font-medium text-foreground">Filter Options</h3>
              <button
                onClick={() => setShowFilterDrawer(false)}
                className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
              >
                Close ✕
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
              <div>
                <span className="block font-semibold uppercase tracking-wider mb-2 text-brand-gold">Precious Metal</span>
                <div className="space-y-1.5 text-muted-foreground">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" defaultChecked className="rounded accent-brand-gold" /> 18k Yellow Gold
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" defaultChecked className="rounded accent-brand-gold" /> 18k White Gold
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" defaultChecked className="rounded accent-brand-gold" /> Sterling Silver
                  </label>
                </div>
              </div>

              <div>
                <span className="block font-semibold uppercase tracking-wider mb-2 text-brand-gold">Availability</span>
                <div className="space-y-1.5 text-muted-foreground">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" defaultChecked className="rounded accent-brand-gold" /> In Stock
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                    <input type="checkbox" className="rounded accent-brand-gold" /> Ready for Bespoke Order
                  </label>
                </div>
              </div>

              <div>
                <span className="block font-semibold uppercase tracking-wider mb-2 text-brand-gold">Price Range</span>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">€1,000</span>
                  <input type="range" min="1000" max="10000" className="w-full accent-brand-gold" />
                  <span className="text-muted-foreground">€10,000+</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Cards Grid (Matching reference screenshot grid layout) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setSelectedQuickViewProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground font-sans">
            <p className="text-lg">No jewelry items found matching this category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 text-xs uppercase tracking-widest text-brand-gold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Quick View Modal */}
      <ProductQuickView
        product={selectedQuickViewProduct}
        onClose={() => setSelectedQuickViewProduct(null)}
      />
    </div>
  );
}
