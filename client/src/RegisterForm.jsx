import axios from "axios";
import React, { useState } from "react";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consumerNumber, setConsumerNumber] = useState("");
  const [meterNumber, setMeterNumber] = useState("");
  const [connectionType, setConnectionType] = useState("Domestic");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/register", {
        name,
        email,
        phone,
        consumerNumber,
        meterNumber,
        connectionType,
        password,
      })
      .then((result) => setStatus(result.data.message || "Registration successful!"))
      .catch((err) => setStatus(err.response?.data?.message || "Registration failed!"));
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Electricity Board Registration</h2>
      {status && <p className="text-center text-red-500 mb-4">{status}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        
        <div>
          <label className="block text-gray-700">Email:</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        
        <div>
          <label className="block text-gray-700">Phone:</label>
          <input type="tel" onChange={(e) => setPhone(e.target.value)} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        
        <div>
          <label className="block text-gray-700">Consumer Number:</label>
          <input type="text" onChange={(e) => setConsumerNumber(e.target.value)} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        
        <div>
          <label className="block text-gray-700">Meter Number:</label>
          <input type="text" onChange={(e) => setMeterNumber(e.target.value)} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        
        <div>
          <label className="block text-gray-700">Connection Type:</label>
          <select onChange={(e) => setConnectionType(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="Domestic">Domestic</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
          </select>
        </div>
        
        <div>
          <label className="block text-gray-700">Password:</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">Register</button>
      </form>
      <div className="text-center text-green-500 mt-4">{status}</div>
    </div>
  );
}

export default RegisterForm;
