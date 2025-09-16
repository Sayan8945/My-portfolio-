import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a className="social-icon" href="https://github.com/Sayan8945">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/sayansarkar8945/">
          <span><FaLinkedin className="size-6 bg-white"/></span>
          </a>
        </div>
        <a className="social-icon" href="https://www.instagram.com/itz_error404__?igsh=MWVsM29pYXdnZ2p5MA==">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2025 Sayan Sarkar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
