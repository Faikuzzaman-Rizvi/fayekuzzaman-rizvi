import { Code, Database, Globe, Wrench } from 'lucide-react';

export const projects = [
  {
    title: "Patient Management System",
    description: "Developed a secure healthcare API with token-based authentication (JWT), managing patient-test relationships using the repository pattern and ensuring full data validation.",
    tech: ["ASP.NET MVC 5", "Web API 2", "JWT", "EF Core", "MS SQL"],
    github: "https://github.com/Faikuzzaman-Rizvi/PatientWebAPIProject.git"
  },
  {
    title: "Employee Management API",
    description: "Built a RESTful API to manage employee records with full CRUD operations, proper HTTP status handling, and structured data access. Tested and documented endpoints using Swagger and Postman.",
    tech: ["ASP.NET Core", "EF Core", "MS SQL", "Swagger"],
    github: "https://github.com/Faikuzzaman-Rizvi/EmployeeCoreApiProject.git"
  },
  {
    title: "Attendance Management System",
    description: "Built an attendance tracking system with role-based access, including clock-in/out, leave management, and reporting. Implemented smooth, dynamic interactions using Ajax.",
    tech: ["ASP.NET MVC", "Entity Framework", "Ajax", "MS SQL"],
    github: "https://github.com/Faikuzzaman-Rizvi/AttendanceManagementSystem.git"
  },
  {
    title: "Real-Time Book Shop",
    description: "Developed an e-commerce platform with real-time cart updates and stock notifications using Socket.IO, backed by MongoDB for data storage and a responsive frontend.",
    tech: ["Node.js", "MongoDB", "Socket.IO", "jQuery"],
    github: "https://github.com/Faikuzzaman-Rizvi/Book-Shop.git"
  }
];

export const skills = [
  {
    category: "Backend Development",
    icon: Code,
    items: ["ASP.NET Core & MVC", "C# & .NET Framework", "Web APIs", "RESTful API Design", "Entity Framework Core", "PHP", "Laravel", "Node.js"]
  },
  {
    category: "Database Management",
    icon: Database,
    items: ["MS SQL Server", "MySQL", "MongoDB", "Database Architecture", "Query Optimization"]
  },
  {
    category: "Frontend Technologies",
    icon: Globe,
    items: ["Angular Framework","React.js", "JavaScript & jQuery", "HTML5 & CSS3", "Responsive Design"]
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Visual Studio", "Postman"]
  }
];

export const education = [
  {
    degree: "B.Sc in Computer Science & Engineering",
    institution: "Northern University Bangladesh",
    year: "2025 - Running",
    status: "Currently Pursuing"
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Kushtia Polytechnic Institute",
    year: "2021 - 2024",
    grade: "CGPA: 3.51/4.00"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Abdul Wadud Shah Degree College",
    year: "2017 - 2019",
    grade: "GPA: 3.25/5.00 | Humanities"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Kutubpur Secondary School",
    year: "2017",
    grade: "GPA: 4.32/5.00 | Science"
  }
];

export const contactInfo = {
  name: "Fayekuzzaman Rizvi",
  title: ".NET Developer",
  phone: "+88 01731206197",
  email: "rizvidev313@gmail.com",
  location: "Mirpur, Dhaka-1216",
  github: "https://github.com/Faikuzzaman-Rizvi",
  linkedin: "https://www.linkedin.com/in/faikuzaman-rizvi/"
};

export const references = [
  {
    name: "Syed Zahidul Hassan",
    title: "Consultant",
    organization: "Show & Tell Consulting Ltd",
    program: "IsDB-BISEW IT Scholarship Programme",
    phone: "+88 01817015015",
    email: "jewelmir81@gmail.com"
  },
  {
    name: "Umme Aimun Nesa",
    title: "Sr. Software Engineer & Technical Trainer",
    specialization: ".NET Specialization",
    program: "IsDB-BISEW IT Scholarship Programme",
    phone: "+88 01736580206",
    email: "ummeaimun098@gmail.com"
  },
  {
    name: "Md Aliul Islam",
    title: "Faculty .NET, US Software Ltd",
    specialization: ".NET Specialization",
    program: "IsDB-BISEW IT Scholarship Programme",
    phone: "+88 01518-317509",
    email: "aliul1990@gmail.com"
  }
];