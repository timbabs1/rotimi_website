import classes from "./css/MintCard.module.css";

function MintCard(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default MintCard;
