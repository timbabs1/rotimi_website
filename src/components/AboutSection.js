import classes from "./css/AboutSection.module.css";
import AboutItem from "./AboutItem";

const burnout = [
  {
    image: "/images/karah.jpeg",
    name: "Karah",
    position: "½ of Small Town Burnouts",
    social: "@karaofficial",
    bio: [
      "Karah is a young versatile Nigerian recording and performing artiste. She is a talented vocalist, song writer and creative writer. From a young age, she had always been interested in music and loved to sing. She began her music journey in early 2020 on her YouTube channel singing covers and a few original songs she wrote herself.",
      "She then went into a development phase as she decided to chase her music dreams professionally after she finished school. KARAH had been quiet for the most part of 2021, occasionally releasing freestyle videos and covers on her social media.",
      "During her development phase, KARAH worked with several artistes and on many songs. Her debut single titled ‘Greedy’ was released September 2022.",
    ],
  },
  {
    image: "",
    name: "SoulblackSheep",
    position: "½ of Small Town Burnouts",
    social: "@soul_blacksheep",
    bio: [""],
  },
  {
    image: "",
    name: "Promise Nwalozie",
    position: "Director/Executive Producer",
    social: "@romihimself",
    bio: [""],
  },
  {
    image: "/images/Barnabas.jpg",
    name: "Barnabas Emordi",
    position: "Director of Photography",
    social: "",
    bio: [
      'Barnabas "Barny" Emordi is a Filmmaker, Cinematographer and Nationbuilder based in Lagos, Nigeria.',
      "The AMVCA Nomineed and Bsc. Mathematics graduate has Directed the photography of some of Nollywood's biggest films of all time; which culminated in him being named the highest grossing Director of Photography in Nollywood for 2021.",
      'He has an amazing Filmography which includes some of Nigeria\'s biggest cinema blockbusters ; Prophetess , Superstar, The Ghost and the Tout Too, "DOD" (The first Nollywood time travel film), Multi award winning "Elevator Baby" film, "Her" (The girl child advocacy film) and a host of TV Commercials, Documentaries (Local and internationally).',
      'He was also the Nigerian filmmaker that led Netflix\'s original documentary series "Stories of a Generation with Pope Francis" Nigerian team and he was featured on huffingtonpost.it and his work featured on Washingtonpost.com',
      'His work has also screened in film festivals in Nigeria, Abroad and his Directorial debut is "Wheels" film, a story about a boy living with a disability in Nigeria.',
    ],
  },
  {
    image: "",
    name: "Estevez",
    position: "Consultant",
    social: "",
    bio: [""],
  },
];

function AboutSection() {
  return (
    <div className="container">
      <div className={classes.section}>
        <h2 className={classes.header}>The Burnouts</h2>
        <ul className={classes.grid}>
          {burnout.map((item) => (
            <AboutItem item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutSection;
