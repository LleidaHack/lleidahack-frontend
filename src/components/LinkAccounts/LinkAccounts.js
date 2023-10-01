import React from "react";

const LinkAccounts = ({ hacker }) => {
  let is_git_valid =
    hacker.github && hacker.github.startsWith("https://github.com/");
  let is_lin_valid =
    hacker.linkedin &&
    hacker.linkedin.startsWith("https://www.linkedin.com/in/");
  if (!is_git_valid && !is_lin_valid) return;

  return (
    <div className="container m-auto p-0">
      <div className="row join-container p-bg-grey p-3 text-center m-auto mt-5">
        <div className="col-8 col-sm-8 align-middle text-start m-auto pe-0">
          Coneix aquest/a hacker:
        </div>
        <div className="col-4 col-sm-4 m-auto px-0">
          {is_git_valid && (
            <a href={hacker.github || "#"} target="_blank" className="text-light">
              <i className="bi bi-github fa-2x me-3" />
            </a>
          )}
          {is_lin_valid && (
            <a href={hacker.linkedin || "#"} target="_blank" className="text-light">
              <i className="bi bi-linkedin fa-2x me-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkAccounts;
