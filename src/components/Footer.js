import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import classes from "./css/Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <h3 className={classes.header}>
        Stay Up-To-Date with Small Town Burnouts
      </h3>
      <form className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
        <button>Confirm</button>
      </form>
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
      </ul>
    </div>
  );
}

export default Footer;
