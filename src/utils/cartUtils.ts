interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
  tags: string[];
  reviews: Review[];
  quantity: number;
}

export function getUniqueProductsWithQuantity(products: Product[]) {
  const uniqueProducts: Product[] = [];
  products.forEach((product) => {
    const existingProductIndex = uniqueProducts.findIndex((uniqueProduct) => uniqueProduct.id === product.id);

    if (existingProductIndex !== -1) {
      uniqueProducts[existingProductIndex].quantity++;
    } else {
      uniqueProducts.push({ ...product, quantity: 1 });
    }
  });

  return uniqueProducts;
}
