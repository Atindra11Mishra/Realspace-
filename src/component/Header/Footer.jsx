

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-lg">RealSpace Group, a premier real estate firm in Indore, dedicated to crafting exceptional living and commercial spaces tailored to your aspirations..</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-lg">Gokul Nagar, Indore</p>
          <p className="text-lg">Email: realpacegroups@gmail.com</p>
          <p className="text-lg">Phone: +91 998877665</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-3xl"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-400 hover:text-white text-3xl"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white text-3xl"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-lg">&copy; 2024 RealSpace Group. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);
}


export default Footer
