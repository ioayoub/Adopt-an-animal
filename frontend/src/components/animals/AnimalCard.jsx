import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AnimalCard({ id, name, image, description }) {
  return (
    <div className="flex-1 mx-2">
      <Link to={`/animals/${id}`}>
        <img src={image} alt={name} className="w-full h-64 object-cover" />
      </Link>
      <h3 className="text-xl font-bold my-2">{name}</h3>
      <p className="text-gray-500">{description}</p>
      <Link
        to={`/animals/${id}`}
        className="block bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 w-fit"
      >
        Adopt me ❤️
      </Link>
    </div>
  );
}

AnimalCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AnimalCard;
