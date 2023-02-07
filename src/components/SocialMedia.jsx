import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaTumblr } from "react-icons/fa";

function SocialMedia({ color }) {
  return (
    <div>
      <a
        href="https://twitter.com/compose/tweet"
        target="_blank"
        className="btn me-1 text-white"
        style={{ backgroundColor: `${color}` }}
      >
        <BsTwitter />
      </a>
      <a
        href="https://www.tumblr.com"
        target="_blank"
        id="tweet-quote"
        className="btn text-white"
        style={{ backgroundColor: `${color}` }}
      >
        <FaTumblr />
      </a>
    </div>
  );
}

export default SocialMedia;
