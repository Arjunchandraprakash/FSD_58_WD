const resumeData = {
    "name": "Arjun",
    "email": "arjun@example.com",
    "phone": "+911234567890",
    "address": "123 Main Street, madras, TN, INDIA",
    "summary": "Experienced and versatile software engineer with a strong background in web development. Skilled in both front-end and back-end technologies. Passionate about creating efficient and scalable solutions to complex problems.",
    "education": [
      {
        "degree": "Bachelor of Science in Computer Science",
        "university": "University of Technology",
        "location": "Madurai, TN",
        "graduation_year": 2015
      }
    ],
    "experience": [
      {
        "position": "Software Engineer",
        "company": "Tech Solutions Inc.",
        "location": "Madurai, TN",
        "start_date": "2015-07",
        "end_date": "2020-12",
        "responsibilities": [
          "Developed and maintained web applications using HTML, CSS, JavaScript, and frameworks like Angular and React.",
          "Designed and implemented RESTful APIs using Node.js and Express.",
          "Collaborated with cross-functional teams to deliver high-quality software products on time."
        ]
      },
      {
        "position": "Full Stack Developer",
        "company": "Innovate Solutions LLC",
        "location": "Bangalore, State",
        "start_date": "2021-01",
        "end_date": "Present",
        "responsibilities": [
          "Lead the development of a new e-commerce platform using MERN stack (MongoDB, Express.js, React.js, Node.js).",
          "Optimized website performance and implemented security measures to protect user data.",
          "Mentored junior developers and conducted code reviews to ensure code quality and adherence to best practices."
        ]
      }
    ],
    "skills": [
      {
        "category": "Programming Languages",
        "items": ["JavaScript", "Python", "Java", "C#"]
      },
      {
        "category": "Web Development",
        "items": ["HTML5", "CSS3", "React.js", "Angular", "Node.js", "Express.js"]
      },
      {
        "category": "Databases",
        "items": ["MongoDB", "MySQL", "SQLite"]
      },
      {
        "category": "Tools",
        "items": ["Git", "VS Code", "Postman"]
      }
    ]
  };
  
  // Using for loop
  console.log("Using for loop:");
  for (let i = 0; i < resumeData.skills.length; i++) {
    console.log(resumeData.skills[i]);
  }
  
  // Using for...in loop
  console.log("\nUsing for...in loop:");
  for (let key in resumeData) {
    console.log(key, resumeData[key]);
  }
  
  // Using for...of loop (requires iterable)
  console.log("\nUsing for...of loop:");
  const skills = resumeData.skills;
  for (let skill of skills) {
    console.log(skill);
  }
  
  // Using forEach loop (works with arrays)
  console.log("\nUsing forEach loop:");
  resumeData.skills.forEach(skill => {
    console.log(skill);
  });





//   Difference between window, screen, and document in javaScript

// Window

// * Represents the browser window or frame containing the webpage.
// * Provides access to global variables, functions, and methods.
// * Contains properties like window.innerWidth, window.innerHeight to get the dimensions of the browser window.
// *  Can be used to open new windows or tabs using methods like window.open().
// * Allows manipulation of the browser history using methods like window.history.pushState().


// Screen:

// * Represents the physical screen or display of the device.
// * Provides information about the screen size, resolution, and color depth.
// * Contains properties like screen.width and screen.height to get the dimensions of the screen.
// * Can be used to adjust the layout or appearance of content based on the device's screen size.


// Document:

// * Represents the HTML document loaded in the browser window.
// * Provides access to the content and structure of the webpage.
// * Allows manipulation of the DOM (Document Object Model) tree, enabling addition, removal, or modification of elements.
// * Contains properties like document.body to access the body element and document.getElementById() to select elements by their IDs.
// * Provides methods like document.createElement() to create new elements dynamically.