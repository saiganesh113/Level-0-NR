/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                // href=""
                target="_blank"
              >
                  USCL 
              </a>
            </li>
            <li>
              {/* <a
                href=""
                target="_blank"
              >
                About Us
              </a> */}
            </li>
            <li>
              {/* <a
                href=""
                target="_blank"
              >
                Blog
              </a> */}
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed {" "}
          <a
            // href=""
            target="_blank"
          >
            &
          </a>
           Coded by{" "}
          <a
            // href=""
            target="_blank"
          >
            USCL
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
