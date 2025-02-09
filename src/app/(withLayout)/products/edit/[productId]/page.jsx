import { getUniqueProducts } from "@/actions/productActions";
import { getProductTypes } from "@/actions/productTypeActions";
import EditProductScreen from "@/screens/products/edit";

const EditProductPage = async ({ searchParams, params }) => {
  const productTypes = await getProductTypes();
  const product = await getUniqueProducts(params.productId);
  return (
    <div>
      <EditProductScreen
        searchParams={searchParams}
        productTypes={productTypes}
        product={product}
      />
    </div>
  );
};

export default EditProductPage;
