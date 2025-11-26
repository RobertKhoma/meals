import React from "react";

function Futer() {
  return (
    <div>
      <footer className="page-footer green lighten-4">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a
              className="grey-text text-lighten-4 right"
              href=""
              rel="noreferrer"
              target="_blank"
            >
              Repo
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Futer;
