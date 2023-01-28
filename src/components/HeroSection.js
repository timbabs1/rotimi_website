import classes from './css/HeroSection.module.css'
import newHeroVideo from './video/Small Town Burnouts RIP REEL WITHOUT BARS_compressed.mp4'
import ReactPlayer from 'react-player'

function HeroSection() {
    return (
        <>
            <div className={classes.hero}>
                <div style={{ position: 'relative', zIndex: 100 }}>
                    <ReactPlayer url={newHeroVideo} playing muted controls={true} width={'100%'} height={'100%'} />
                </div>
                <div className={classes.gradient}></div>
                <div className={classes.mediaContainer}></div>
                <button>Join the Mint!</button>
            </div>
        </>
    )
}

export default HeroSection
