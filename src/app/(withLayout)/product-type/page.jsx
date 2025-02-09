import ProductTypeScreen from "@/screens/product-type";
import { getProductTypes } from "@/actions/productTypeActions";
export default async function ProductTypeManagement() {
  const productTypes = await getProductTypes();
  return (
    <>
      <ProductTypeScreen productTypes={productTypes} />
    </>
  );
}
