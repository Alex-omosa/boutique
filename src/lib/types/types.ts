interface ArticleAttributes {
  Pattern?: string;
  "Body or Garment Size"?: string;
  Fabric?: string;
  "Waist Rise"?: string;
  [key: string]: string | undefined; // Allow additional dynamic attributes
}

interface ImageUrls {
  default: string;
  search: string;
  back?: string;
  front?: string;
  [key: string]: string | undefined; // Allow additional image types
}

// Define your filter state type
type SearchFilters = {
  query: string;
  gender: string[];
  masterCategory: string[];
  subCategory: string[];
  baseColour: string[];
};

interface Product {
  id: number;
  gender: string;
  masterCategory: string;
  subCategory: string;
  articleType: string;
  baseColour: string;
  season: string;
  year: string;
  usage: string;
  productDisplayName: string;
  variantName: string;
  brandName: string;
  price: number;
  articleAttributes: ArticleAttributes;
  description: string;
  imageUrls: ImageUrls;
}

export type { Product, ArticleAttributes, SearchFilters, ImageUrls };