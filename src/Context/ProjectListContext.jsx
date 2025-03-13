import { createContext } from "react";
import Pathprovider from "../image/Projects/Path Provider.jpg";
import FacialExpressionDetection from "../image/Projects/Facial Expression Detection.jpg";
import JavascriptProjects from "../image/Projects/Javascript Projects.jpg";
import AuthGuardCore from "../image/Projects/AuthGuard Core.jpg";
import chromeExtension from "../image/Projects/Chrome Extension.png";
import pp1 from "../image/Project_images/pp1.jpg";
import pp2 from "../image/Project_images/pp2.jpg";
import pp3 from "../image/Project_images/pp3.jpg";
import pp4 from "../image/Project_images/pp4.jpg";
import pp5 from "../image/Project_images/pp5.jpg";
import pp6 from "../image/Project_images/pp6.jpg";
import fd1 from "../image/Project_images/fd1.jpg";
import fd2 from "../image/Project_images/fd2.jpg";
import fd3 from "../image/Project_images/fd3.jpg";
import jsp1 from "../image/Project_images/jsp1.jpg";
import jsp2 from "../image/Project_images/jsp2.jpg";
import jsp3 from "../image/Project_images/jsp3.jpg";
import jsp4 from "../image/Project_images/jsp4.jpg";
import jsp5 from "../image/Project_images/jsp5.jpg";
import jsp6 from "../image/Project_images/jsp6.jpg";
import ceVideo from "../videos/Color Picker - Chrome Extension.mp4";

const ProjectsListContext = createContext({});

