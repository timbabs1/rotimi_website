import classes from './css/AboutCard.module.css'
import { v4 as uuidv4 } from 'uuid'

function AboutCard(props) {
    return (
        <div key={`${uuidv4()}`} className={classes.card}>
            {props.children}
        </div>
    )
}

export default AboutCard
