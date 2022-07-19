import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <p>
        Created by <a href="https://www.pedroyan.com/">pedroYan</a> {year} | All
        rights reserved
      </p>
    </div>
  );
}
