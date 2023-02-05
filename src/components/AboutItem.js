import { FaTwitter } from 'react-icons/fa'
import AboutCard from './AboutCard'
import classes from './css/AboutItem.module.css'
import { v4 as uuidv4 } from 'uuid'

function AboutItem({ item }) {
    const imageToUse = item.styleName === 'barnabas' ? classes.barnabasImage : classes.image
    return (
        <li>
            <AboutCard>
                <div className={classes.imageContainer}>
                    <img
                        src={item.image}
                        alt={`${item.name}`}
                        className={item.name === 'SoulblackSheep' ? classes.blackSheepImage : imageToUse}
                    />
                </div>
                <div className={classes.content}>
                    <h3 className={classes.name}>{item.name}</h3>
                    <p className={classes.position}>{item.position}</p>
                    <div
                        className={classes.socialContainer}
                        onClick={() => window.open(`https://twitter.com/${item.social.replace('@', '')}`)}
                    >
                        <FaTwitter className={classes.socialLogo} />
                        <p className={classes.handle}>{item.social}</p>
                    </div>
                    <ul>
                        {item.bio.map(item => (
                            <li key={`item ${item.id} ${uuidv4()}`} className={classes.bioBlock}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </AboutCard>
        </li>
    )
}

export default AboutItem
