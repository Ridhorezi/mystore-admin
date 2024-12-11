"use client";

import EditProductTypeScreen from "@/screens/product-type/edit";
import { useParams } from "next/navigation";

const EditProductTypePage = () => {
  const params = useParams();
  return (
    <>
      <EditProductTypeScreen params={params} />
    </>
  );
};

export default EditProductTypePage;
