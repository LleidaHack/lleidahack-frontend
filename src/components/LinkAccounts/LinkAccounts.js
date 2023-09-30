import React from "react";

const LinkAccounts = ({ hacker }) => {
  if (!hacker.linkedin && !hacker.github) return;
  if (hacker.linkedin === "string" && hacker.github === "string") return;

  return (
    <div className="container m-auto p-0">
      <div className="row join-container p-bg-grey p-3 text-center m-auto mt-5">
        <div className="col-8 col-sm-8 align-middle text-start m-auto pe-0">
          Coneix aquest/a hacker:
        </div>
        <div className="col-4 col-sm-4 m-auto px-0">
          {(hacker.github && hacker.github.startsWith("https://github.com/")) && (
            <a href={hacker.github || "#"} className="text-light">
              <i className="bi bi-github fa-2x me-3" />
            </a>
          )}
          {(hacker.linkedin && hacker.linkedin.startsWith("https://www.linkedin.com/in/")) && (
            <a href={hacker.linkedin || "#"} className="text-light">
              <i className="bi bi-linkedin fa-2x me-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkAccounts;
