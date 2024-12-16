import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa"; 

const ContactSection = styled.section`
  padding: 40px 20px;
  background: rgb(9, 84, 134);
  color: white;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1);
  animation: fadeIn 2s ease-out; /* Fade in animation for section */

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    animation: slideUp 1.5s ease-in-out;
  }

  p {
    font-size: 1.2rem;
    margin: 10px 0;
    animation: fadeIn 1s ease-in-out;
  }

  .social-links {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
    animation: fadeIn 2s ease-in-out;
  }

  a {
    color: #f4f4f4;
    font-size: 1.8rem;
    transition: color 0.3s ease;
    &:hover {
      color: #ffcc00; /* Yellow color on hover */
      transform: scale(1.2); /* Scale effect on hover */
    }
  }

  .thank-you {
    font-size: 1rem;
    margin-top: 30px;
    animation: fadeIn 2.5s ease-in-out;
    color: #ccc;
  }

  /* Fade In Animation */
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* Slide Up Animation */
  @keyframes slideUp {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <h2>Contact</h2>
      <p>Email: pranithanuthalapathi@gmail.com</p>
      {/* <p>
        LinkedIn:{" "}
        <a href="https://in.linkedin.com/in/pranitha-nuthalapati" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> Your LinkedIn
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/pranitha2021" target="_blank" rel="noopener noreferrer">
          <FaGithub /> Your GitHub
        </a>
      </p> */}
      
      <div className="social-links">
        <a href="https://in.linkedin.com/in/pranitha-nuthalapati" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/pranitha2021" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>

      <p className="thank-you">Thank you for visiting my portfolio!</p>
    </ContactSection>
  );
};

export default Contact;
