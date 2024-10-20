import React from 'react';

function Footer() {
  return (
    <footer className="c-space pt-7 pb-7 boder-t border-black-300 ">
      <div>
        <h1 className="text-white-500 font-semibold  text-6xl md:text-9xl flex justify-center py-4">
          Kiam.
        </h1>
      </div>

      <div className="flex justify-between flex-wrap gap-5">
        <div className="text-white-500 flex gap-2 ">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex gap-3">
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
          <div className="social-icon">
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="w-1/2 h-1/2"
            />
          </div>
          <div className="social-icon">
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-1/2 h-1/2"
            />
          </div>
        </div>

        <p className="text-white-500">
          ©️ 2024 Kiam. All rights reserved{' '}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
