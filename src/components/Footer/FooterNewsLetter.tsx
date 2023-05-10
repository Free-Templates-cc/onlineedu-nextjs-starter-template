import React from "react";

type Props = {};

const FooterNewsLetter = (props: Props) => {
  return (
    <>
      <div className="footer-tittle2">
        <h4>Stay Updated</h4>
      </div>

      <div className="footer-form mb-50">
        <div id="mc_embed_signup">
          <form
            target="_blank"
            action="#"
            method="get"
            className="subscribe_form relative mail_part"
            noValidate={true}
          >
            <input
              type="email"
              name="EMAIL"
              id="newsletter-form-email"
              placeholder=" Email Address "
              className="placeholder hide-on-focus"
            />
            <div className="form-icon">
              <button
                type="submit"
                name="submit"
                id="newsletter-submit"
                className="email_icon newsletter-submit button-contactForm"
              >
                Subscribe Now
              </button>
            </div>
            <div className="mt-10 info"></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FooterNewsLetter;
