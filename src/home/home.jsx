import React from "react";

const Home = () => {
  return (
    <div className="w-screen m-auto mt-12">
      <div className=' w-screen bg-[url("/homeimage.svg")] bg-cover'>
        <div className="container mx-auto pt-16 pl-6 flex flex-col items-center pb-64 text-center text-white">
          <h1 className="text-6xl leading-tight mb-6">
            Let's make your <br /> home beautiful together
          </h1>
          <p className="text-xl font-medium">
            There are many variations of the passages <br /> of lorem Ipsum from
            available, majority.
          </p>
          <button className="mt-7 py-4 px-12 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </div>
      <section className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Project Plan</h2>
          <p className="text-gray-600">
            Plan your project with our comprehensive guidance and expert advice.
          </p>
        </article>
        <article className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Interior Work</h2>
          <p className="text-gray-600">
            Enhance your interior spaces with our top-notch interior design
            services.
          </p>
        </article>
        <article className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Realization</h2>
          <p className="text-gray-600">
            Bring your dream home to life with our realization services.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Home;
