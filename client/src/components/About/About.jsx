
import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ about }) => {
    return (
    <div className="about">
        <div className="aboutContainer">
            <Typography>When you have a dream, you've got to grab it and never let go.</Typography>
        </div>
        <div className="aboutContainer2">
        <div>
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQH9JCALZhZiKQ/profile-displayphoto-shrink_800_800/0/1615959318425?e=1670457600&v=beta&t=yrggVZRUzNhy59cQl84P3hxl0TEzvTUQRc5tgDs6oMg" alt="Tanishq" className="aboutAvatar" />

            <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
            >
            Tanishq Chawande
            </Typography>

            <Typography>Full Stack Developer</Typography>
        </div>

        <div>
            <Typography
                style={{
                wordSpacing: "5px",
                lineHeight: "50px",
                letterSpacing: "5px",
                textAlign: "right",
            }}
            >
            I love to build efficent and logical backend using Node js I also design and code attractive frontend using React I use MongoDB for database Express and Node js as Backend and react for frontend
            </Typography>
        </div>
        </div>
    </div>
);
};

export default About;