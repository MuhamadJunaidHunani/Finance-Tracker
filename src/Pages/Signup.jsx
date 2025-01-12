import React, { useState } from "react";
import Joi from "joi";
import axios from "axios";
import register from "../Apis/Auth/Register";
import InputField from "../Components/UI/InputField";
import CustomDropdown from "../Components/UI/CustomDropdown";
import validate from "../Utils/Validate";
import Loader from "../Components/UI/Loader";



const SignupForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    purpose: "",
  });

  const [errors, setErrors] = useState({});
  const schema = Joi.object({
    username: Joi.string().min(3).required().label("Username"),
    email: Joi.string().email({ tlds: { allow: false } }).required().label("Email"),
    password: Joi.string().min(6).required().label("Password"),
    purpose: Joi.string().required().label("Purpose"),
  });

  const handleChange = ({ target: input }) => {
    const newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const validationErrors = validate(data, schema);
      setErrors(validationErrors || {});
      if (validationErrors) return;
      await register(data);
      toast.success("Regiester succesfully")
    } catch (error) {
      toast.error(error)
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <Loader/> 
        <InputField
          label="Username"
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
          error={errors.username}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />
        <CustomDropdown
          label="Purpose"
          name="purpose"
          options={["Personal", "Business"]}
          value={data.purpose}
          onChange={handleChange}
          error={errors.purpose}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
