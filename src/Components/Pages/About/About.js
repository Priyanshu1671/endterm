import React from "react";
import "./About.css";
function About() {
  return (
    <div className="acontainer">
      <h1 id="aheading">About Us</h1>

      <p id="apara">
        India's Most Preferred and Trusted Service for Finding a Life-Partner.
        Most Trusted Matchmaking Service with Millions of Success Stories
        <br />
        Photo Matches via Email. Trusted by Millions. 100% Privacy. Search by
        Education. Instant Chat with Matches. Verified Profiles.
        <br /> Our staff is always willing to help and listen to your ideas and
        requests to ensure that your event is perfect and your needs are met.
      </p>

      <div id="ainput">
        <label htmlFor="email">Enter your Email</label>
        <input type="text" id="email" placeholder="ENTER YOUR EMAIL"></input>

        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default About;
