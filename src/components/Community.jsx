import React from "react";
import "../styles/Community.scss"; // Import your SCSS/CSS file for styles

function Community() {
  return (
    <div className="community-container">
      <div className="community-content">
        <h1>Community</h1>
        <p>
          ASH OS is a community-driven project. We welcome contributors to help
          us improve the project. Join our community to get started.
        </p>

        <div className="community-links">
          <div className="community-link">
            <h2>Discord</h2>
            <p>Join our Discord server.</p>
            <a
              href="https://discord.gg/6gTk4RqK"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
            </a>
          </div>

          <div className="community-link">
            <h2>GitHub</h2>
            <p>Contribute on GitHub.</p>
            <a
              href="https://github.com/ghostx31/ash-os"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
