import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import animals from "../../data/animals.json";

function AnimalDetails() {
  const { id } = useParams();
  const [currentAnimal, setCurrentAnimal] = useState({});

  useEffect(() => {
    setCurrentAnimal(animals.find((animal) => animal.id === parseInt(id, 10)));
  }, [id]);

  return (
    <div className="my-16">
      {currentAnimal && (
        <>
          <div className="flex flex-col flex-wrap lg:flex-row">
            <img
              src={currentAnimal.image}
              alt={currentAnimal.name}
              className="lg:w-2/4"
            />
            <div className="lg:w-2/4 px-4 justify-center items-center my-auto">
              <h1 className="text-4xl text-center font-bold my-8">
                {currentAnimal.name}
              </h1>
              <p className="mx-auto">{currentAnimal.description}</p>
            </div>
          </div>

          <div className="my-16 text-center px-4">
            <h2 className=" text-2xl my-4">
              Come discover{" "}
              <span className="font-bold">{currentAnimal.name}</span> and all
              our animals at this adress
            </h2>
            <p>16, road of the new shetler</p>
            <p>99999 Random City</p>
          </div>
          <Link
            to={`/category/${currentAnimal.categoryId}`}
            className="block text-center my-16 bg-black text-white w-fit p-4 rounded-md mx-auto"
          >
            See all animals of the category{" "}
            <span className="font-bold text-xl">{currentAnimal.category}</span>
          </Link>
        </>
      )}
    </div>
  );
}

export default AnimalDetails;
