import { list } from '../Data';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function ProjectCards() {
 
  return (
    
      <div className= ' py-14 px-auto  grid grid-cols-3 gap-12 ' >
  {list.map((val,index)=>
       
 
      
       <Card key={index} className="bg-white shadow-xl">
       <Card.Img variant="top" src={val.cover} />
       <Card.Body className="pb-4 sm:pb-6">
         <Card.Title className="text-center font-bold text-2xl sm:text-3xl py-2">{val.name}</Card.Title>
         <Card.Text className="font-medium text-lg sm:text-lg py-2 px-6">Location - {val.location}</Card.Text>
         <div className="flex justify-center">
          <Link to='project/New/1'>
           <Link to="New/1">
             <Button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm sm:text-base px-6 sm:px-9 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">See Details</Button>
           </Link>
           </Link>
         </div>
       </Card.Body>
     </Card>
    
    
)}</div>
  );
}

export default ProjectCards