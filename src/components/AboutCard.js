import classes from "./css/AboutCard.module.css";

function AboutCard(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default AboutCard;
