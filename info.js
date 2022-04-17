let info = {
  name: "Wildan Hakim",
  logo_name: "WHKM",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false,
    },
  },
  description: "Hey there, I'm Wildan Hakim, I'm a Frontend Developer",
  links: {
    linkedin: "https://www.linkedin.com/in/wildan-hakim/",
    github: "https://github.com/wildanhkm",
    resume: "https://drive.google.com/file/d/1W0pzOo1Gb-W70BYKehOfZ4qaJt7m1_7O/view?usp=sharing",
  },
  education: [
    {
      name: "STIKOM Poltek Cirebon",
      place: "Cirebon, Indonesia",
      date: "Aug 2016 - April 2021",
      degree: "Bachelor in Informatics Engineering",
      gpa: "3.6/4.0",
      description: "Studied algorithm, DSA, Web Programming, Database, Android Programming, and Networking",
      skills: ["Software Engineering", "Web Programming", "Database", "Android Programming", "Networking"],
    },
  ],
  experience: [
    {
      name: "PT. cmlabs Indonesia Digital",
      place: "Malang, Indonesia",
      date: "Dec 2021 - Present",
      position: "Frontend Web Developer",
      description: "",
      skills: ["Laravel", "ReactJS", "NuxtJS", "REST API", "JSON", "Webpack", "TypeSript", "Git", "ANTD UI Components", "Tailwind CSS"],
    },
    {
      name: "Freelance Frontend Dev",
      place: "Indonesia",
      date: "Jan, 2021 - Dec, 2021",
      position: "Frontend Developer",
      description: "Creating apps and web UI, creating interactive components, and frontend technology research",
      skills: ["HTML5", "CSS3", "Javascript", "Illustrator"],
    },
    {
      name: "CV. Akses Digital",
      place: "Cirebon, Indonesia",
      date: "Nov 2020 - Jan 2021",
      position: "Full Stack Web Developer",
      description: "Developing, maintaining, and creating interactive websites using Laravel",
      skills: ["Javascript", "Laravel", "Bootstrap", "jQuery", "webpack", "Git"],
    },
  ],
  skills: [
    {
      title: "Language",
      info: ["Javascript", "TypeScript", "PHP"],
      icon: "fa fa-code",
    },
    {
      title: "Frontend",
      info: ["HTML5", "CSS3", "Bootstrap 5", "Tailiwind CSS"],
      icon: "fa fa-cubes",
    },
    {
      title: "Web Technologies",
      info: ["Nuxt", "React", "Node"],
      icon: "fas fa-laptop-code",
    },
    {
      title: "Search Engine Optimization",
      info: ["GSC", "Core Web Vitals", "GT Metrics"],
      icon: "fas fa-search",
    },
  ],
  portfolio: [
    {
      name: "cmlabs Analytics 3.0",
      pictures: [
        {
          img: require("./src/assets/portfolio/v3/under-construction.png"),
        },
      ],
      technologies: ["Nuxt", "Vuex", "Git", "Tailwind", "GCP", "gRPC", "REST API"],
      category: "Web App",
      date: "Mar, 2022 - Present",
      description: "SEO analytic tools built with NuxtJS, Vuex, Tailwind, GCP, gRPC, and REST API",
    },
    {
      name: "prospeku.com SEO Improvement",
      pictures: [
        {
          img: require("./src/assets/portfolio/prospeku/prospeku.jpeg"),
        },
      ],
      technologies: ["React", "LESS", "Git", "Nginx", "Azure"],
      category: "Web App",
      date: "Dec, 2021 - Mar, 2022",
      visit: "https://prospeku.com",
      description: "SEO improvement for prospeku.com, a website for finding houses, apartments, offices, and other commercial properties in Indonesia. The website is developed using React, Node, and Nginx. The website is hosted on Azure, and the website is optimized using Core Web Vitals.",
    },
    {
      name: "cmlabs.co Revamp",
      pictures: [
        {
          img: require("./src/assets/portfolio/cmlabs-revamp/homepage.jpeg"),
        },
        {
          img: require("./src/assets/portfolio/cmlabs-revamp/blog.jpeg"),
        },
        {
          img: require("./src/assets/portfolio/cmlabs-revamp/demo.jpeg"),
        },
      ],
      technologies: ["HTML", "CSS", "JavaSript", "Bootstrap 5", "Laravel", "MySQL", "Git"],
      category: "Web App",
      date: "Sep, 2021 - Dec, 2021",
      visit: "https://cmlabs.co/en-id",
      description: "Revamp main website of cmlabs.co using Laravel, HTML, CSS, Bootstrap 5, Git, and MySQL",
    },
    //   {
    //     name: "NuxtFlix.com",
    //     pictures: [
    //       {
    //         img: require("./src/assets/portfolio/myflix.com/1.png"),
    //       },
    //       {
    //         img: require("./src/assets/portfolio/myflix.com/2.png"),
    //       },
    //       {
    //         img: require("./src/assets/portfolio/myflix.com/3.png"),
    //       },
    //       {
    //         img: require("./src/assets/portfolio/myflix.com/4.png"),
    //       },
    //     ],
    //     technologies: ["Nuxt", "Css", "TMDB", "Heroku"],
    //     category: "Web App",
    //     date: "Mar, 2022 - 10 days",
    //     github: "https://github.com/mahy209/MyFlix-react-app.git",
    //     visit: "https://github.com/mahy209/MyFlix-react-app.git",
    //     description: "Nuxtflix.com is a movie search app built with NuxtJS and TMDB with search feature. Hosted on Heroku",
    //   },
    //   {
    //     name: "Todo App",
    //     pictures: [
    //       {
    //         img: require("./src/assets/portfolio/diary/1.png"),
    //       },
    //       {
    //         img: require("./src/assets/portfolio/diary/2.png"),
    //       },
    //       {
    //         img: require("./src/assets/portfolio/diary/3.png"),
    //       },
    //     ],
    //     technologies: ["vue", "vuex", "local storage"],
    //     category: "Web App",
    //     date: "Feb, 2022 - 10 days",
    //     github: "https://github.com/mahy209/notes-react-app.git",
    //     visit: "https://github.com/mahy209/notes-react-app.git",
    //     description: " Todo app built with VueJS, Vuex, and Local Storage ",
    //   },
  ],
};

export default info;
