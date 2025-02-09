import { getProducts } from "@/actions/productActions";
import ProductsScreen from "@/screens/products";
export default async function ProductsManagement() {
  const products = await getProducts();
  return (
    <>
      <ProductsScreen products={products} />
    </>
  );
}
