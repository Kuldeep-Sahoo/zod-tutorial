import { useState } from "react";
import { FormErrors, userFormSchema, UserFormSchema } from "./types/userForm";
import { MessageCircleWarning, OctagonAlert } from "lucide-react";

// type UserFormType = {
//   name: string;
//   age: number;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   phoneNumber: string;
//   gender: string;
// };

const UserForm = () => {
  const [formData, setformData] = useState<UserFormSchema>({
    name: "",
    age: 0,
    email: "",
    password: "",
    confirmPassword: "",
    phone: 0,
    gender: "male",
  });
  const [error, setError] = useState<FormErrors>({});

  const changeInputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: name === "age" ? (value ? Number(value) : 0) : value,
    });
    setError((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = userFormSchema.safeParse(formData);
    console.log({ formData });
    console.log({ result });
    if (!result.success) {
      setError(result.error.formErrors.fieldErrors);
    } else {
      setError({});
    }
  };
  return (
    <form action="" className="w-[50%] m-auto" onSubmit={onSubmitHandler}>
      <h1 className=" text-center text-3xl font-bold">User Form</h1>

      <div className="mb-2 flex flex-col max-w-3xl">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          id="name"
          className="border border-gray-500 rounded px-2 py-1"
          onChange={changeInputHandler}
        />
        {error.name && (
          <span className="text-red-500 text-sm flex gap-2 items-center mt-2">
             <OctagonAlert size={20}/> 
            {error.name[0]}
          </span>
        )}
      </div>
      <div className="mb-2 flex flex-col max-w-3xl">
        <label htmlFor="name">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          id="email"
          className="border border-gray-500 rounded px-2 py-1"
          onChange={changeInputHandler}
        />
        {error.email && (
          <span className="text-red-500 text-sm flex gap-2 items-center mt-2">
             <OctagonAlert size={20}/> 
            {error.email[0]}
          </span>
        )}
      </div>
      <div className="mb-2 flex flex-col max-w-3xl">
        <label htmlFor="name">Age</label>
        <input
          type="text"
          name="age"
          value={formData.age}
          id="age"
          className="border border-gray-500 rounded px-2 py-1"
          onChange={changeInputHandler}
        />

        {error.age && (
          <span className="text-red-500 text-sm flex gap-2 items-center mt-2 ">
            <OctagonAlert size={20} />
            {error.age[0]}
          </span>
        )}
      </div>
      <div className="mb-2 flex flex-col max-w-3xl">
        <label htmlFor="name">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          id="password"
          className="border border-gray-500 rounded px-2 py-1"
          onChange={changeInputHandler}
        />
        {error.password && (
          <span className="text-red-500 text-sm flex gap-2 items-center mt-2">
             <OctagonAlert size={20}/> 
            {error.password[0]}
          </span>
        )}
      </div>
      <div className="mb-2 flex flex-col max-w-3xl">
        <label htmlFor="name">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          id="confirmPassword"
          className="border border-gray-500 rounded px-2 py-1"
          onChange={changeInputHandler}
        />
        {error.confirmPassword && (
          <span className="text-red-500 text-sm flex gap-2 items-center mt-2">
             <OctagonAlert size={20}/> 
            {error.confirmPassword[0]}
          </span>
        )}
      </div>
      <div className="mb-2 flex flex-col max-w-3xl">
        <label htmlFor="name">Phone</label>
        <input
          type="number"
          name="phone"
          value={formData.phone}
          id="phone"
          className="border border-gray-500 rounded px-2 py-1"
          onChange={changeInputHandler}
        />
        {error.phone && (
          <span className="text-red-500 text-sm flex gap-2 items-center mt-2">
             <OctagonAlert size={20}/> 
            {error.phone[0]}
          </span>
        )}
      </div>
      <div className="mb-2 flex flex-col max-w-3xl">
        <label htmlFor="name">Gender</label>
        <select
          name="gender"
          id=""
          className="border rounder"
          value={formData.gender}
          onChange={changeInputHandler}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {error.gender && (
          <span className="text-red-500 text-sm flex gap-2 items-center mt-2">
             <OctagonAlert size={20}/> 
            {error.gender[0]}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
