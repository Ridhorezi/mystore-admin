"use client";

import {
  getUniqueProductType,
  updateProductType,
} from "@/actions/productTypeActions";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditProductTypeScreen = () => {
  const params = useParams(); // Mengambil productTypeId
  const productTypeId = parseInt(params.productTypeId);
  const [productTypeData, setProductTypeData] = useState(null);

  // Fetch data product type saat komponen dimuat
  useEffect(() => {
    const fetchProductTypeData = async () => {
      const data = await getUniqueProductType(productTypeId);
      setProductTypeData(data);
    };
    fetchProductTypeData();
  }, [productTypeId]);

  if (!productTypeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold p-2">Edit Product Type</h1>

      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={(formData) => updateProductType(formData, productTypeId)}
      >
        <div className="grid gap-2">
          <Label required={true}>Product Type</Label>
          <Input
            placeholder="Enter Product Type"
            name="name"
            defaultValue={productTypeData.name}
          />
        </div>
        <div className="grid gap-2"></div>
        <Button className="w-52 col-span-2 mt-2">Submit</Button>
      </form>
    </div>
  );
};

export default EditProductTypeScreen;
