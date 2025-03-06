import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer id="footer" className="footer">
        <div className="container">
          <div className="copyright text-center ">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">Manpreet Singh</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>
          <div className="social-links d-flex justify-content-center">
          <a 
      href="https://www.linkedin.com/in/er-manpreet-singh-0a5a7a192" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="linkedin"
    ><i className="bi bi-linkedin" />
            </a>
          </div>
          <div className="credits">
            Designed by <Link to="/">Manpreet Singh</Link>
          </div>
        </div>
      </footer>
      

    );
  }
  