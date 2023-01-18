import classes from "./css/FAQSection.module.css";
import FAQItem from "./FAQItem";

const FAQ = [
  {
    id: 1,
    question: "What are Small Town Burnouts?",
    answer:
      "Small Town Burnouts is a film project poised to be one of the first ever feature length film to be fully funded on web3. It tells the tale of a music band of the same name, made up of two musicians trying to find themselves through their art as they seek to navigate and thrive in the Nigerian music industry as it is.",
  },
  {
    id: 2,
    question: "Which NFTs are available?",
    answer:
      "The Small Town Burnouts NFT collection is struction in 3 levels, of increasing mint price and rarity. Higher tiers also include more unique online and IRL perks",
  },
  {
    id: 3,
    question: "What would be the minting price?",
    answer: [
      `Tier 1 [3,000 available] = 0.13 ETH`,
      `Tier 2 [50 available] = 0.63 ETH`,
      `Tier 3 [10 available] = 3.13 ETH`,
    ],
  },
  {
    id: 4,
    question: "When will the film be released?",
    answer:
      "The film is set to premier December 2023 but NFT holders would have an earlier private screening with the cast and crew of the film.",
  },
  {
    id: 5,
    question: "When would NFT holders get the actual NFT?",
    answer: "NFTs would be updated in November 2023",
  },
];

function FAQSection() {
  return (
    <div className="container">
      <div className={classes.section}>
        <div className={classes.textContainer}>
          <h2 className={classes.heading}>FAQ</h2>
          {/* <button>Expand All</button> */}
        </div>
        <ul className={classes.listContainer}>
          <li className={classes.listItem}>
            {FAQ.map((item) => (
              <FAQItem item={item} />
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FAQSection;