const ProjectsListProvider = ({ children }) => {
  const ProjectsList = [
    {
      name: "Path Provider",
      img: Pathprovider,
      brief:
        "This web application displays nearby locations of university or place. Users can scan a QR code to access the site, view maps, and explore location details.",
      url: "https://hrsh-sidhpuria.github.io/Path-Provider/",
      isUrl: true,
      isDetails: true,
      gitLink: "https://github.com/Hrsh-Sidhpuria/Path-Provider",
      isGitLink: true,
      detail_decs:
        "This project is a web application that provides users with a map displaying all the locations nearby a particular university or any other place. Users can scan a QR code to navigate to the website where they can view maps and other details of that place. The application is built using HTML, CSS, JavaScript, and Python. The Folium library in Python is used for creating the interactive maps.",
      technology: ["HTML", "CSS", "JavaScript", "Python", "Folium"],
      features: [
        "Display dynamic maps with locations nearby a specified place.",
        "Search for places and universities.",
        "Interactive and user-friendly interface.",
        "Responsive design.",
        "Navigate to the map by scanning a QR code.",
      ],
      ImagesAvailable: true,
      Images: [Pathprovider, pp1, pp2, pp3, pp4, pp5, pp6],
      videoAvailable: false,
    },
    {
      name: "Javascript Projects",
      img: JavascriptProjects,
      brief:
        "A JavaScript mini-projects includes small practical projects, such as tic tac toe game with single player(minimax algorithm) and multiplayer feature,to-do lists, Random Color Generator, Text Converter,Text to speach Converter,text searching and highlighting and Weather Forecast. This helps me practice core JavaScript, DOM manipulation, and APIs while building useful, hands-on applications.",
      url: "https://hrsh-sidhpuria.github.io/javascript-projects/",
      isUrl: true,
      isDetails: true,
      gitLink: "https://github.com/Hrsh-Sidhpuria/javascript-projects",
      isGitLink: true,
      detail_decs:
        "I have built a collection of JavaScript mini-projects to enhance my skills in core JavaScript, DOM manipulation, algorithms, and API integration. This collection includes a Tic-Tac-Toe game with both single-player mode, where an AI opponent is powered by the Minimax algorithm, and a multiplayer mode for two users. I also developed a To-Do List application that allows users to add, edit, mark as completed, and delete tasks, with data persistence using localStorage. Another project is a Random Color Generator, which creates random colors with their HEX and RGB values, useful for designers and developers. Additionally, I built a Text Converter, which enables users to format text by converting it to uppercase, lowercase, or capitalizing sentences, making text editing more efficient. My Text-to-Speech Converter leverages the Web Speech API to transform written text into spoken words, enhancing accessibility. I also created a Text Searching & Highlighting tool that allows users to search for specific words within a paragraph and highlights them instantly. Through these projects, I have practiced JavaScript fundamentals, DOM manipulation, event handling, asynchronous programming, algorithm implementation, API integration, and localStorage for data persistence. These projects have not only helped me strengthen my JavaScript expertise but have also provided hands-on experience in building practical, interactive applications that solve real-world problems.",
      technology: ["JavaScript", "html", "css"],
      features: [
        "Tic-Tac-Toe (Single & Multiplayer): Play against an AI (Minimax algorithm) or challenge a friend.",
        "To-Do List: Add, edit, complete, and delete tasks with localStorage for data persistence.",
        "Random Color Generator: Instantly generate random HEX and RGB colors for design inspiration.",
        "Text Converter: Convert text to uppercase, lowercase, sentence case, and more for easy formatting.",
        " Text-to-Speech Converter: Uses the Web Speech API to transform written text into speech.",
        "Text Searching & Highlighting: Find and highlight words or phrases dynamically in a paragraph.",
      ],
      ImagesAvailable: true,
      Images: [jsp1, jsp2, jsp3, jsp4, jsp5, jsp6],
      videoAvailable: false,
    },
    {
      name: "Facial Expression Detection",
      img: FacialExpressionDetection,
      brief:
        " face expression detection system built using Python, OpenCV, Keras, and TensorFlow. The system is capable of detecting and classifying facial expressions in real-time.",
      url: "",
      isUrl: false,
      isDetails: true,
      gitLink: "https://github.com/Hrsh-Sidhpuria/Face-Detection-using-Python",
      isGitLink: true,
      detail_decs:
        "I have developed a Face Expression Detection System using Python, OpenCV, Keras, and TensorFlow, designed to detect and classify facial expressions in real-time. This system utilizes OpenCV for face detection, while Keras and TensorFlow power the deep learning model responsible for recognizing emotions such as happy, sad, angry, surprised, neutral, and more. The model is trained on a dataset of facial expressions, ensuring high accuracy in real-world scenarios. The system processes live video feed from a webcam, detects faces, and classifies expressions instantly, making it useful for applications in human-computer interaction, emotion analysis, and surveillance systems. By leveraging deep learning and computer vision, this project enhances my expertise in image processing, neural networks, and real-time AI applications.",
      technology: ["python"],
      features: [
        " Real-Time Face Detection",
        " Emotion Classification",
        "Deep Learning Model",
        " Live Webcam Integration",
        "Scalable & Customizable",
        "Potential Applications: Useful for human-computer interaction, emotion analysis, and AI-driven surveillance.",
      ],
      ImagesAvailable: true,
      Images: [FacialExpressionDetection, fd1, fd2, fd3],
      videoAvailable: false,
    },
    {
      name: "AuthGuard Core",
      img: AuthGuardCore,
      brief:
        "This project is a demonstration of authentication and authorization in ASP.NET Core MVC without using the ASP.NET Identity Framework or Entity Framework. The goal is to provide a custom implementation for handling user roles, claims, and permissions.",
      url: "",
      isUrl: false,
      isDetails: true,
      gitLink:
        "https://github.com/Hrsh-Sidhpuria/Authorication-and-Authentication-without-Identity-Framework",
      isGitLink: true,
      Images: [AuthGuardCore],
      detail_decs:
        "This project demonstrates a custom authentication and authorization system in ASP.NET Core MVC, built entirely without ASP.NET Identity Framework or Entity Framework. Instead of relying on built-in frameworks, it provides a lightweight and flexible user management solution, handling user authentication, roles, claims, and permissions through a custom implementation. The system securely manages user logins, assigns roles with specific permissions, and enforces access control using middleware-based authorization and claims-based identity management. It also features secure password hashing and salting, ensuring strong authentication security. By integrating a custom database solution, this project allows full control over how user data is stored and managed, making it adaptable to various requirements.",
      technology: ["Asp.net core MVC", "HTML", "CSS", "JavaScript"],
      features: [
        "Custom Authentication System",
        " Role-Based Access Control (RBAC)",
        "Claims-Based Authorization",
        "Secure Password Storage",
        " Middleware-Driven Authorization",
        "Database Flexibility",
      ],
      ImagesAvailable: false,
      videoAvailable: false,
    },
    {
      name: "Chrome Extension",
      img: chromeExtension,
      brief:
        "A Chrome extension is an extension of browser functionality, using web technologies such as HTML, CSS, and JavaScript. For instance, a Color Picker extension would allow users to pick colors from web pages, showing their codes, such as HEX, for easy use in design or development tasks.",
      url: "",
      isUrl: false,
      isDetails: true,
      gitLink: "https://github.com/Hrsh-Sidhpuria/Chrome-Extensions",
      isGitLink: true,
      detail_decs:
        "I have developed a Chrome Extension that enhances browser functionality using HTML, CSS, and JavaScript. One example is a Color Picker Extension, which allows users to effortlessly pick colors from any web page and instantly view their HEX, RGB, or HSL codes. This tool is particularly useful for designers, developers, and content creators, enabling them to extract and use colors without needing external software. The extension integrates seamlessly into the browser, providing a simple yet powerful UI for selecting and copying color codes. By leveraging Chrome’s Extension APIs, it ensures smooth interaction with web pages, making color selection a quick and efficient process.",
      technology: ["HTML", "CSS", "Javascript"],
      features: [
        " Easy Color Selection",
        "Displays Color Codes",
        "Seamless Integration",
        "Lightweight & Fast",
        "User-Friendly Interface",
        "Ideal for Designers & Developers",
      ],
      ImagesAvailable: true,
      Images: [chromeExtension],
      videoAvailable: true,
      video: ceVideo,
    },

    // {
    //   name: "",
    //   img: "",
    //   brief: "",
    //   url: "",
    //   isUrl: "",
    //   isDetails: "",
    //   gitLink: "",
    //   isGitLink: "",
    // detail_decs:"",
    //   technology:["","","",'',''],
    //   features:["","","","","",""],Images:[],
    // }
  ];

  // {
  //   name: "",
  //   img: "",
  //   brief: "",
  //   url: "",
  //   isUrl: "",
  //   isDetails: "",
  //   gitLink: "",
  //   isGitLink: "",
  // },

  return (
    <ProjectsListContext.Provider value={ProjectsList}>
      {children}
    </ProjectsListContext.Provider>
  );
};

export { ProjectsListContext, ProjectsListProvider };
