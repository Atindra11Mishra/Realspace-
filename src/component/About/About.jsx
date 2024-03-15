

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-pink-700 text-white py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">About RealSpace</h1>
        <p className="text-lg">Your Trusted Partner in Indore Real Estate Landscape</p>
      </div>
    </div>
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="py-5">
          <img src='/About/about.jpg' alt="RealSpace" className="rounded-lg shadow-lg mb-4 w-full" />
        </div>

        
        <div>
          <h2 className="text-3xl font-bold py-6 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            RealSpace Group is a prominent real estate firm in Indore, renowned for its commitment to excellence and customer satisfaction.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Founded in 2009, RealSpace has transformed the city skyline with its innovative residential and commercial projects.
          </p>
          <p className="text-lg text-gray-700">
            With a team of dedicated professionals and a passion for quality, we continue to redefine urban living and elevate lifestyles.
          </p>
        </div>
      </div>
    </div>
  </div>
);
}

export default About