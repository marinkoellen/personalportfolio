
import nibbleVideo from '../../images/Nibble.mp4'
import nibblebrand from '../../images/Nibble_White_Transparent.png'

import comparalistVideo from '../../images/Comparalist.mp4'
import comparalistbrand from '../../images/comparalist_logo.PNG'

import ellenVideo from '../../images/Ellen.mp4'
import ellenbrand from '../../images/ellen_logo.PNG'


import shecodesnewsVideo from '../../images/shecodesnews.mp4'
import shecodesnews_brand from '../../images/shecodesnews_logo.PNG'




export const ProjectOne = {
    video_source: nibbleVideo,
    logo_source: nibblebrand,
    containsReact: true,
    reactGithub: "https://github.com/marinkoellen/crowdfunding",
    containsDjango: true,
    djangoGithub: "https://github.com/marinkoellen/drf-proj/",
    containsCSS: false,
    cssGithub: "",
    project_blurb: "Nibble is a web app of a mock crowdfunding site that is created specifically with food in mind. Unlike other crowdfunding sites which allow creators from any field to start a campaign, all projects on Nibble are related to food. It was created using React & Django.",
    project_id: 1,
    websiteURL: "https://murmuring-dusk-87533.herokuapp.com/"

};



export const ProjectTwo = {
    video_source: comparalistVideo,
    logo_source: comparalistbrand,
    containsReact: true,
    reactGithub: "https://github.com/SheCodesAustralia/plus-perth-2020-hello-world-react",
    containsDjango: true,
    djangoGithub: "https://github.com/SheCodesAustralia/plus-perth-2020-hello-world-drf",
    containsCSS: false,
    cssGithub: "",
    project_blurb: "Comparalist is a shopping list web app designed for comparing items. It is targeted for users who require a way to easily compare and contrast things on the go. Mobile functionality was very important and therefore website responsiveness was prioritised. It was created using React & Django and stores images using an AWS S3 container",
    project_id: 2,
    websiteURL: "https://glacial-badlands-43820.herokuapp.com/"
};



export const ProjectThree = {
    video_source: ellenVideo,
    logo_source: ellenbrand,
    containsReact: false,
    reactGithub: "",
    containsDjango: false,
    djangoGithub: "",
    containsCSS: true,
    cssGithub: "https://github.com/marinkoellen/marinkoellen.github.io",
    project_blurb: "This was my first personal portfolio website I developed as part of the She-Codes Plus program. It was built using HTML and CSS only and taught me all about the importance of semantic HTML.",
    project_id: 3,
    websiteURL: "https://marinkoellen.github.io/ellen_home.html"
};



export const ProjectFour = {
    video_source: shecodesnewsVideo,
    logo_source: shecodesnews_brand,
    containsReact: false,
    reactGithub: "",
    containsDjango: true,
    djangoGithub: "https://github.com/marinkoellen/django-news-project",
    containsCSS: true,
    cssGithub: "https://github.com/marinkoellen/django-news-project",
    project_blurb: "This is a mock restaurant review news website for the people of Perth. This website allows logged in users to read and like restaurant reviews or post their own. It is built using Django and HTML/CSS.",
    project_id: 4,
    websiteURL: ""
};

