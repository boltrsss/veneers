export interface ProductFeature {
  label?: string;
  text: string;
  isPositive: boolean;
}

export interface ProductSpec {
  id: number;
  name: string;
  badge: string;
  badgeStyle?: 'top-pick' | 'standard' | 'full-width';
  badgeColor?: string;
  borderColor?: string;
  imageUrl: string;
  features: ProductFeature[];
  score: string;
  ratingText: string;
  ratingColor?: string;
  starCount?: number;
  reviewCount: string;
  discountText?: string;
  discountEnds?: string;
  buttonText: string;
  link: string;
}
