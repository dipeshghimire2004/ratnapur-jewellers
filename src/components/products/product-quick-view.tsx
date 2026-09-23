'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Heart, MessageCircle, ShieldCheck, Sparkles, Calendar } from 'lucide-react';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductQuickView({ product, onClose }: ProductQuickViewProps) {
  const [selectedImage, setSelectedImage] = useState<'item' | 'wearable'>('item');
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) return null;

  const currentImageSrc =
    selectedImage === 'item' ? product.itemImage : product.wearableImage;

  const handleInquireWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Ratnapur Jewellers, I would like to inquire about the piece "${product.name}" (${product.category}${
        product.sku ? `, SKU: ${product.sku}` : ''
      }).`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md transition-all duration-300 animate-in fade-in">
      {/* Overlay Backdrop click */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1A1A1A] border border-[#333333] rounded-lg shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 text-muted-foreground hover:text-white bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Image Showcase with Switcher */}
        <div className="relative flex flex-col justify-between bg-[#151515] p-6 border-b md:border-b-0 md:border-r border-[#2A2A2A]">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-md bg-[#202020]">
            <Image
              src={currentImageSrc}
              alt={product.name}
              fill
              className="object-cover object-center transition-all duration-500"
            />

            {product.badge && (
              <span className="absolute top-3 left-3 text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-foreground bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/10">
                {product.badge}
              </span>
            )}
          </div>

          {/* Thumbnail Image Switcher */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              type="button"
              onClick={() => setSelectedImage('item')}
              className={`relative w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                selectedImage === 'item'
                  ? 'border-brand-gold ring-2 ring-brand-gold/30 scale-105'
                  : 'border-border/50 opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={product.itemImage}
                alt="Item View"
                fill
                className="object-cover"
              />
              <span className="absolute bottom-0 inset-x-0 bg-black/70 text-[8px] uppercase tracking-wider text-center py-0.5 text-white">
                Item
              </span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedImage('wearable')}
              className={`relative w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                selectedImage === 'wearable'
                  ? 'border-brand-gold ring-2 ring-brand-gold/30 scale-105'
                  : 'border-border/50 opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={product.wearableImage}
                alt="Wearable View"
                fill
                className="object-cover"
              />
              <span className="absolute bottom-0 inset-x-0 bg-black/70 text-[8px] uppercase tracking-wider text-center py-0.5 text-white">
                Worn
              </span>
            </button>
          </div>
        </div>

        {/* Right Side: Product Details & Inquiry Actions */}
        <div className="flex flex-col justify-between p-6 md:p-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans uppercase tracking-[0.2em] text-brand-gold font-medium">
                  {product.category}
                </span>
                {product.sku && (
                  <span className="text-[11px] font-sans text-muted-foreground tracking-wider">
                    {product.sku}
                  </span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-medium text-foreground pt-1">
                {product.name}
              </h2>
            </div>

            <div className="w-12 h-[1px] bg-brand-gold/40 my-3" />

            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.description ||
                'Exquisitely crafted luxury piece designed for timeless sophistication and effortless elegance.'}
            </p>

            {product.material && (
              <div className="flex items-center gap-2 text-xs text-foreground/80 pt-2">
                <Sparkles className="w-4 h-4 text-brand-gold" />
                <span>Material: <strong className="text-foreground">{product.material}</strong></span>
              </div>
            )}

            <div className="space-y-2 pt-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span>Authenticated 18k Fine Gold & Certified Diamonds</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-gold" />
                <span>Bespoke Customization & Private Boutique Viewing Available</span>
              </div>
            </div>
          </div>

          {/* Action Buttons: Inquiry & Appointment */}
          <div className="space-y-3 pt-4 border-t border-[#2A2A2A]">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleInquireWhatsApp}
                className="flex-1 bg-brand-gold hover:bg-brand-gold-light text-black font-semibold uppercase tracking-wider text-xs py-6 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" /> Inquire Creation
                </span>
              </Button>

              <Button
                variant="outline"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`py-6 px-4 border-[#333] hover:border-brand-gold transition-colors ${
                  isWishlisted ? 'text-brand-gold border-brand-gold' : 'text-white'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </Button>
            </div>

            <Link
              href={`/products/${product.slug}`}
              onClick={onClose}
              className="block text-center text-xs uppercase tracking-widest text-muted-foreground hover:text-brand-gold transition-colors pt-2"
            >
              View Full Product Details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
