"use client";

import { getUniqueUser, updateUser } from "@/actions/userActions";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditUserScreen = () => {
  const params = useParams(); // Mengambil userId
  const userId = parseInt(params.userId);
  const [userData, setUserData] = useState(null);

  // Fetch data user saat komponen dimuat
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUniqueUser(userId);
      setUserData(data);
    };
    fetchUserData();
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold p-2">Edit User</h1>

      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={(formData) => updateUser(formData, userId)}
      >
        <div className="grid gap-2">
          <Label required={true}>Username</Label>
          <Input
            placeholder="Enter Username"
            name="userName"
            defaultValue={userData.userName}
          />
        </div>

        <div className="grid gap-2">
          <Label required={true}>User Type</Label>
          <select
            className="custom-input appearance-none cursor-pointer"
            name="userType"
            defaultValue={userData.userType}
          >
            <option value="">Select User Type</option>
            <option value="Super Admin">Super Admin</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        <div className="grid gap-2">
          <Label>Reset Password</Label>
          <Input placeholder="Example@123" name="password" />
        </div>

        <div className="grid gap-2">
          <Label>Confirm Password</Label>
          <Input placeholder="Re-enter the Password" name="confirmPassword" />
        </div>

        <Button className="w-52 col-span-2 mt-2">Submit</Button>
      </form>
    </div>
  );
};

export default EditUserScreen;
