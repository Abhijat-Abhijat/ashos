import React, { useState } from "react";
import "../styles/Downloads.scss";
function Download() {
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleClick = () => {
    fetch("https://api.github.com/repos/ghostx31/ash-os/releases/latest")
      .then((response) => response.json())
      .then((data) => {
        const asset = data.assets.find(
          (asset) => asset.name === "ashos-04.02-x86_64.iso"
        );
        setDownloadUrl(asset.browser_download_url);
      });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "ashos.iso");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="download">
      <div className="downcard">
        <h1>DOWNLOAD THE ISO</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Download the ISO</h5>
            <p className="card-text">
              Download the ISO and burn it to a USB drive using Rufus or Etcher.
            </p>
            <button className="card-button" onClick={handleClick}>Fetch and Download</button>
            {downloadUrl && (
              <button onClick={handleDownload}>Download ashos.iso</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
