import AddProductScreen from "@/screens/products/add";
import { getProductTypes } from "@/actions/productTypeActions";

const AddProductPage = async () => {
  const productTypes = await getProductTypes();
  return (
    <>
      <AddProductScreen productTypes={productTypes} />
    </>
  );
};

export default AddProductPage;
