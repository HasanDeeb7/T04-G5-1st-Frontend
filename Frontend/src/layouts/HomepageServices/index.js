// Importing the Service component
import Service from "../../components/Services/Service";

// Importing the CSS module for styling
import style from "./servicesSection.module.css";

// Importing images for the services
import gymProducts from "../../assets/images/HomepageImages/GymProducts.png";
import personalTraining from "../../assets/images/HomepageImages/PersonalTraining.png";
import regimePlans from "../../assets/images/HomepageImages/RegimePlans.png";

// Functional component for rendering the ServicesSection
function ServicesSection() {
  // Data for different services, including name, image, and path
  const ServicesData = [
    {
      name: "Gym Products",
      image: gymProducts,
      path: 'products',
    },
    {
      name: "Personal Training",
      image: personalTraining,
      path: 'training',
    },
    {
      name: 'Regime Plans',
      image: regimePlans,
      path: 'regimePlans',
    },
  ];

  // JSX structure for rendering the ServicesSection
  return (
    <section className={style.servicesSection}>
      <h2>Services</h2>
      <section className={style.imagesContainer}>
        {/* Hero section with a brief description */}
        <section className={style.heroImageContainer}>
          <section className={style.heroImage}></section>
          <span className={style.heroSectionText}>
            <span className={style.heroTitle}>GYM</span>
            <p>
              Expect a heart-pumping workout that will leave you feeling
              energized and accomplished. Our supportive community of
              like-minded individuals.
            </p>
          </span>
        </section>

        {/* Section for rendering individual services */}
        <section className={style.basisFlexContainer}>
          {/* Mapping through the ServicesData array and rendering Service component for each service */}
          {ServicesData.map((item, key) => (
            <Service key={key} name={item.name} image={item.image} path={item.path} />
          ))}
        </section>
      </section>
    </section>
  );
}

// Exporting the ServicesSection component as the default export
export default ServicesSection;
