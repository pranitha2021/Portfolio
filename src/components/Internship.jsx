import React from "react";
import styled from "styled-components";

const fadeIn = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const InternshipSection = styled.section`
  ${fadeIn}
  padding: 40px;
  background-color: #f4f4f4;
  color: #333;
  text-align: center;
  margin-top: 11px; /* Push it down to ensure it does not overlay with header */
  margin-bottom: 50px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: fadeIn 1s forwards;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #005f73;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    color: #444;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .internship-details {
    margin-top: 20px;
    text-align: left;
  }

  .internship-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .skills-obtained {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .skill {
    background-color: #0077b6;
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #00b4d8;
    }
  }
`;

const Internship = () => {
  return (
    <InternshipSection id="internship">
      <h2>Internship Experience</h2>

      <div className="internship-details">
        <p><strong>Internship at Brain O Vision Solutions India Pvt. Ltd</strong></p>
        <p>During my internship at Brain O Vision Solutions, I worked on developing a single and advanced web page for an e-commerce website. This involved using:</p>
        <ul>
          <li>HTML, HTML Tags, CSS, JavaScript</li>
          <li>Creating the Home Page and other web pages using HTML</li>
          <li>Adding Social Media Handles to the web page and other resources</li>
          <li>Integrating a customer support system into the web page</li>
        </ul>

        <p><strong>Skills Obtained:</strong></p>
        <div className="skills-obtained">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
        </div>
      </div>

      <hr />

      <div className="internship-details">
        <p><strong>Intern Trainee at MNK TechFocus (10-08-2023 to 10-11-2023)</strong></p>
        <p>During my internship at MNK TechFocus, I was trained on various technical skills, including:</p>
        <ul>
          <li>Python</li>
          <li>SQL</li>
          <li>Machine Learning</li>
        </ul>

        <p>I also successfully completed a SQL course offered by W3Schools, which enhanced my understanding of databases and SQL queries.</p>

        <p><strong>Skills Obtained:</strong></p>
        <div className="skills-obtained">
          <div className="skill">Python</div>
          <div className="skill">SQL</div>
          <div className="skill">Machine Learning</div>
        </div>
      </div>
    </InternshipSection>
  );
};

export default Internship;
