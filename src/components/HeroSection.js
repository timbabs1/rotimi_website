import classes from "./css/HeroSection.module.css";
//import heroVideo from "../components/assets/hero-video.mp4";

function HeroSection() {
  return (
    <div className={classes.hero}>
      {/*<video src={heroVideo} autoPlay loop muted />*/}
      <div className={classes.gradient}></div>
      <div className={classes.mediaContainer}></div>
      <button>Join the Mint!</button>
    </div>
  );
}

export default HeroSection;
