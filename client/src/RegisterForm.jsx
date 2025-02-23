import React, { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consumerNumber: "",
    meterNumber: "",
    connectionType: "Domestic",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Electricity Board Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700">Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700">Consumer Number:</label>
          <input type="text" name="consumerNumber" value={formData.consumerNumber} onChange={handleChange} required 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700">Meter Number:</label>
          <input type="text" name="meterNumber" value={formData.meterNumber} onChange={handleChange} required 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700">Connection Type:</label>
          <select name="connectionType" value={formData.connectionType} onChange={handleChange} 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="Domestic">Domestic</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
