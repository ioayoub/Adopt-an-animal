function Homepage() {
  return (
    <div className="my-16">
      <h1 className="text-5xl lg:text-9xl mt-12 font-bold text-center">
        They wait for you
      </h1>
      <p className="text-center text-xl my-12">
        We have a variety of vaccinated and healthy animals looking for their
        forever homes
      </p>
      <img
        src="https://images.unsplash.com/photo-1553688738-a278b9f063e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
        alt="sleeping cat"
        className="w-full lg:max-h-screen object-cover mx-auto"
      />
      <h2 className="my-24 text-3xl text-center">Our latest pets</h2>
      <div className="flex flex-col lg:flex-row flex-wrap gap-4">
        <div className="flex-1 mx-2">
          <img
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            alt="cat"
            className="w-full h-64 object-cover"
          />
          <h3 className="text-xl font-bold my-2">Cat</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quibusdam, quia, quod voluptatum quos dolorum
            exercitationem voluptatibus quas quae voluptas. Quisquam voluptate,
            quibusdam, quia, quod voluptatum quos dolorum exercitationem
          </p>
          <button
            type="button"
            className="block bg-blue-500 text-white px-4 py-2 rounded-lg  mt-4"
          >
            Adopt me ❤️
          </button>
        </div>
        <div className="flex-1 mx-2">
          <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            alt="dog"
            className="w-full h-64 object-cover"
          />
          <h3 className="text-xl font-bold my-2">Dog</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quibusdam, quia, quod voluptatum quos dolorum
            exercitationem voluptatibus quas quae voluptas. Quisquam voluptate,
            quibusdam, quia, quod voluptatum quos dolorum exercitationem
          </p>
          <button
            type="button"
            className="block bg-blue-500 text-white px-4 py-2 rounded-md  mt-4"
          >
            Adopt me ❤️
          </button>
        </div>
        <div className="flex-1 mx-2">
          <img
            src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtc3RlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="hamster"
            className="w-full h-64 object-cover"
          />
          <h3 className="text-xl font-bold my-2">Hamster</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quibusdam, quia, quod voluptatum quos dolorum
            exercitationem voluptatibus quas quae voluptas. Quisquam voluptate,
            quibusdam, quia, quod voluptatum quos dolorum exercitationem
          </p>
          <button
            type="button"
            className="block bg-blue-500 text-white px-4 py-2 rounded-lg  mt-4"
          >
            Adopt me ❤️
          </button>
        </div>
      </div>

      <h2 className="text-center text-3xl my-24">Our categories</h2>
      <div className="flex flex-col lg:flex-row flex-wrap gap-4">
        <div className="flex-1 items-center flex-col group cursor-pointer">
          <div className="relative transform transition ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000">
            <div>
              <img
                src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="Cats"
                className="w-full h-64 object-cover relative mx-auto grayscale hover:grayscale-0 px-4"
              />
              <h3 className="text-4xl text-white font-bold my-2 relative left-28 -top-36 w-fit">
                Cats
              </h3>
            </div>
            <div className="absolute inset-0 h-64 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-black bg-opacity-70 hover:grayscale-0 mx-4">
              <div className="flex flex-col justify-center items-center h-full bg-blue-500 text-white font-semibold group-hover:rotate-y-180">
                <p className="text-white px-4 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                  excepturi blanditiis, quaerat voluptates eligendi officia
                  similique porro temporibus. Dolorum?
                </p>
                <button
                  type="button"
                  className="block bg-black text-white px-4 py-2 rounded-lg  mt-4"
                >
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 items-center flex-col group cursor-pointer">
          <div className="relative transform transition ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000">
            <div>
              <img
                src="https://images.unsplash.com/photo-1542715234-4bafcfc68bd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Dogs"
                className="w-full h-64 object-cover relative mx-auto grayscale hover:grayscale-0 px-4"
              />
              <h3 className="text-4xl text-white font-bold my-2 relative left-28 -top-36 w-fit">
                Dogs
              </h3>
            </div>
            <div className="absolute inset-0 h-64 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-black bg-opacity-70 hover:grayscale-0 mx-4">
              <div className="flex flex-col justify-center items-center h-full bg-purple-500 text-white font-semibold group-hover:rotate-y-180">
                <p className="text-white px-4 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                  excepturi blanditiis, quaerat voluptates eligendi officia
                  similique porro temporibus. Dolorum?
                </p>
                <button
                  type="button"
                  className="block bg-black text-white px-4 py-2 rounded-lg  mt-4"
                >
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 items-center flex-col group cursor-pointer">
          <div className="relative transform transition ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000">
            <div>
              <img
                src="https://images.unsplash.com/photo-1603989888581-3115416784fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9yc2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt="Horses"
                className="w-full h-64 object-cover relative mx-auto grayscale hover:grayscale-0 px-4"
              />
              <h3 className="text-4xl text-white font-bold my-2 relative left-28 -top-36 w-fit">
                Horses
              </h3>
            </div>
            <div className="absolute inset-0 h-64 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-black bg-opacity-70 hover:grayscale-0 mx-4">
              <div className="flex flex-col justify-center items-center h-full bg-orange-500 text-white font-semibold group-hover:rotate-y-180">
                <p className="text-white px-4 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                  excepturi blanditiis, quaerat voluptates eligendi officia
                  similique porro temporibus. Dolorum?
                </p>
                <button
                  type="button"
                  className="block bg-black text-white px-4 py-2 rounded-lg  mt-4"
                >
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 items-center flex-col group cursor-pointer">
          <div className="relative transform transition ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000">
            <div>
              <img
                src="https://images.unsplash.com/photo-1649785179009-bc9b16e8a6a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGV6YXJkc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="Others"
                className="w-full h-64 object-cover relative mx-auto grayscale hover:grayscale-0 px-4"
              />
              <h3 className="text-4xl text-white font-bold my-2 relative left-28 -top-36 w-fit">
                Others
              </h3>
            </div>
            <div className="absolute inset-0 h-64 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-black bg-opacity-70 hover:grayscale-0 mx-4">
              <div className="flex flex-col justify-center items-center h-full bg-green-500 text-white font-semibold group-hover:rotate-y-180">
                <p className="text-white px-4 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                  excepturi blanditiis, quaerat voluptates eligendi officia
                  similique porro temporibus. Dolorum?
                </p>
                <button
                  type="button"
                  className="block bg-black text-white px-4 py-2 rounded-lg  mt-4"
                >
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
