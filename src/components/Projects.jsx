import React, { useState } from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  background-color: rgb(126, 160, 197);

  @media (max-width: 768px) {
    .project {
      flex-direction: column;
    }
  }

  padding: 20px;

  h2 {
    text-align: center;
    color: White;
  }

  .project {
    color: #2e3a47;
    margin: 20px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #fff;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    }
  }

  .view-button {
    color: #007bff;
    text-decoration: none;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ModalOverlay = styled.div`
  color: #2e3a47;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);  // Semi-transparent background for overlay
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
margin-top:100px;
  color: #2e3a47;
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  max-width: 600px;
  text-align: center;

  h3 {
    color: #2e3a47;
    margin-bottom: 10px;
  }

  p {
    color: #2e3a47;
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
    background-color: rgb(68, 189, 82);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      id: 1,
      title: "Animal Recognition Using Machine Learning",
      description:
        "Implemented a Machine Learning model to recognize animals (Cats, Dogs, and Rats) based on their height and width parameters.",
      details: `In this project, we designed and trained a custom machine learning algorithm to classify animals based on physical attributes like height and width. 
      The goal was to create a model that could accurately predict the animal type by analyzing input data such as the size dimensions of the animal.
      We used Scikit-learn's Decision Tree classifier to develop the model, allowing the algorithm to learn the relationships between input features and labels.
      For the image recognition component, we curated a dataset of images of cats, dogs, and rats, and implemented a Convolutional Neural Network (CNN) model to classify images based on the animal's features. 
      We used TensorFlow to build and train the CNN model, and Flask was used to create an interface for easy deployment of the model on the web.
      To visualize the dataset's patterns and the model's performance, we utilized Matplotlib to generate informative graphs and charts that helped in model evaluation and improvement. Technologies: Python, Scikit-learn, TensorFlow, Flask, Matplotlib, CNN, Image Recognition`
    },
    {
      id: 2,
      title: "Plant Leaf Disease Detection: Empowering Agriculture with AI",
      description:
        "Using Convolutional Neural Networks (CNN) for early plant leaf disease detection, with a Flask-based web interface.",
      details: `This project is designed to address the challenges faced by farmers in identifying and diagnosing plant diseases early. Using the power of Artificial Intelligence and Convolutional Neural Networks (CNN), we developed a system capable of detecting plant leaf diseases from uploaded leaf images.
      The model is trained on the extensive PlantDoc dataset, which includes a wide variety of leaf diseases to ensure robust and accurate predictions. 
      To build the model, we utilized TensorFlow and CNNs, which are ideal for image classification tasks like this.
      The project also includes a Flask-based web interface that allows users to upload leaf images, and the system analyzes them in real-time to provide immediate feedback on potential diseases.
      We focused on making the interface mobile-friendly, ensuring that it is accessible to users in the field. The system also has a feedback loop that allows users to help improve the model's accuracy by providing feedback on predictions.
      This project bridges technology with agriculture, offering an impactful solution for farmers to protect crops and increase agricultural productivity. Technologies: Python, TensorFlow, Flask, PyCharm, PlantDoc Dataset, Mobile Responsiveness, CNN, Image Classification`
    },
    {
      id: 3,
      title: "Typing Test",
      description: "A typing test web application that helps users improve their typing speed and accuracy.",
      githubLink: "https://github.com/pranitha2021/Typing-Test.git"
    },
    {
      id: 4,
      title: "Crypto Tracker",
      description: "A ReactJS-based Crypto Tracker to monitor cryptocurrency prices in real-time.",
      githubLink: "https://github.com/pranitha2021/CryptoTraker.git"
    }
  ];

  const openProject = (project) => {
    if (project.githubLink) {
      window.open(project.githubLink, "_blank");
    } else {
      setSelectedProject(project);
    }
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <ProjectsSection id="projects">
      <h2><b>PROJECTS</b></h2>
      {projectList.map((project) => (
        <div key={project.id} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <button
            className="view-button"
            onClick={() => openProject(project)}
          >
            View Project
          </button>
        </div>
      ))}

      {selectedProject && !selectedProject.githubLink && (
        <ModalOverlay>
          <ModalContent>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.details}</p>
            <button onClick={closeProject}>Back</button>
          </ModalContent>
        </ModalOverlay>
      )}
    </ProjectsSection>
  );
};

export default Projects;
