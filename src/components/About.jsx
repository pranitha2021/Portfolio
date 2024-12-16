import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  color: black;
  padding: 20px;
  text-align: center;
  background-color:rgb(126, 160, 197);

  h2 {
    color: white;
  }
    h4{
    color: white;}

  p {
    margin-top: 10px;
    color: #555;
  }

  li {
    list-style-type: none;
  }
`;

const CardWrapper = styled.div`
 background-color:rgb(126, 160, 197);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  display: inline-block;
  vertical-align: top;
`;

const Title = styled.h3`
  color: #333;
  margin-bottom: 10px;
  font-size: 1.5em;
`;

const Content = styled.div`
  color: #555;
  font-size: 1em;
  line-height: 1.6;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin: 8px 0;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <h2><b>ABOUT ME</b></h2>
      <h4><i>
        Hi! I'm <em style={{ color: "#2e3a47" }}>Pranitha Nuthalapathi</em>
        , a passionate and dedicated computer science enthusiast. <br />
        I recently graduated with a <b>Bachelor's in Technology (B.Tech) in Computer Science & Engineering from Gandhi Institute of Technology and Management (GITAM)</b>,<br />
        Visakhapatnam, where I earned a <b>GPA of 7.72.</b> My academic journey has equipped me with a strong foundation in computer science, programming, and problem-solving, and <br />
        I'm excited to apply this knowledge in the tech industry.
        I possess strong technical skills in Python, Flask, SQL, React.js, HTML, and CSS, and I am passionate about<br/> Machine Learning. I also have experience working with Agile Methodologies to ensure efficient and timely project delivery. Besides my technical knowledge, I possess<br/> strong soft skills in leadership, collaboration, decision-making, and communication.
        </i></h4>
      <CardWrapper>
      <Card>
          <Title>Education</Title>
          <Content>
            <p><strong>Bachelors of Technology</strong></p>
            <p>University: Gandhi Institute of Technology and Management (GITAM) College, Visakhapatnam</p>
            <p>Computer Science & Engineering (B.Tech) - GPA: 7.72</p>
            <p>2019 - 2023</p>
            <p><strong>Higher Secondary Education</strong></p>
            <p>College: Sri Chaitanya Junior College, Visakhapatnam</p>
            <p>MPC (Intermediate) - GPA: 8.61</p>
            <p>2017</p>
            <p><strong>Primary Education</strong></p>
            <p>School: Vignan Vidyalayam School, Visakhapatnam</p>
            <p>CBSE - GPA: 9.2</p>
          </Content>
        </Card>

      <Card>
        <Title>Technical Skills</Title>
        <Content>
          <List>
            <ListItem>Python</ListItem>
            <ListItem>SQL</ListItem>
            <ListItem>React.js, HTML, CSS</ListItem>
            <ListItem>Agile Methodologies</ListItem>
            <ListItem>MS Office</ListItem>
            <ListItem>Flask</ListItem>
            <ListItem>Machine Learning</ListItem>
            <ListItem>.NET C#</ListItem>
          </List>
        </Content>
      </Card>

      <Card>
          <Title>Soft Skills</Title>
          <Content>
            <List>
              <ListItem>Leadership</ListItem>
              <ListItem>Verbal & Written Communication</ListItem>
              <ListItem>Collaboration and Team Player</ListItem>
              <ListItem>Decision-Making Skills</ListItem>
            </List>
          </Content>
        </Card>

        <Card>
          <Title>Personal Information</Title>
          <Content>
            <p><strong>Date of Birth:</strong> 1st February 2002</p>
            <p><strong>Gender:</strong> Female</p>
            <p><strong>Marital Status:</strong> Single</p>
          </Content>
          <Title>Hobbies</Title>
          <Content>
            <List>
              <ListItem>Reading books</ListItem>
              <ListItem>Watching Movies</ListItem>
              <ListItem>Cooking</ListItem>
              <ListItem>DIY/CRAFT STUFF</ListItem>
            </List>
          </Content>
        </Card>
        </CardWrapper>

    </AboutSection>
  );
};

export default About;