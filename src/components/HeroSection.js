import classes from './css/HeroSection.module.css'
import heroVideo from './video/Copy of Small Town Burnouts Rip Reel HQ 2.mp4'
import ReactPlayer from 'react-player'

function HeroSection() {
    return (
        <>
            <div className={classes.hero}>
                <div style={{ position: 'relative', zIndex: 100 }}>
                    <ReactPlayer url={heroVideo} playing muted controls={true} width={'100%'} height={'100%'} />
                </div>
                {/*<video src={heroVideo} loop muted />*/}
                <div className={classes.gradient}></div>
                <div className={classes.mediaContainer}></div>
                <button>Join the Mint!</button>
            </div>
        </>
    )
}

export default HeroSection
