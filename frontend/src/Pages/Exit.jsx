import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import exitImage from "/exit-image.jpg"; // Import the image

const Exit = () => {
  const [loading, setLoading] = useState(false);
  const [carNo, setCarNo] = useState("");
  const navigate = useNavigate(); // Hook to handle navigation

  const handleSave = async () => {
    // setLoading(true);
    // try {

    //   const response = await axios.post("/currentdata/exit", { carNo });

    //   if (response.data.success) {
    //     navigate("/thank-you");
    //   } else {
    //     navigate("/api/check-car");
    //   }
    // } catch (error) {
    //   console.error("Failed to check car details:", error);
    //   navigate("/api/check-car");
    // } finally {
    //   setLoading(false);
    // }
    navigate("/thank-you");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side with the image */}
        <div className="flex justify-center items-center">
          <img
            src={exitImage}
            alt="Car"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        {/* Right side with the form */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Exit Entry
          </h1>
          {loading ? <div>Loading...</div> : ""}
          <div className="flex flex-col border-2 border-sky-300 rounded-md p-6">
            <div className="mb-4">
              <label
                htmlFor="carNo"
                className="block text-gray-700 font-bold mb-2"
              >
                Car Number
              </label>
              <input
                id="carNo"
                type="text"
                value={carNo}
                onChange={(e) => setCarNo(e.target.value)}
                className="border-2 border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                placeholder="Enter car number"
              />
            </div>
            <button
              className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? "Please wait..." : "Exit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exit;
