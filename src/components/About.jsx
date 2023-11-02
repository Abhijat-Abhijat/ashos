import React from "react";
import "../styles/About.scss";
import "../styles/Colors.scss";
const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "100px 0",
};

const cardStyle = {
  // border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "20px",
  margin: "0 20px",
  // boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  width: "50%",
  color: "#bac2de",
  // textAlign: "justify",
  fontFamily: "sans-serif",
  fontSize: "20px",
};

const creatorListStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  borderRadius: "8px",
  marginTop: "20px",
  border: "1px solid #ccc",
};

function About() {
  const creators = [
    {
      name: "Abhijat",
      description: "Creator of ASH OS",
      github: "https://github.com/Abhijat-Abhijat",
    },
    {
      name: "Himanshu",
      description: "Creator of ASH OS",
      github: "https://github.com/ghostx31",
    },
    {
      name: "Sourabh",
      description: "Creator of ASH OS",
      github: "https://github.com/Abhijat-Abhijat",
    },
  ];

  return (
    <div style={container} className="about">
      <div style={cardStyle}>
        <h1>About ASH OS</h1>
        <p>
          Our project aims to develop ASH OS, a user-friendly operating system
          that serves as a superior alternative to existing closed-source and
          open-source operating systems. It is designed to be lighter on
          resources while meeting the diverse needs of end users.
        </p>
        <p>
          ASH OS was conceived with the goal of improving battery life on
          laptops, addressing the concerns of many Windows users. Leveraging the
          flexibility of the Linux kernel, our team, comprised of creators
          Abhijat, Himanshu, and Sourabh, sought to enhance battery performance
          on similar devices. Additionally, we aimed to minimize or eliminate
          identified shortcomings in existing operating systems.
        </p>
        <p>
          Our operating system, ASH OS, tackles key challenges such as
          Compatibility, Program Support, Customization, Resource usage, and
          Functionality. Moreover, ASH OS provides several advantages including
          enhanced Performance, Security, and Open Source functionality.
        </p>
        <div style={creatorListStyle}>
          {creators.map((creator, index) => (
            <div key={index} style={cardStyle}>
              <h3>{creator.name}</h3>
              <h4>{creator.description}</h4>
              <div style={creatorListStyle}>
                <a href={creator.github}>
                  <h4>Connect</h4>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
