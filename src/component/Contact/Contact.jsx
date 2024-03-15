import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending data to backend or API)
    console.log(formData);
  }
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full border rounded-md p-2" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full border rounded-md p-2" onChange={handleChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="Phone" className="block text-gray-600 text-sm font-medium mb-2">Phone number</label>
              <input type="Phone" id="Phone" name="Phone" className="w-full border rounded-md p-2" onChange={handleChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 text-sm font-medium mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full border rounded-md p-2" onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact