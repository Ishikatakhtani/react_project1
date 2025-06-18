

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-heading">Company</h3>
          <p>About Us</p>
          <p>Services</p>
          <p>Careers</p>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Contact</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +911234567899</p>
          <p>Location: XYZ, India</p>
        </div>
        {/* <div className="footer-column">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div> */}
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
