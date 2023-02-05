import classes from './css/MintSection.module.css'
import MintItem from './MintItem'
import { Row, Col } from 'reactstrap'
import { v4 as uuidv4 } from 'uuid'

const mint = [
    {
        tier: 1,
        position: 'Special Thanks',
        ethValue: 0.13,
        usdValue: 200,
        availability: 3000,
        nft: ['1/1 Still image of a frame from the film, music camp or bts documentary'],
        benefit: [
            'Special thanks mention in film credits [name or ENS]',
            'Access to a Private community giving you privy access to the whole film making process.',
            'A private link to watch the film once completed.',
            'Access to visual audio gallery to listen to the album before drop',
            'Holders all NFTs would unlock new incentives as the band evolves',
        ],
    },
    {
        tier: 2,
        position: 'Associate Producer',
        ethValue: 0.63,
        usdValue: 1000,
        availability: 50,
        nft: ['1/1 video[15 seconds] from the feature film, Small Town Burnouts'],
        benefit: [
            'Associate Producer credits of the film',
            'Invite to the virtual screening of the film with video Q&A with the cast & crew',
            'A Small Town Burnouts merch box [flag, poster, tshirt, lighter, tray, stickers]',
            'Access to visual audio gallery to listen to the album before release',
            'Opportunity to be an extra in the film [concert & beach scene]',
            'Invite to Small Town Burnouts live in Concert [physical and virtual depending]',
            'Includes all Utilities & Perks of Tier 1',
        ],
    },
    {
        tier: 3,
        position: 'Executive Producer',
        ethValue: 3.13,
        usdValue: 5000,
        availability: 10,
        nft: [
            '1/1 Masked Burnouts NFT',
            '1/1 Still image of a frame from the film, music camp or bts of the film',
            '1/1 video of an entire shot of the feature film, Small Town Burnouts',
        ],
        benefit: [
            'Executive producer credit on film and BTS documentary [can be represented by a company name/logo]',
            'Includes all Utilities & Perks of Tiers 1 & 2.',
        ],
    },
]

function MintSection() {
    return (
        <div className="container">
            <div className={classes.section + ' d-grid justi'}>
                <h2 className={classes.header}>The Mint</h2>
                <ul>
                    <Row>
                        {mint.map(item => (
                            <Col key={`item ${item.tier} + ${uuidv4()}`} sm="12" md="4">
                                <MintItem item={item} />
                            </Col>
                        ))}
                    </Row>
                </ul>
                <p className={classes.text}>
                    Romi studios is building a virtual screening room for all our titles. NFTs from this mint would grant its holders access
                    to this.
                </p>
            </div>
        </div>
    )
}

export default MintSection
