import { list } from '../Data';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function ProjectCards() {
 
  return (
    
      <div className= ' py-14  grid grid-cols-3 gap-12 ' >
  {list.map((val,index)=>
       
 
      
      <Card key={index} className = "bg-white shadow-xl" style={{ width: '21rem' }}>
      <Card.Img variant="top" src={val.cover} />
      <Card.Body>
        <Card.Title className='py-2 text-center font-bold text-2xl '>{val.name}</Card.Title>
        <Card.Text className='py-3 px-4 font-semibold text-lg'>
        Location - {val.location}
        </Card.Text>
        <div className=' py-4 flex justify-center ...'>
        <Link to='New'><Button className=' text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-9 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>See Details</Button>
      </Link>
      </div>
      </Card.Body>
    </Card>
    
    
)}</div>
  );
}

export default ProjectCards