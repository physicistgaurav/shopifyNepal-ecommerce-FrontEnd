import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Shopify Nepal is a leading e-commerce platform that provides
              entrepreneurs and businesses with the tools they need to establish
              and grow their online presence. With a strong focus on empowering
              local businesses, Shopify Nepal offers a user-friendly platform
              that enables entrepreneurs to easily create and customize their
              online stores. From product listings to secure payment processing
              and shipping integrations, Shopify Nepal provides a comprehensive
              solution to cater to the unique needs of Nepalese businesses. With
              a wide range of themes and apps, businesses can personalize their
              stores to reflect their brand identity and deliver a seamless
              shopping experience to their customers. Whether you are a startup
              or an established business, Shopify Nepal is committed to
              supporting your e-commerce journey with reliable customer support
              and educational resources. Join the thriving community of Nepalese
              entrepreneurs on Shopify Nepal and unlock your business online
              potential.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/src/assets/images/about.jpg"
              alt="About Us"
              height="400px"
              width="400px"
              style={{ width: "550px", height: "550px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
