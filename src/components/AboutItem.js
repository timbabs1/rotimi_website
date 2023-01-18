import { FaTwitter } from "react-icons/fa";
import AboutCard from "./AboutCard";
import classes from "./css/AboutItem.module.css";

function AboutItem({ item }) {
  return (
    <li>
      <AboutCard>
        <div className={classes.imageContainer}>
          <img
            src={item.image}
            alt={`${item.name}`}
            className={classes.image}
          />
        </div>
        <div className={classes.content}>
          <h3 className={classes.name}>{item.name}</h3>
          <p className={classes.position}>{item.position}</p>
          <div className={classes.socialContainer}>
            <FaTwitter className={classes.socialLogo} />
            <p className={classes.handle}>{item.social}</p>
          </div>
          <ul>
            {item.bio.map((item) => (
              <li className={classes.bioBlock}>{item}</li>
            ))}
          </ul>
        </div>
      </AboutCard>
    </li>
  );
}

export default AboutItem;
