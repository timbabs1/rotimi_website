import classes from './css/RoadmapSection.module.css'
import { BsArrowDown } from 'react-icons/bs'
import RoadmapItem from './RoadmapItem'

const roadmap = [
    {
        date: 'March 2023',
        milestone: ['Music Camp kicks off, Pre-production kicks off'],
    },
    {
        date: 'May 2023',
        milestone: ['Principal Photography'],
    },
    {
        date: 'June 2023',
        milestone: ['Post-Production'],
    },
    {
        date: 'July - October 2023',
        milestone: ['STB First single and video drops, Festival Submissions'],
    },
    {
        date: 'November',
        milestone: ['Official trailer release', 'NFT release to holders'],
    },
    {
        date: 'December 2023',
        milestone: ['Official cinema release', 'Album release', 'SmallTownBurnouts live in concert'],
    },
    {
        date: 'January 2024',
        milestone: ['BTS documentary release', 'Soundtrack album release', 'STB Live in Concert documentary'],
    },
]

function RoadmapSection() {
    return (
        <div className="container">
            {' '}
            <div className={classes.section}>
                <h2 className={classes.header}>Roadmap</h2>
                <ul>
                    {roadmap.map((item, index) =>
                        index === roadmap.length - 1 ? (
                            <RoadmapItem item={item} />
                        ) : (
                            <div>
                                <RoadmapItem item={item} />
                                <BsArrowDown className={classes.arrow} />
                            </div>
                        ),
                    )}
                </ul>
            </div>
        </div>
    )
}

export default RoadmapSection
