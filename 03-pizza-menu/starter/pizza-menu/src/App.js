// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      // spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 9005,
      },
    },
  },
];
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, []);

  // const hour = new Date().getFullYear()
  // console.log(hour)
  // return (
  //   <>
  //     {data.map((data) => (
  //       <div key={data.id} style={{ paddingTop: "40px" }}>
  //         <h3>Name :{data.title}</h3>
  //         <h3>publication date: {data.publicationDate} </h3>
  //         <h3>author: {data.author} </h3>
  //         <h3 style={{ display: "flex" }}>
  //           genres:{" "}
  //           {data.genres.map((genres, i) => (
  //             <h4 key={i} style={{ display: "flex", paddingLeft: "20px" }}>
  //               {" "}
  //               {genres}{" "}
  //             </h4>
  //           ))}{" "}
  //         </h3>
  //         <h3>
  //           has movie adaptation: {data.hasMovieAdaptation ? "Yes" : "No"}{" "}
  //         </h3>
  //         <h3>pages : {data.pages} </h3>
  //         <h3>
  //           translations :{" "}
  //           {data.translations.bengali ||
  //           data.translations.chinese ||
  //           data.translations.french ||
  //           data.translations.korean ||
  //           data.translations.polish ||
  //           data.translations.portuguese ||
  //           data.translations.spanish
  //             ? "Avalible Translations "
  //             : "No translation"}{" "}
  //         </h3>
  //         {data.translations.spanish ? (
  //           <p>spanish : {data.translations.spanish} </p>
  //         ) : (
  //           ""
  //         )}
  //         {data.translations.bengali ? (
  //           <p>bengali : {data.translations.bengali} </p>
  //         ) : (
  //           ""
  //         )}
  //         {data.translations.chinese ? (
  //           <p>chinese : {data.translations.chinese} </p>
  //         ) : (
  //           ""
  //         )}
  //         {data.translations.french ? (
  //           <p>french : {data.translations.french} </p>
  //         ) : (
  //           ""
  //         )}
  //         {data.translations.korean ? (
  //           <p>korean : {data.translations.korean} </p>
  //         ) : (
  //           ""
  //         )}
  //         {data.translations.polish ? (
  //           <p> polish : {data.translations.polish} </p>
  //         ) : (
  //           ""
  //         )}
  //         {data.translations.portuguese ? (
  //           <p>portuguese : {data.translations.portuguese} </p>
  //         ) : (
  //           ""
  //         )}
  //         {/* rating: 4.36, ratingsCount: 38358, reviewsCount: 1095, */}
  //         <h3 style={{ display: "block" }}>
  //           reviews <br />{" "}
  //         </h3>
  //         <h3>Good reads</h3>
  //         <h4>
  //           {" "}
  //           {[
  //             `rating : ${data.reviews.goodreads.rating}`,
  //             <br />,
  //             ` rating count : ${data.reviews.goodreads.ratingsCount}`,
  //             <br />,
  //             ` reviews count : ${data.reviews.goodreads.reviewsCount}`,
  //             <br />,
  //             ` total good reeds ${
  //               data.reviews.goodreads.reviewsCount +
  //               data.reviews.goodreads.ratingsCount +
  //               data.reviews.goodreads.rating
  //             }`,
  //           ]}
  //         </h4>
  //         <br />
  //         <h3> library thing</h3>
  //         <h4>
  //           {" "}
  //           {[
  //             `rating : ${data.reviews.librarything?.rating}`,
  //             <br />,
  //             ` rating count : ${data.reviews.librarything?.ratingsCount}`,
  //             <br />,
  //             ` reviews count : ${data.reviews.librarything?.reviewsCount}`,
  //             <br />,
  //             ` total library thing ${
  //               data.reviews.librarything?.reviewsCount +
  //               data.reviews.librarything?.ratingsCount +
  //               data.reviews.librarything?.rating
  //             }`,
  //           ]}
  //         </h4>

  //         {/* {console.log(
  //           data.translations.bengali || data.translations.chinese
  //             ? "cool"
  //             : "not cool"
  //         )} */}
  //       </div>
  //     ))}
  //   </>
  // );

  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        {/* // */}

        <SkillList />
      </div>

      {time}
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src="good.png" alt="" srcset="" style={{ width: "100%" }} />
    </div>
  );
}

function Intro() {
  return (
    <p>
      Download and use 60,000+ Happy. stock photos for free. Thousands of new
      images every day Completely Free to Use High-quality videos and images
      from Pexels. Explore. License
    </p>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill text={skill.skill} emoji={skill.level} bg={skill.color} />
      ))}

      {/* <Skill text="laughter" emoji="😂" bg="blue" />
      <Skill text="laughter excess" emoji="🤣" bg="yellow" />
      <Skill text="crush" emoji="😊" bg="pink" />
      <Skill text="love" emoji=" ❤️" bg="orange" />
      <Skill text="yeye" emoji="😒" bg="brown" /> */}
    </div>
  );
}

function Skill({ text, emoji, bg }) {
  // const skillsLevel = (emoji === 'advanced') {
  //   return <span>😂</span>
  // } (emoji === 'beginner') {
  //     return <span>😊</span>
  // } else{
  //     return <span>❤️</span>
  // }
  return (
    <div className="skill" style={{ backgroundColor: bg }}>
      <span>{text}</span>

      <span>
        {emoji === "advanced" &&"😂"}{" "}
        {emoji === "intermediate" && "❤️" }
        {emoji === "beginner" &&"😊" }{" "}
      </span>
    </div>
  );
}

export default App;
