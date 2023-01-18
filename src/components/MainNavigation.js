import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import classes from "./css/MainNavigation.module.css";
import { ConnectButton } from '@rainbow-me/rainbowkit';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src="/images/romi-studio-logo-bgnone.png"
        alt=""
      />
      <h1 className={classes.heading}>SMALL TOWN BURNOUTS</h1>
      <ul>
        <li>
          <a
            href="https://twitter.com/stburnouts"
            aria-label="Small Town Burnouts Twitter page"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/smalltownburnouts/?hl=en"
            aria-label="Small Town Burnouts Instagram page"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@smalltownburnouts?is_from_webapp=1&sender_device=pc"
            aria-label="Small Town Burnouts TikTok page"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok />
          </a>
        </li>
        <li>
          <ConnectButton />
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;