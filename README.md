# Project_Hyperdrive

## User Story
1. As a user, I want to use an educational tool to learn more about exoplanets outside of our solar system. 
2  As a user, I want to be able to store and comment on the data I have learned about those exoplanets. 
## Acceptance Criteria
- GIVEN a webpage with explorable planet data. 
- WHEN I load up the page for the first time, I am greeted with a login page to sign into an account, or     sign-up.
-THEN I am taken to the homepage
-WHEN I am taken to the homepage, I am greeted with a "cockpit" view, with a transparent background.
-WHEN I login, a receive a "mission" to investigate a planet.
-THEN I can choose to travel to the mission destination.
-WHEN I travel to a destination I am taken to the "hyperspace" page, which features a moving animation and a timer counting down, based on the lightyears to destination.
WHEN I get bored of watching this timer, I can skip ahead to the planet via a "wormhole" feature.
-THEN I "arrive" at the destination I am greeted with a "captain's log" of information about the planet destination.
-THEN I can see my mission counter go up by one, and habitable planet counter go up by one IF certain conditions are met. 
-WHEN I complete a mission, I can receive another mission.
## Description

Our motivation for this project was born out a desire to produce a finished product which was deeply unique, creative, and polished. Writing this, I feel like we have done so. Our wish was to create an app that challenged us to flex (and build!) our skills that we have learned since beginning our coding boot camp journey. 

We immediately had several problems to solve, and had to come up with solutions to challenging questions, parturaly involving the dynamic routes that needed to keep up with our ideas. Designing the final look of the site was also incredibly rewarding, considering the final product's look. 

We all learned so much over the course of this project, and feel entirely more comfortable with advanced concepts such as routing, database-site relationships, and design. 


## Table of Contents (Optional)


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
(VSCode Users)

To use this app, insure you have access and have downloaded Node and mysql onto your local machine. 

Upon opening the app for the first time, please check to make sure you have a package.json file in the file directory, on the lefthand side. If not, open your terminal using "Cntrl + `", or right click on the file directory and select "Open in intergrated terminal." Type into the terminal "npm init -y". 

Still within the terminal, type "npm i" into the terminal. This will install and necessary packages to run our app. 

Check to make sure your dev dependencies and dependencies list matches this list: 
 "dependencies": {
    "bcryptjs": "^2.4.3",
    "connect-session-sequelize": "^7.1.7",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-handlebars": "^7.1.2",
    "express-session": "^1.17.3",
    "handlebars": "^4.7.8",
    "jsdom": "^22.1.0",
    "mysql2": "^3.6.1",
    "postcss-cli": "^10.1.0",
    "sequelize": "^6.33.0",
    "tw-elements": "^1.0.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.3",
    "eslint": "^7.12.1",
    "eslint-config-prettier": "^6.15.0",
    "prettier": "^2.1.2"
  }

To start this app for the first time, you will need to access mysql, and begin your database using the standard "SOURCE db/schema.sql;" command. Once you have done that, exit out of mysql and enter "npm run seed" into the terminal to seed the database with the data. Please note that you will need to update .env with your mysql credentials as well!

FInally, enter "npm start" to initialize the Express engine. The app will start, and you will be free to browse the app using localhost!



## Usage

The site is navigated with a simple point and click interface. You will be taken to our /login (landing page) first. There, sign up for your own account or login as a previous visitor. 

You will then be taken to your "cockpit", which serves as our main page. Here, you can see your previous mission count and mission success in the top left corner. This information will be available as long as you are logged in. Click the Instant Planet Destination in the top right corner to be instantly taken to the planet of your choice. 

In the middle of the screen you will see in the dashboard a button that says "mission assignment". THis will assign your ship to travel to a planet. Your ship (and window) will now be taken to our hyperspace screen. A timer on the screen will display how long you have until arrival at your destination. However, the small "jump" button on the dashboard can also instantly take you to that destination. 

Once you arrive, you will notice your mission count will go up, and mission success will as well, but only if your planet is habitable for future Earth colonists! You will also be able to see planet data and make entries into your Captains Log. From here, you can choose to receive another mission, or travel freely. 


## Credits


PicsArt AI Image Generator
https://picsart.com/

W3Schools 
https://www.w3schools.com/

MDN 
https://developer.mozilla.org/en-US/

Procreate
https://procreate.com/

Cockpit Image 
https://www.cgtrader.com/3d-models/space/spaceship/spaceship-cockpit-v3-3bc93fbe-30e2-45cd-9145-7794311bf917

## License
MIT License

Copyright (c) 2023 Kalani Jones, Alexa Lester, Anna Pincus, Colton Laidig, and Jessie Shockey. 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Badges

![Static Badge](https://img.shields.io/badge/CSS-86.2%-purple)
![Static Badge](https://img.shields.io/badge/Javascript-9.2%-yellow)
![Static Badge](https://img.shields.io/badge/Handlebars-4.6%-orange)


## How to Contribute

If you've like to contribute to this project, please reach out! We are incredibly proud of the work, and also of the numerous future opportunities for future features it could hold.

Before you reach out, please be familiar with the Contributor Covenant and the code of conduct within.

Link to GITHUB repo can be found here: https://github.com/kalaniJ94/Project_Hyperdrive
