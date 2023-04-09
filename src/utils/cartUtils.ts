import { Product } from '../store/interfaces';

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
