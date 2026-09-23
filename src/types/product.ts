export interface Product {
  id: string;
  name: string;
  category: string;
  itemImage: string;
  wearableImage: string;
  badge?: string;
  isNew?: boolean;
  slug: string;
  description?: string;
  details?: string[];
  material?: string;
  sku?: string;
}
