"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProductType(formData) {
  const data = {
    name: formData.get("name"),
  };

  const existingProductType = await db.productType.findUnique({
    where: {
      name: data.name,
    },
  });

  if (existingProductType) {
    return redirect(
      `/product-type/add?errorMessage=Product type already exists.`
    );
  }

  await db.productType.create({
    data: {
      name: data.name,
    },
  });

  revalidatePath("/product-type", "page");

  redirect("/product-type");
}

export const getProductTypes = async () => {
  const productTypes = await db.productType.findMany();
  return productTypes;
};

export const getUniqueProductType = async (productTypeId) => {
  try {
    const productType = await db.productType.findUnique({
      where: {
        id: productTypeId,
      },
    });
    return productType;
  } catch (err) {
    console.error("Error fetching product type:", err);
    throw new Error("Failed to fetch product type");
  }
};

export const updateProductType = async (formData, productTypeId) => {
  const data = {
    name: formData.get("name"),
  };

  await db.productType.update({
    where: {
      id: parseInt(productTypeId),
    },
    data: {
      name: data.name,
    },
  });

  revalidatePath("/product-type", "page");

  redirect("/product-type");
};

export async function deleteProductType(productTypeId) {
  await db.productType.delete({
    where: {
      id: productTypeId,
    },
  });

  revalidatePath("/product-type", "page");
}
