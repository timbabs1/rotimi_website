import classes from '../components/css/RoadmapItem.module.css'
import { v4 as uuidv4 } from 'uuid'

function RoadmapItem({ item }) {
    return (
        <li>
            <p className={classes.date}>{item.date}</p>
            <div className={classes.milestones}>
                {item.milestone.map(item => (
                    <p key={`${item.milestone} + ${item.date} - ${uuidv4()}`} className={classes.milestone}>
                        {item}
                    </p>
                ))}
            </div>
        </li>
    )
}

export default RoadmapItem
