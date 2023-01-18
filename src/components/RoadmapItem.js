import classes from "../components/css/RoadmapItem.module.css";

function RoadmapItem({ item }) {
  return (
    <li>
      <p className={classes.date}>{item.date}</p>
      <p className={classes.milestones}>
        {item.milestone.map((item) => (
          <p className={classes.milestone}>{item}</p>
        ))}
      </p>
    </li>
  );
}

export default RoadmapItem;
