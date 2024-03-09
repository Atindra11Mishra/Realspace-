

function Newproject() { 
  return (
    <div className="container mx-auto p-4">
      {/* Property Image */}
      <div className="mb-8 relative">
        <img src="newproject\park.jpg" alt="Property" className="rounded-lg shadow-lg mb-4 w-full" />
      </div>

      {/* Property Information */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">Beautiful House</h1>
          {/* Call Us Button */}
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 text-xl">Call Us</button>
        </div>
        
        <p className="text-lg text-gray-700 mb-4">Located in City A, this beautiful house offers breathtaking views and a peaceful environment. Ideal for families looking for a serene place to call home.</p>
        
        {/* Price */}
        <p className="text-2xl font-bold mb-4">$200,000</p>
        
        {/* Property Details */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Property Details</h2>
          <ul className="list-disc pl-4">
            <li>3 Bedrooms</li>
            <li>2 Bathrooms</li>
            <li>Spacious Kitchen</li>
          </ul>
        </div>
  
       
      </div>
    </div>
  );
}

export default Newproject
