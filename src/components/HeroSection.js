import classes from './css/HeroSection.module.css'
//import heroVideo from "../components/assets/hero-video.mp4";
import { useAccount } from 'wagmi'

function HeroSection() {
    const { address } = useAccount()
    return (
        <>
            <div className={classes.hero}>
                {/*<video src={heroVideo} autoPlay loop muted />*/}
                <div className={classes.gradient}></div>
                <div className={classes.mediaContainer}></div>
                <button>Join the Mint!</button>
            </div>
            <div>
                <h1>{address}</h1>
            </div>
        </>
    )
}

export default HeroSection
