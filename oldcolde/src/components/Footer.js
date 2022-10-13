import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const footerNav = [
    {
      id: 0,
      title: "Home",
    },
    {
      id: 1,
      title: "About Us",
    },
    {
      id: 2,
      title: "Services",
    },
    {
      id: 3,
      title: "Professionals",
    },
    {
      id: 4,
      title: "Knowledge Bank",
    },
    {
      id: 5,
      title: "Community",
    },
    {
      id: 6,
      title: "Contact Us",
    },
  ];
  return (
    <div className="footerMainDiv">
      <div className="container pt-4 pb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="noMargin">
            {/* <Link className="footerLogoText" to="/">
              COLDCREW
            </Link> */}
            <img alt="Logo" src="assets/img/logo/logo.png" />
          </h1>
          <div className="d-none d-lg-flex">
            {footerNav.map((item, i) => {
              return (
                <label
                  key={i}
                  style={{ fontSize: "14px" }}
                  className="noMargin mr-4 footerNavLink"
                >
                  {item.title}
                </label>
              );
            })}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <i class="fab fa-facebook-f footerFacebookIcon mr-3"></i>
          <i class="fab fa-twitter footerTwitterIcon mr-3"></i>
          <i class="fab fa-linkedin-in footerLinkedinIcon"></i>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <p className="noMargin text-center footerLine">
            &copy; by PathCruise. Proudly created with wix.com
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
