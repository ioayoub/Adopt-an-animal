import { Link } from "react-router-dom";

import animals from "../data/animals.json";
import categories from "../data/categories.json";

import AnimalCard from "../components/animals/AnimalCard";
import CategoryCard from "../components/categories/CategoryCard";

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
        alt="sleeping dog"
        className="w-full lg:h-[50em] object-cover lg:object-center mx-auto"
      />
      <h2 className="my-24 text-3xl text-center font-bold">Our latest pets</h2>
      <div className="flex flex-col lg:flex-row flex-wrap gap-8">
        {animals.map((animal) => (
          <AnimalCard
            key={animal.id}
            id={animal.id}
            name={animal.name}
            description={animal.description}
            image={animal.image}
          />
        ))}
      </div>
      <Link
        to="/animals"
        className="block bg-black text-white px-4 py-4 rounded-lg w-fit mx-auto mt-32 animate-bounce text-2xl"
      >
        Discover our friends
      </Link>

      <h2 className="text-center text-3xl my-24 font-bold">Our categories</h2>
      {/* <div className="flex flex-col lg:flex-row flex-wrap gap-4"> */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            title={category.title}
            description={category.description}
            image={category.image}
          />
        ))}
      </div>
      <div className="flex flex-col font-bold text-2xl text-center">
        <h2 className="text-3xl font-bold my-12">To go further</h2>
        <div className="flew flex-row my-12">
          <Link
            to="https://www.la-spa.fr/"
            className="inline-flex w-auto h-48 mx-12"
          >
            <img
              src="https://www.la-spa.fr/app/assets-spa/uploads/2021/09/MicrosoftTeams-image-63.png.webp"
              alt="SPA logo"
            />
          </Link>
          <Link
            to="/https://www.30millionsdamis.fr/"
            className="inline-flex w-auto h-48 mx-12 "
          >
            <img
              src="https://www.30millionsdamis.fr/typo3conf/ext/ameos_main/Resources/Public/ressources/logo.svg"
              alt="30 millions d'amis logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
