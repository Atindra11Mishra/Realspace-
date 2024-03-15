import { useParams } from 'react-router-dom';
import { property } from '../Data';

const Newproject = () => {
   const  params = useParams();
   const {id} = params
   const propertyData = property.find(property => property.id === parseInt(id));
   
   
  return (

    <div className="container mx-auto p-4">
     
      <div className="mb-8 relative">
        <img src="/newproject/park.jpg" alt="Property" className="rounded-lg shadow-lg mb-4 w-full" />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">{propertyData.title}</h1>
          
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 text-xl">Call Us</button>
        </div>
        
        <p className="text-lg text-gray-700 mb-4">{propertyData.location}</p>
        
       
        <p className="text-2xl font-bold mb-4">{propertyData.price}</p>
        
       
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
