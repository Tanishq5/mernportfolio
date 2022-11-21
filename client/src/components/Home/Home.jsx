import "./Home.css"
import * as Three from "three"
import { useEffect } from "react";
import moonImage from "../../Images/moon.jpg"
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import {Typography} from "@mui/material";
import TimeLine from "../Timeline/Timeline";
import {
    SiCplusplus,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";

function Home({ timelines, youtubes, skills }) {
    useEffect(() => {
        const textureLoader = new Three.TextureLoader();

        const moonTexture = textureLoader.load(moonImage)
        const venusTexture = textureLoader.load(venusImage);
        const spaceTexture = textureLoader.load(spaceImage);

        const scene = new Three.Scene();
        const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const canvas = document.querySelector(".homeCanvas");
        const renderer = new Three.WebGLRenderer({canvas: canvas});

        const moonGeometry = new Three.SphereGeometry(2, 64, 64);
        const moonMaterial = new Three.MeshStandardMaterial({map: moonTexture});
        const moon = new Three.Mesh(moonGeometry, moonMaterial);

        const venusGeometry = new Three.SphereGeometry(3, 64, 64);
        const venusMaterial = new Three.MeshBasicMaterial({map: venusTexture});
        const venus = new Three.Mesh(venusGeometry, venusMaterial);

        const pointLight = new Three.PointLight(0xffffff, 1);
        pointLight.position.set(8,5,5);

        const pointLight2 = new Three.PointLight(0xffffff, 0.1);
        pointLight2.position.set(-8,-5,-5);

        scene.add(moon);
        scene.add(pointLight);
        scene.add(venus);
        scene.add(pointLight2)
        scene.background = spaceTexture;

        venus.position.set(8,5,5);
        camera.position.set(4,4,8);

        const constSpeed = 0.01;

        window.addEventListener("mousemove", (e) => {
            if(e.clientX <= window.innerWidth/2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed; 
            }

            if(e.clientX > window.innerWidth/2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed; 
            }

            if(e.clientY > window.innerHeight/2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed; 
            }

            if(e.clientY <= window.innerHeight/2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed; 
            }
        })

        const animate = () => {
            requestAnimationFrame(animate);
            moon.rotation.y += 0.001;
            venus.rotation.y += 0.001;
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);
        }

        animate();

        return window.addEventListener("scroll", (e) => {
            camera.rotation.z = window.scrollY * 0.001;
            camera.rotation.y = window.scrollY * 0.003;

            const skillsBox = document.getElementById("homeskillsBox");

            if(window.scrollY > 500) {
                skillsBox.style.animationName = "homeskillsBoxAnimationOn";
            }
            else {
                skillsBox.style.animationName = "homeskillsBoxAnimationOff";
            }
        })
    }, []);

    return(
        <div className="home">
            <canvas className="homeCanvas"></canvas>

            <div className="homeCanvasContainer">
                <Typography variant="h1" >
                    <p>T</p>
                    <p>A</p>
                    <p>N</p>
                    <p>I</p>
                    <p>S</p>
                    <p>H</p>
                    <p>Q</p>
                </Typography>

                <div className="homeCanvasBox">
                    <Typography variant="h2">DEVELOPER</Typography>
                </div>
                <div>
                    <a className="resume" href="https://drive.google.com/file/d/1T4yguDSA0CSl3qcIgHFRdUF7XwnmqRE3/view?usp=share_link" target="_blank">Resume</a>
                </div>
                <Link to="/projects">VIEW WORK</Link>
            </div>

            <div className="homeScrollBtn">
                <MouseOutlined />
            </div>

            {/* <div className="homeContainer">
                <Typography variant="h3">Timeline</Typography>
                <TimeLine timelines={timelines} />
            </div> */}

            <div className="homeSkills">
                <Typography variant="h3">Skills</Typography>

                <div className="homeCubeSkills">
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                        <img src={skills.image1.url} alt="Face1"/>
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                        <img src={skills.image2.url} alt="Face2"/>
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                        <img src={skills.image3.url} alt="Face3"/>
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                        <img src={skills.image4.url} alt="Face3"/>
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                        <img src={skills.image5.url} alt="Face4"/>
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                        <img src={skills.image6.url} alt="Face5"/>
                    </div>
                </div>
                <div className="cubeShadow"></div>
                <div className="homeskillsBox" id="homeskillsBox">
                <SiReact />
                <SiJavascript />
                <SiMongodb />
                <SiNodedotjs />
                <SiExpress />
                <SiCss3 />
                <SiHtml5 />
                <SiThreedotjs />
                </div>
            </div>
        </div>
    )
}

export default Home;