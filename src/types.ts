export interface MenuProduct {
  name: string;
  isBestSeller?: boolean;
}

export interface MenuCategory {
  name: string;
  description: string;
  image: string;
  items: MenuProduct[];
}
