export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  currency?: string;
  formattedPrice?: string;
  itemImage: string;

  wearableImage: string;
  badge?: string;
  isNew?: boolean;
  slug: string;
  description?: string;
  details?: string[];
  material?: string;
  rating?: number;
  reviewsCount?: number;
}
