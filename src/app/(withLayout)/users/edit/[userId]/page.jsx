"use client";

import EditUserScreen from "@/screens/users/edit";
import { useParams } from "next/navigation";

const EditUserPage = () => {
  const params = useParams();
  return (
    <>
      <EditUserScreen params={params} />
    </>
  );
};

export default EditUserPage;
