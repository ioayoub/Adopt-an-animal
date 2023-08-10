import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CategoryCard({ id, title, image, description, cardcolor }) {
  return (
    <div className="flex-1 items-center flex-col group cursor-pointer">
      <div className="relative transform transition ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover relative mx-auto grayscale hover:grayscale-0 px-4"
        />
        <h3 className="text-4xl text-white font-bold my-2 relative left-28 -top-36 w-fit">
          Others
        </h3>

        <div className="absolute inset-0 h-64 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-black bg-opacity-70 hover:grayscale-0 mx-4">
          <div
            className={`flex flex-col justify-center items-center h-full text-white font-semibold group-hover:rotate-y-180 ${cardcolor}`}
          >
            <p className="text-white px-4 text-center">{description}</p>
            <Link
              to={`/category/${id}`}
              className="block bg-black text-white px-4 py-2 rounded-lg  mt-4"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

CategoryCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cardcolor: PropTypes.string.isRequired,
};

export default CategoryCard;
