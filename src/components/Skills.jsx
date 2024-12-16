import React from "react";
import styled from "styled-components";

const SkillsSection = styled.section`
  padding: 20px;
  background: #f9f9f9;
  text-align: center;

  h2 {
    color: black;
    margin-bottom: 20px;
  }

  .skill-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .skill-card {
    background: rgb(9, 84, 134);
    color: white;
    padding: 20px;
    border-radius: 8px;
    width: 200px;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, background-color 0.3s ease;
    cursor: pointer;
  }

  .skill-card:hover {
    transform: translateY(-10px);
    background-color: rgb(11, 95, 148);
  }

  .skill-description {
    margin-top: 10px;
    font-size: 0.9em;
    color: #ccc;
  }
`;

const Skills = () => {
  const skills = [
    { name: "React", description: "A popular JavaScript library used for building user interfaces, particularly for single-page applications." },
    { name: "ASP.NET Core", description: "A cross-platform, high-performance framework for building modern, cloud-based, and internet-connected applications." },
    { name: "SQL", description: "A domain-specific language used for managing and manipulating databases, allowing for efficient data operations." },
    { name: "JavaScript", description: "A dynamic programming language used for client-side and server-side web development, enabling interactive web pages." },
    { name: "HTML", description: "The standard markup language used to create and structure web pages, defining the content and structure of web elements." },
    { name: "CSS", description: "A stylesheet language used to control the visual layout, colors, and fonts of a web page for better presentation." },
    { name: "Machine Learning", description: "A subset of AI that enables systems to automatically learn and improve from experience without being explicitly programmed." },
    { name: "AI", description: "A broad field focused on creating intelligent systems capable of performing tasks that usually require human-like intelligence." },
    { name: "Agile Methodologies", description: "A set of principles for software development that emphasizes iterative progress, collaboration, and flexibility." },
    { name: "MS Office", description: "A suite of productivity software that includes tools like Word, Excel, and PowerPoint for business and personal use." },
  ];

  return (
    <SkillsSection id="skills">
      <h2><b>SKILLS</b></h2>
      <div className="skill-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </SkillsSection>
  );
};

export default Skills;
