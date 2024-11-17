import "./styles.css";
import StrelkaSvg from "../../assets/icons/strelka.svg?react";

export const About = () => {
  return (
    <section className="aboutContainer">
      <div>
        <h3>What to find in this API?</h3>
        <hr />
        <div className="infoNumbers">
          <div>
            <h3>100 +</h3>
            <p>Jelly belly beans</p>
          </div>
          <div>
            <h3>8</h3>
            <p>Properties on each bean</p>
          </div>
          <div>
            <h3>99 +</h3>
            <p>Facts on Jelly Belly</p>
          </div>
          <div>
            <h3>20 +</h3>
            <p>Milestones in the Jelly Belly History</p>
          </div>
          <div>
            <h3>25 +</h3>
            <p>Recipes</p>
          </div>
          <div>
            <h3>50 +</h3>
            <p>Jelly Belly Combinations</p>
          </div>
        </div>
      </div>
      <div className="infoNumbersLast">
        All data reflecting from the original
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.jellybelly.com/"
        >
          Jelly Belly Website <StrelkaSvg />
        </a>
        <h3>Check out all endpoints</h3>
        <ul>
          <li>
            <a href="/beans">
              Beans <StrelkaSvg />
            </a>
          </li>
          <li>
            <a href="/recipes">
              Recipes <StrelkaSvg />
            </a>
          </li>
          <li>
            <a href="/facts">
              Facts <StrelkaSvg />
            </a>
          </li>
          <li>
            <a href="/combinations">
              Combinations <StrelkaSvg />
            </a>
          </li>
          <li>
            <a href="/history">
              History <StrelkaSvg />
            </a>
          </li>
        </ul>
      </div>
      <div className="AboutAddition">
        <h2>Content and Sources</h2>
        <p>
          The content, including images and data, has been sourced from the
          official Jelly Belly website (
          <a
            href="https://www.jellybelly.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.jellybelly.com
          </a>
          ). It's important to note that I do not claim ownership of any
          information on this API or website, except for the original graphics
          of the logo and logotype. The rest of the content is a creative remix
          of the available information.
        </p>
        <h2>Contribution and Contact</h2>
        <p>
          If you have suggestions, comments, or contributions for this API or
          website, please feel free to reach out. You can contact me through the
          "Contact" section on this website or directly via email at{" "}
          <a href="mailto:moshikoatia@gmail.com">moshikoatia@gmail.com</a>. Your
          input and collaboration are greatly appreciated.
        </p>
        <h2>Repositories and Project Structure</h2>
        <p>
          This project is divided into three main parts, each with its own
          repository:
        </p>
        <ul>
          <li>
            <strong>1. Web Scraper Repository</strong> (
            <a
              href="https://github.com/Object-ions/capstone-supporting-files"
              target="blank"
            >
              GitHub Repo
            </a>
            ): This repository contains scripts and supporting files for data
            collection using Python, BeautifulSoup and ChromeDrive. It details
            the methodology used for creatively gathering data step by step
            until it was ready to be seeded into the C# API.
          </li>
          <li>
            <strong>2. API Repository</strong> (
            <a
              href="https://github.com/Object-ions/Jelly-Belly-Wiki-API"
              target="blank"
            >
              GitHub Repo
            </a>
            ) : The heart of the project, this repository holds the C# and EF
            Core .Net API with MySql migrations. It serves as the core database
            of the project. Detailed instructions on how to use this API are
            available in the repository, similar to the API Documentation
            provided in the UI.
          </li>
          <li>
            <strong>3. UI Repository</strong> (
            <a
              href="https://github.com/Object-ions/Jelly_Belly_Wiki_Client"
              target="blank"
            >
              GitHub Repo
            </a>
            ) : The User Interface makes full use of the API's database,
            showcasing one approach to design by utilizing all the endpoints and
            their various options.
          </li>
        </ul>
        <p className="noteAbout">
          <strong>Note:</strong> This is not the final version of this project,
          and it will continue to evolve. As it's a large-scale work and I am a
          precise person, this is still a work in progress.
        </p>
      </div>
    </section>
  );
};
