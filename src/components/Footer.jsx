import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants/index.js";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className=" mb-12">
      <div className="flex items-center justify-center gap-8">
        <a
          href="https://github.com/AkshaySinghKanawat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub fontSize={30} className="hover:opacity-80"/>
        </a>

        <a
          href="https://www.linkedin.com/in/akshay-singh-kanawat/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin fontSize={30} className="hover:opacity-80"/>
        </a>

        <a
          href="https://x.com/hereakshaysingh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter fontSize={30} className="hover:opacity-80"/>
        </a>
      </div>
      <p className="mt-8 text-center tracking-tighter text-neutral-500">
        &copy;AkshaySinghKanawat. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
