/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Unaib",
  image: require("./assets/images/logo-sec.png"),
  title: "Hi all, I'm Unaib",
  subTitle: emoji(
    "Creative Designer & Frontend Developer crafting captivating digital experiences. Proficient in JavaScript, React.js, Node.js, Figma, Photoshop, Illustrator and more. Let's build something extraordinary together! 🎨💻"
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "unaiburrehman31@gmail.com",
  behance: "https://www.behance.net/unaiburrehman",
  linkedin: "https://www.linkedin.com/in/unaib-ur-rehman31/",
  github: "https://github.com/unaib-ur-rehman/",
  instagram: "https://www.instagram.com/unaiburrehman31/",
  stackoverflow: "https://stackoverflow.com/users/23595049/rehman-unaib",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER, UX ARCHITECT AND JAVASCRIPT DEVELOPER.",
  skills: [
    emoji(
      "⚡ I value simple content structure, clean design patterns, and thoughtful interactions."
    ),
    emoji(
      "⚡ I like to code things from scratch, and enjoy bringing ideas to life in the browser."
    ),
    emoji(
      "⚡ Craft engaging and intuitive user experiences for mobile & web applications."
    ),
    emoji(
      "⚡ Develop interactive Front end / User Interfaces for your web applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: require("./assets/svg/html.png")
    },
    {
      skillName: "css3",
      fontAwesomeClassname: require("./assets/svg/css.png")
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: require("./assets/svg/javascript.png")
    },
    {
      skillName: "figma",
      fontAwesomeClassname: require("./assets/svg/figma.png")
    },
    {
      skillName: "photoshop",
      fontAwesomeClassname: require("./assets/svg/photoshop.png")
    },
    {
      skillName: "illustrator",
      fontAwesomeClassname: require("./assets/svg/illustrator.png")
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: require("./assets/svg/react.png")
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: require("./assets/svg/nextjs.png")
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: require("./assets/svg/flutter.png")
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: require("./assets/svg/node.png")
    },
    {
      skillName: "expressjs",
      fontAwesomeClassname: require("./assets/svg/expressjs.png")
    },
    {
      skillName: "docker",
      fontAwesomeClassname: require("./assets/svg/docker.png")
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Govt. College University, Faislabad",
      logo: require("./assets/images/gcuf.png"),
      subHeader: "Bachelors of Science in Software Engineering",
      duration: "September 2019 - April 2023"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "UI/UX Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Graphics & Design",
      progressPercentage: "87%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Linked Matrix",
      companylogo: require("./assets/images/lm.png"),
      date: "June 2023 – Present",
      desc: "Currently working as a fullstack python / django developer",
      cover: require("./assets/images/lm.png"),
      descBullets: [
        "Worked individually and collaboratively on projects centered around user research, interactive design and rapid prototyping.",
        "Collaborated with cross-functional teams and worked on various technologies including React, Nextjs, Flutter. Worked on multiple Javascript Based Projects. Developed and maintained the company's website and web applications.",
        "collaborated with a team of developers in an Agile environment to deliver high-quality solutions and bring designs to life"
      ]
    },
    {
      role: "Lead Generation Expert",
      company: "Elite Techlogix",
      companylogo: require("./assets/images/elite-logo.png"),
      date: "August 2022 – May 2023",
      desc: "Responsible for generating High Quality Leads each day to meet the target Worked Collaboratively with others to meet objectives and consistently achieved weekly targets.",
      descBullets: [
        "Responsible for generating High Quality Leads each day to meet the target",
        "Worked Collaboratively with others to meet objectives and consistently achieved weekly targets."
      ]
    }
    //   {
    //     role: "Software Engineer Intern",
    //     company: "Airbnb",
    //     companylogo: require("./assets/images/airbnbLogo.png"),
    //     date: "Jan 2015 – Sep 2015",
    //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //   }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle:
    "EXAMPLES OF SOME OF THE ACADEMIC AND SELF PROJECTS I HAVE PREPARED.",
  categories: [
    {
      name: "UI/UX Design",
      projects: [
        {
          image: require("./assets/images/TAP.png"),
          projectName: "TAP Store",
          projectDesc: "The Auto Parts. An Ecommerce autoparts store",
          footerLink: [
            {
              name: "Visit Website",
              url: "https://www.behance.net/gallery/178547107/Auto-Parts-Online-Store-Website"
            }
          ]
        },
        {
          image: require("./assets/images/IronClad.png"),
          projectName: "IronClaud Fitness",
          projectDesc:
            "Build strength and confidence at our gym with state-of-the-art equipment.",
          footerLink: [
            {
              name: "Visit Website",
              url: "https://www.behance.net/gallery/177901549/Gym-Fitness-Website-Landing-Page-Design"
            }
          ]
        },
        {
          image: require("./assets/images/StyleXpanse_.png"),
          projectName: "StyleXpanse",
          projectDesc: "A mobile app UI/UX design for an E-commerce store.",
          footerLink: [
            {
              name: "Visit Website",
              url: "https://www.behance.net/gallery/177902939/E-commerce-App-Design-iOS-Shopping-App"
            }
          ]
        },
        {
          image: require("./assets/images/Dahsboard.png"),
          projectName: "Student Management Dashboard",
          projectDesc: "A dashboard for managing students and their data.",
          footerLink: [
            {
              name: "Visit Website",
              url: ""
            }
          ]
        }
        // Add more projects here
      ]
    },
    {
      name: "Graphic Design",
      projects: [
        {
          image: require("./assets/images/NS.png"),
          projectName: "Natural Sense",
          projectDesc:
            "A Brand Identity for a Natural and Organic Products Company.",
          footerLink: [
            {
              name: "Visit Website",
              url: "https://www.behance.net/gallery/190916457/Organic-Natural-Logo-Design-Branding/"
            }
          ]
        },
        {
          image: require("./assets/images/silklocks.jpeg"),
          projectName: "Silk Locks",
          projectDesc: "A Brand Logo Design for a Hair Care Products Company.",
          footerLink: [
            {
              name: "Visit Website",
              url: ""
            }
          ]
        },
        {
          image: require("./assets/images/ASH.png"),
          projectName: "ASH Perfume",
          projectDesc: "A Brand Identity for a Perfume Company.",
          footerLink: [
            {
              name: "Visit Website",
              url: ""
            }
          ]
        }
        // Add more projects here
      ]
    }
    // {
    //   name: "Development",
    //   projects: [
    //     {
    //       image: require("./assets/images/IronClad.png"),
    //       projectName: "",
    //       projectDesc:
    //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //       footerLink: [
    //         {
    //           name: "Visit Website",
    //           url: "http://nextu.se/"
    //         }
    //       ]
    //     }
    //     // Add more projects here
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle:
    //     "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
    //     },
    //     {
    //       name: "Award Letter",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     },
    //     {
    //       name: "Google Code-in Blog",
    //       url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
    //     }
    //   ]
    // },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },
    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3354479734",
  email_address: "unaiburrehman31@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
