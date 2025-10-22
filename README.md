# Personal Website Template

Welcome to the Personal Website Template! This web app is designed to help you create a personalized website easily. It's particularly useful for computer science students, freshers, software professionals, data professionals, and anyone else looking to showcase their work and profile. The template is built using React.js, HTML, CSS, and JavaScript.

![Personal Website Screenshot](./src/components/images/personal_website_template_ss.png)

## Table of Contents
1. [Application Overview](#application-overview)
2. [Component Architecture](#component-architecture)
3. [Key Features](#key-features)
4. [Technologies Used](#technologies-used)
5. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Project](#running-the-project)
6. [Component Details](#component-details)
7. [Personalizing the Project](#personalizing-the-project)
8. [Hosting on GitHub](#hosting-on-github)
9. [Helpful Websites](#helpful-websites)
10. [Contributing](#contributing)
11. [License](#license)
12. [Contact](#contact)

## Application Overview

This Personal Website Template is a modern, responsive single-page application (SPA) built with React.js. It provides a comprehensive platform for individuals to showcase their professional profile, skills, projects, and personal interests. The application follows a modular component-based architecture, making it easy to customize and maintain.

The website features a clean, professional design with smooth scrolling navigation, interactive animations, and responsive layouts that work seamlessly across desktop and mobile devices.

## Component Architecture

The application is structured using React functional components with the following hierarchy:

```
App (Main Container)
├── Navbar (Navigation)
├── Home (Landing Section)
├── Skills (Technical Skills Display)
├── Background (Education & Experience)
├── Projects (Portfolio Showcase)
├── Hobby (Personal Interests)
└── Contact (Contact Form & Information)
```

Each component is self-contained with its own styling (CSS) and functionality, promoting modularity and reusability.

## Key Features

- **Customizable Home Section**: Personalize your name, introduction, and animation.
- **Skills Showcase**: Display your skills with customizable icons and animations.
- **Education and Experience**: List your educational background and professional experience.
- **Projects Section**: Highlight your projects with screenshots and links.
- **Hobby Section**: Showcase personal interests and hobbies with engaging content.
- **Contact Form**: Simple contact form with Formspree integration.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Smooth Navigation**: Seamless scrolling between sections with animated transitions.
- **Interactive Elements**: Hover effects, animations, and visual feedback.

## Technologies Used

- **React.js**: For building the user interface and component management.
- **HTML**: For the structure of the web pages.
- **CSS**: For styling, animations, and responsive design.
- **JavaScript**: For interactivity and functionality.
- **Node.js**: Required to run the development server for the frontend application.
- **React Router**: For smooth scrolling navigation between sections.
- **Lottie React**: For rendering JSON-based animations.

## Getting Started

### Prerequisites

- Node.js (v12.x or later)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/NJITCDS/Personal-Website-Template.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Personal-Website-Template
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Project

1. Start the application:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Component Details

### 1. App Component (`src/App.js`)
**Purpose**: Main application container that orchestrates all components and defines the overall page structure.

**Features**:
- Renders all page sections in proper order
- Includes the Home section inline with personal introduction
- Manages the overall application layout and flow
- Provides consistent styling through App.css

**Key Elements**:
- Personal introduction with name and description
- Social media connection links
- Home section animation integration

### 2. Navbar Component (`src/components/Navbar.js`)
**Purpose**: Fixed navigation bar that provides smooth scrolling access to all page sections.

**Features**:
- Responsive navigation design
- Smooth scrolling to page sections using react-scroll
- Avatar/profile image display
- Symmetrical link layout (Skills & Background on left, Projects & Hobby & Contact on right)

**Navigation Links**:
- Skills → Skills section
- Background → Education & Experience
- Projects → Portfolio showcase
- Hobby → Personal interests
- Contact → Contact information

### 3. Skills Component (`src/components/Skills.js`)
**Purpose**: Showcases technical and professional skills with visual icons and organized categorization.

**Features**:
- Elevated white container with shadow effects
- Grid-based skill organization
- Icon representation for each skill
- Categorized skill sections (Frontend, Backend, Databases, etc.)
- Responsive design for different screen sizes

**Structure**:
- Skills are organized in a table format
- Each skill includes an icon and name
- Supports multiple skill categories

### 4. Background Component (`src/components/Background.js`)
**Purpose**: Displays educational background and professional experience with interactive navigation.

**Features**:
- Tabbed interface for Education and Experience
- Purple-themed design consistent with site accent color
- Interactive buttons to switch between views
- Integration with separate Education and Experience components
- Background animation support

**Sections**:
- **Education**: Academic qualifications and achievements
- **Experience**: Professional work history and accomplishments

### 5. Projects Component (`src/components/Projects.js`)
**Purpose**: Portfolio showcase featuring completed projects with descriptions, technologies, and links.

**Features**:
- Card-based project layout
- Project screenshots with hover effects
- Technology stack display
- Live demo and GitHub repository links
- Responsive grid layout
- Screenshot background support with 16:9 ratio optimization

**Project Information**:
- Project title and description
- Technology stack used
- GitHub repository links
- Live deployment links (when available)
- Project screenshots

### 6. Hobby Component (`src/components/Hobby.js`) *[New Addition]*
**Purpose**: Personal section showcasing hobbies and interests, specifically featuring beekeeping.

**Features**:
- Educational content about bees and beekeeping
- Interactive honeycomb hexagon pattern with orange/honey theme
- Animated bee icon with buzzing effects
- Responsive two-column layout
- Integration with site animations
- Engaging facts and personal journey contents

**Content Sections**:
- Introduction to beekeeping
- Importance of bees in ecosystem
- Amazing bee facts with emoji icons
- Personal beekeeping journey
- Visual honeycomb pattern with animated elements

### 7. Contact Component (`src/components/Contact.js`)
**Purpose**: Contact information and form for visitors to get in touch.

**Features**:
- Email display with icon
- Contact form integrated with Formspree
- Google Maps integration for location display
- Purple-themed design consistent with site branding
- Form validation and submission handling
- Responsive layout with form and map sections

**Contact Methods**:
- Email address display
- Contact form with name, email, and message fields
- Location map integration
- Social media links (via Connect component)

### 8. Supporting Components

#### Animation Component (`src/components/Animation.js`)
- Renders Lottie JSON animations
- Used throughout the site for visual enhancement
- Supports various animation files from the animations folder

#### Connect Component (`src/components/Connect.js`)
- Social media and professional links
- LinkedIn, GitHub, and resume links
- Consistent styling with hover effects

#### Education & Experience Components
- **Education.js**: Academic background with institutions, degrees, and dates
- **Experience.js**: Professional work history with companies, roles, and descriptions
    ```
2. Navigate to the project directory:
    ```bash
    cd Personal-Website-Template
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Project

1. Start the application:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Personalizing the Project

## Personalizing the Project

### Changes in the `./public` Folder

- **Website Icon and Title** (`./public/index.html`)
    - Change the profile photo or logo by replacing `avatar.png` in the `./public` folder and update the reference in line 6 of `index.html`.
    - Update the website title in `index.html` at line 9.

### Changes in the `./src` Folder

#### Home Section (`./src/App.js`)
- **Name and Introduction**: Update your name at line 31 and introduction at line 34 in `App.js`.
- **Animation**: Find and customize an animation from [LottieFiles](https://lottiefiles.com/) and save the `.json` file in `./src/components/animations`. Reference the file at line 42 in `App.js`.
- **Connection Links**: Update your LinkedIn, GitHub, and resume links in the Connect component.

#### Navigation (`./src/components/Navbar.js`)
- **Profile Image/Logo**: Replace `avatar.png` in the `./src/components/images` folder and update the reference at line 17 in `Navbar.js`.

#### Skills Section (`./src/components/Skills.js`)
- **Skills Data**: Edit the `skillsSection` constant at line 8 in `Skills.js` to update your skills and their icons.
- **Skill Categories**: Add or modify skill categories (Frontend, Backend, Database, etc.).
- **Icons**: Update skill icons by adding SVG files to the images folder.

#### Background Section
- **Education** (`./src/components/Education.js`): Update your education details in the `education` constant at line 3.
- **Experience** (`./src/components/Experience.js`): Update your experience details in the `experience` constant at line 3.

#### Projects Section (`./src/components/Projects.js`)
- **Project Data**: Add your projects to the `projects` constant in `Projects.js`.
- **Screenshots**: Add project screenshots to `./src/components/images/` folder.
- **Recommended Image Ratio**: For best results, use images with a 16:9 ratio for project screenshots.
- **Links**: Update GitHub repository and live demo URLs.

#### Hobby Section (`./src/components/Hobby.js`) *[New]*
- **Content**: Customize the hobby content, facts, and personal journey.
- **Theme**: Modify the hobby theme (currently beekeeping) to match your interests.
- **Animation**: Replace the animation file reference to match your hobby theme.
- **Visual Elements**: Customize hexagon colors and bee icon in the CSS file.

#### Contact Section (`./src/components/Contact.js`)
- **Email**: Update your email address.
- **Formspree**: Set up your Formspree endpoint for form submissions.
- **Map**: Update the Google Maps iframe code with your location.
- **Contact Information**: Modify contact details and social media links.

## Hosting on GitHub

1. Add homepage to `package.json`:
    ```json
    "homepage": "https://myusername.github.io/my-app",
    ```
    Replace `myusername` with your GitHub username and `my-app` with your repository name.

2. Install `gh-pages`:
    ```bash
    npm install --save gh-pages
    ```

3. Deploy the site:
    ```bash
    npm run deploy
    ```

4. Configure GitHub Pages:
    - Go to your repository settings on GitHub.
    - Select `Pages` from the menu.
    - Ensure the branch is set to `gh-pages`.

## Helpful Websites

- **[LottieFiles](https://lottiefiles.com/)**: Customize and download animations.
- **[SVGRepo](https://www.svgrepo.com/)**: Source for SVG icons.
- **[ChatGPT](https://chatgpt.com/)**: AI tool for explanations, debugging, and content enhancement.
- **[CodePen](https://codepen.io/)**: Experiment with HTML, CSS, and JS elements.
- **[CodeSandbox](https://codesandbox.io/)**: Create and run React apps.
- **[Formspree](https://formspree.io/)**: Handle form submissions and get email notifications.
- **[Crop Circle](https://crop-circle.imageonline.co/#circlecropresult)**: Crop images into circles.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create your feature branch:
    ```bash
    git checkout -b feature/AmazingFeature
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Add some AmazingFeature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature/AmazingFeature
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For inquiries regarding this project, please contact:

- GitHub: [Koustubh Sahu](https://github.com/KoustubhSahu)

---

Thank you for using the Personal Website Template! We hope it helps you create a stunning personal website.
