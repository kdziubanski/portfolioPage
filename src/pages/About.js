import React from "react";
import "../style/about.scss";
import img1 from "../images/KrzysztofDziubanski.jpg";
import img2 from "../images/KrzysztofDziubanskiKite.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <img
          className="about__image about__image-first"
          src={img1}
          alt="Krzysztof Dziubanski"
        />

        <p>
          Hi my name is Krzysztof Dziubański. I am master of Accademy of
          Phisical Education. I have started my journey with coding one year
          ago. After few lines of code I found out that this is the way where i
          want to go. I started with HTML and CSS learning from online courses,
          after some basic projects I wanted more. Then I putted my hands to
          JavaScript and React. Right now I am working with React. In the coming
          months I will learn React Native, Node.js, MongoDB and Express. I
          decided that this is the moment where I want to change my career path
          and become full time developer.
        </p>
      </div>

      <div className="about__container">
        <img
          className="about__image about__image-second"
          src={img2}
          alt="Krzysztof Dziubanski kitesurfing"
        />
        <p>
          I am person who like to face with new chellanging tasks, know how to
          solve problems and how to cooperate in groups. I love to learn new
          things and I am not scared when there are troubles. I am very active
          person, loving sport, new technologies, and traveling. I am very open,
          easy going person.
        </p>
      </div>
    </div>
  );
};

export default About;
