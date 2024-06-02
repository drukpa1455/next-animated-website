import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-screen lg:w-1/2 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full">
            <Image
              src="/hero.png"
              alt=""
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            /> 
          </div>
        </div>
      </div>
      {/* TEXT CONTAINER */}
      <div className='h-1/2 lg:h-screen lg:w-1/2 flex flex-col gap-8 items-center justify-center p-8 lg:p-20'>
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Forging the Spatiotemporal Mesh
        </h1>
        {/* DESC */}
        <p className="md:text-xl">
          Welcome to SpatioTerra, a firm focused on fusing high resolution and revisit remote sensing
          data into a spatiotemporal mesh created and automatically updated through GeoAI fueled advanced
          analytics and automation.
        </p>
        {/* BUTTONS */}
        <div className='w-full flex gap-4'>
          <button className="p-5 rounded-lg ring-1 ring-black bg-black text-white">Case Studies</button>
          <button className="p-5 rounded-lg ring-1 ring-black bg-white text-black">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;