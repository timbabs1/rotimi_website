import classes from './css/AboutSection.module.css'
import AboutItem from './AboutItem'
import { Row, Col } from 'reactstrap'
import { v4 as uuidv4 } from 'uuid'

const burnout = [
    {
        image: '/images/karah.jpeg',
        name: 'Karah',
        position: '½ of Small Town Burnouts',
        social: '@karahofficial_',
        bio: [
            'Karah is a young versatile Nigerian recording and performing artiste. She is a talented vocalist, song writer and creative writer. From a young age, she had always been interested in music and loved to sing. She began her music journey in early 2020 on her YouTube channel singing covers and a few original songs she wrote herself.',
            'She then went into a development phase as she decided to chase her music dreams professionally after she finished school. KARAH had been quiet for the most part of 2021, occasionally releasing freestyle videos and covers on her social media.',
            'During her development phase, KARAH worked with several artistes and on many songs. Her debut single titled ‘Greedy’ was released September 2022.',
        ],
    },
    {
        image: '/images/soul_black_sheep.jpg',
        name: 'SoulblackSheep',
        position: '½ of Small Town Burnouts',
        social: '@soul_blacksheep',
        bio: [
            'SoulBlackSheep broke into the music scene in 2018 with his debut album, ‘Ecstacy, Just Chill’. The soulful R&B tracks instantly captured the attention of music fans as he mixed English and Yoruba lyrics over minimalist lo-fi instrumentals',
        ],
    },
    {
        image: '/images/promise.jpg',
        name: 'Promise Nwalozie',
        position: 'Director/Executive Producer',
        social: '@romihimself',
        bio: [
            'Promise Agbawo Nwalozie has been in the music scene for a little over 10 years working in various roles including management and A&R. In 2016 he founded Drummr Africa; a media platform that promotes and documents emerging African music and culture. Working with over 300 artistes across the African continent and its diaspora. In 2022 Drummr Africa released a collaborative music project with artistes from all over Africa called “Yamen Yamen”',
        ],
    },
]

const burnoutBarnabas = [
    {
        styleName: 'barnabas',
        image: '/images/Barnabas.jpg',
        name: 'Barnabas Emordi',
        position: 'Director of Photography',
        social: '@barnyee_',
        bio: [
            'Barnabas "Barny" Emordi is a Filmmaker, Cinematographer and Nationbuilder based in Lagos, Nigeria.',
            "\
The AMVCA Nominee and Bsc. Mathematics graduate has Directed the photography of some of Nollywood's biggest films of all time; which culminated in him being named the highest grossing Director of Photography in Nollywood for 2021.",
            'He has an amazing Filmography which includes some of Nigeria\'s biggest cinema blockbusters ; Prophetess , Superstar, The Ghost and the Tout Too, "DOD" (The first Nollywood time travel film), Multi award winning "Elevator Baby" film, "Her" (The girl child advocacy film) and a host of TV Commercials, Documentaries (Local and internationally) including Arri’s Alexa 35 Encounters - “The Painting”',
        ],
    },
]

function AboutSection() {
    return (
        <div className="container">
            <div className={classes.section}>
                <Row>
                    <Col sm="12" className="mt-n4 mb-5" style={{ marginTop: '-5%' }}>
                        <img src={'/images/mid_image.jpg'} alt={`${'image of karah and soulblacksheep'}`} className={classes.image} />
                    </Col>
                </Row>
                <h2 className={classes.header}>The Burnouts</h2>
                <ul className={classes.grid}>
                    <Row>
                        {burnout.map(item => (
                            <Col key={`item ${item.name} - ${uuidv4()}`} sm="12" md="4" className="mt-3 mb-3">
                                <AboutItem key={`item ${item.name} - ${uuidv4()}`} item={item} />
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col sm="12" md="4" className="mt-3 mb-3"></Col>
                        <Col sm="12" md="4" className="mt-3 mb-3">
                            <AboutItem item={burnoutBarnabas[0]} />
                        </Col>
                        <Col sm="12" md="4" className="mt-3 mb-3"></Col>
                    </Row>
                </ul>
            </div>
        </div>
    )
}

export default AboutSection
