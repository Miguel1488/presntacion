import {
  mobile,
  backend,
  creator,
  Bootstrap,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  ep,
  meta,
  global,
  veris,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "ep",
    icon: ep,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
];

const experiences = [
  {
    title: "Digital marketing",
    company_name: "Global Asesorias",
    icon: global,
    iconBg: "#383E56",
    points: [
      "Effective communication planning through digital channels to attract potential customers.",
      "Utilization of social media and advertising based on the company's professional services.",
      "I developed social media ads on platforms such as Facebook, Instagram, and LinkedIn, which I created with a team of 5 people under my supervision.",
    ],
  },
  {
    title: "Call Center",
    company_name: "Veris",
    icon: veris,
    iconBg: "#E6DEDD",
    points: [
      "Commercial activity in the preventive healthcare area offering family care plans.",

    ],
  },


];

const testimonials = [
  {
    testimonial:
      "Miguel is a great person who is very dedicated to his work, and has a great ability to solve problems, always being a fundamental help to his teammates. He has a good foundation in programming and leadership.",
    name: "Oswaldo Tipan",
    company: "Academlo",
    image: "oswaldo.jpeg",
  },
  {
    testimonial:
      "An exceptional teammate and an excellent human being, great at working in a team, displaying many soft skills that go hand in hand with his excellent technical abilities.",
    name: "Yandry Almaguer",
    company: "Academlo",
    image: "yandry.jpeg",
  },
  {
    testimonial:
      "Miguel has leadership skills, and I am confident that he is an excellent fit for team collaborations. His skills make him stand out significantly.",
    name: "Juan Bohorquez",
    company: "Academlo",
    image: "juan.jpeg",
  },
];

const projects = [
  {
    name: "useState Components",
    description:
      "An application that displays random quotes from authors, changes color on application load and on button click. Designed and developed for web and mobile versions using author quotes API. The application was built using React, and CSS.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://celadon-choux-01c167.netlify.app/",
  },
  {
    name: "Pokedex",
    description:
      "A application that displays different pokemons along with their respective descriptions. The Pokemon API was used to dynamically display and showcase the unique features of each Pokemon.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://kaleidoscopic-belekoy-dd3342.netlify.app/",
  },
  {
    name: "E-commerce",
    description:
      " A simulation of a technology product e-commerce infrastructure.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "Booststrap",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://merry-kataifi-99898a.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
