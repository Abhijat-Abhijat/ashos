import React from "react";

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "100px 0",
  minHeight: "70vh",
};

function Docs() {
  // Define the GitHub wiki link
  const githubWikiLink = "https://github.com/ghostx31/ash-os/wiki";

  return (
    <div style={container} className="about">
      <a href={githubWikiLink} target="_blank" rel="noopener noreferrer">
        Go to GitHub Wiki
      </a>
    </div>
  );
}

export default Docs;
