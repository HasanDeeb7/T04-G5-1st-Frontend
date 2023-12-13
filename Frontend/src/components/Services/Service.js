import { Link } from "react-router-dom";
import style from "./service.module.css";

// Service Component
function Service(props) {
  // Destructuring props to get name, image, and path
  const { name, image, path } = props;

  // JSX structure for the Service component
  return (
    <>
      <section className={style.serviceImageContainer}>
        {/* Service Image Container */}
        <section className={style.serviceImage} style={{ backgroundImage: `url(${image})` }}>
          {/* Service Item with Learn More/Explore link */}
          <section className={`${style.serviceItem} ${style.learnMore}`}>
            <span>{name}</span>
            {/* Link to the specified path */}
            <Link to={`services/#${path}`} preventScrollReset={false}>
              {/* Display "Explore" for Gym Products, "Learn More" otherwise */}
              {name === 'Gym Products' ? "Explore" : "Learn More"}
            </Link>
          </section>
        </section>
      </section>
    </>
  );
}

export default Service;
