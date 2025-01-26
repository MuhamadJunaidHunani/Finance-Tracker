import React from "react";
import Header from "../Components/Layouts/Header";

const Docs = () => {
  const authDetails = [
    {
      role: "admin",
      email: "admin@gmail.com",
      password: "admin123",
    },
    {
      role: "staff",
      email: "staff@gmail.com",
      password: "staff123",
    },

  ];

  return (
    <>
    <Header/>
    <div className="min-h-[calc(100vh-70px)] bg-gray-50 flex flex-col gap-4 items-center justify-center p-4">
      <div className=" w-full bg-white rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Authentication Details</h1>
        <div className="space-y-6">
          {authDetails.map((auth, index) => (
            <div
              key={index}
              className="p-3 border border-gray-200 rounded-lg bg-gray-100"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {auth.role}
              </h2>
              <p className="text-gray-600">
                <span className="font-medium text-primaryC">Email:</span>{" "}
                {auth.email}
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-primaryC">Password:</span>{" "}
                {auth.password}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full bg-white rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Website Features</h1>
        <div className="space-y-6">
            <div
              className="p-3 border border-gray-200 rounded-lg bg-gray-100"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Admin , Staff Dashboard
              </h2>
              <p className="text-gray-600">
                <span className="font-medium text-primaryC">Detail:</span>{" "}
                I have build fully dynamic adminpanel with using graphs and charts
              </p>
            </div>
            <div
              className="p-3 border border-gray-200 rounded-lg bg-gray-100"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Email Token
              </h2>
              <p className="text-gray-600">
                <span className="font-medium text-primaryC">Detail:</span>{" "}
                I have send the Token to Benfictiory to its gave email.
              </p>
            </div>
            <div
              className="p-3 border border-gray-200 rounded-lg bg-gray-100"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Private Public Route || JWT || Redux Thunk
              </h2>
              <p className="text-gray-600">
                <span className="font-medium text-primaryC">Detail:</span>{" "}
                i have using Redux thunk for async State and using JWT for strong and secure privacy.
              </p>
            </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default Docs;
