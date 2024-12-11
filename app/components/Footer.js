import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              Welcome to our blogy! We share insightful articles on various
              topics. stay tuned for updates and feel free to share your
              thoughts.
            </p>
          </div>
          <div className="col-lg-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-dark">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-dark">
                  About
                </Link>
              </li>{" "}
              <li>
                <Link href="/contact" className="text-dark">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://instgram.com" className="text-dark">
                  Instgram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" className="text-dark">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://x.com" className="text-dark">
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-light">
        © 2024 Blogy. All rights reserved
      </div>
    </footer>
  );
}
