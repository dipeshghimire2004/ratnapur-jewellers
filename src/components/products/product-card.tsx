'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Eye } from 'lucide-react';
import { Product } from '@/types';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
  onQuickView?: (product: Product) => void;
  aspectRatio?: 'square' | 'portrait' | 'tall';
}

export function ProductCard({
  product,
  className,
  onQuickView,
  aspectRatio = 'portrait',
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formattedPrice =
    product.formattedPrice ||
    `${product.currency || '€'}${product.price.toLocaleString()}`;

  const aspectClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[4/5]',
    tall: 'aspect-[3/4]',
  };

  return (
    <div
      className={cn(
        'group flex flex-col w-full text-left transition-all duration-300',
        className
      )}
    >
      {/* Image Container with Hover Wearable Image */}
      <div
        className={cn(
          'relative w-full overflow-hidden bg-[#222222] dark:bg-[#1a1a1a] rounded-sm transition-all duration-500',
          aspectClasses[aspectRatio]
        )}
      >
        {/* Badge (e.g., NEW) */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-20">
            <span className="text-[11px] font-sans font-semibold tracking-[0.18em] uppercase text-foreground bg-background/70 dark:bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-[1px] border border-white/10 shadow-sm">
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist & Quick View Floating Action Buttons */}
        <div className="absolute top-3 right-3 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsWishlisted(!isWishlisted);
            }}
            aria-label="Add to wishlist"
            className={cn(
              'p-2 rounded-full backdrop-blur-md transition-all duration-300 shadow-md',
              isWishlisted
                ? 'bg-brand-gold text-black'
                : 'bg-black/40 text-white hover:bg-black/70 hover:text-brand-gold'
            )}
          >
            <Heart
              className={cn(
                'w-4 h-4 transition-transform duration-200 active:scale-125',
                isWishlisted && 'fill-current'
              )}
            />
          </button>

          {onQuickView && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(product);
              }}
              aria-label="Quick View"
              className="p-2 rounded-full bg-black/40 text-white hover:bg-black/70 hover:text-brand-gold backdrop-blur-md transition-all duration-300 shadow-md"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Product Card Image Link */}
        <Link href={`/products/${product.slug}`} className="block w-full h-full">
          {/* Base Standalone Item Photo */}
          <div className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0">
            <Image
              src={product.itemImage}
              alt={`${product.name} item`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className={cn(
                'object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105',
                !imageLoaded && 'blur-sm scale-95'
              )}
              onLoad={() => setImageLoaded(true)}
              priority={false}
            />
          </div>

          {/* Hover Wearable Photo */}
          <div className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100">
            <Image
              src={product.wearableImage}
              alt={`${product.name} on model`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Subtle vignette/overlay gradient for luxury depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </Link>
      </div>

      {/* Product Details Section Below Image */}
      <div className="pt-3.5 pb-1 flex flex-col gap-1">
        {/* Row 1: Category on left, Price on right */}
        <div className="flex items-center justify-between text-xs tracking-wider">
          <span className="text-muted-foreground font-sans font-medium uppercase tracking-widest text-[11px]">
            {product.category}
          </span>
          <span className="font-sans font-medium text-foreground text-[13px] tracking-tight">
            {formattedPrice}
          </span>
        </div>

        {/* Row 2: Product Name */}
        <div className="flex items-center justify-between">
          <Link
            href={`/products/${product.slug}`}
            className="font-heading text-lg font-medium text-foreground group-hover:text-brand-gold transition-colors duration-300 tracking-wide line-clamp-1"
          >
            {product.name}
          </Link>
        </div>
      </div>
    </div>
  );
}
