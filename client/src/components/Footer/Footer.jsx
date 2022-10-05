import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
    return (
    <div className="footer">
    <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
            Hey, my name is Tanishq Chawande. I am a Full-Stack Developer
        </Typography>

        <Link to="/contact" className="footerContactBtn">
            <Typography>Contact Us</Typography>
        </Link>
    </div>
    <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Tanishq5" target="black">
            <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/tanishq-chawande/" target="black">
            <BsLinkedin />
        </a>
    </div>
    </div>
);
};

export default Footer;