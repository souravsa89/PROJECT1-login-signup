import React from "react";
import Header from "./Component/Header/Header";
import about from "./AboutUs.module.css";
function AboutUs() {
  return (
    <>
      <Header />
      <div className={about.container}>
        <h1>About us</h1>
        <div className={about.heroSection}>
          <div className={about.heroImage}>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt="hero-img"
              />
              <figcaption>
                <p>Age: 25</p>
                <p>Location: India</p>
              </figcaption>
            </figure>
          </div>
          <div className={about.heroText}>
            <h2>Harsh Kajale</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing softwarddse like Aldus PageMaker including versions of
              Lorem Ipsum.wefae
            </p>
            <div style={{ backgroundColor: "aquaa" }}>
              <h6>
                What is your skills?
                <br />
                Write your skills here?
              </h6>
              <h6>
                What is your Hobby?
                <br />
                Write your skills here?
              </h6>
              <h6>
                What is your skills?
                <br />
                Write your skills here?
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
