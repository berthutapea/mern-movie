<H1 align ="center" > BertFlix (MERN MOVIE)  </h1>
<h5  align ="center"> 
Fullstack open source movie application made with MongoDB, Express, React & Nodejs (MERN) </h5>
<br/>

  * [Configuration and Setup](#configuration-and-setup)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
      - [API](#api)
  * [📸 Screenshots](#screenshots)
  * [Author](#author)
  * [License](#license)

## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the server on the other terminal)

In the first terminal

```
$ cd client
$ npm install (to install client-side dependencies)
$ npm run  start (to start the client)
```

In the second terminal

- cd server and Set environment variables in .env
- Create your mongoDB connection url, which you'll use as your MONGO_URL
- Supply the following credentials

```
#  --- .env  ---

MONGODB_URL
PORT =5000
TOKEN_SECRET=
TMDB_BASE_URL=
TMDB_KEY=
```

```
# --- Terminal ---

$ npm install (to install server-side dependencies)
$ npm start (to start the server)
```

##  Key Features

- User registration and login
- Authentication using JWT Tokens
- Add Favorites
- Delete Favorites
- Leave a Reviews
- Delete Reviews
- Password Update
- Search Live
- Watch the trailer on Youtube
- 404 Page and many more
- Skeleton loading effect
- DarkMode
- Responsive Design

<br/>

##  Technologies used

This project was created using the following technologies.

####  Frontend 

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks  ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [Material UI](https://mui.com/) - For User Interface
- [CK-Editor](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html) - Rich Text Editor 
- [Formik](https://formik.org/) - Manage status and validation of data on forms efficiently
- [React Redux](https://react-redux.js.org/) - manage application state efficiently and provide a more structured mechanism for managing data
- [React Toastify](https://www.npmjs.com/package/react-toastify) - To display interactive and responsive notifications (toasts) in web applications
- [Swiper](https://swiperjs.com/) - To create responsive and interactive sliders or carousels on web pages

####  Backend 

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [Mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to JavaScript
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For authentication
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Middleware module used in Node.js web applications to manage cookies
- [cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency module that loads environment variables
- [express-validator](https://www.npmjs.com/package/express-validator) - Used in Node.js applications with the Express framework to validate data submitted by users (user input)
- [nodemon](https://nodemon.io/) - Development utility for Node.js applications. Node.js is a runtime platform that allows you to run JavaScript on the server side.t

####  Database 

 - [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.
 
####  Api 

 - [TMDB API](https://developer.themoviedb.org/docs) - An application programming interface that provides access to a database of movies, television shows, and related information from The Movie Database platform.
 
 ##  Screenshots 
 
![img-1](https://github.com/berthutapea/mern-movie/assets/111676859/1dd97e27-c9bc-4b9b-b299-470d8eecf3cf)
---- -
![img-2](https://github.com/berthutapea/mern-movie/assets/111676859/6741b56c-f3ba-4c8d-ae0b-fe4c418731ca)
--- - 
![img-3](https://github.com/berthutapea/mern-movie/assets/111676859/bbf20147-9b9a-4134-b890-410fae96525a)
--- - 
![img-4](https://github.com/berthutapea/mern-movie/assets/111676859/36fea0f5-e4cb-4a55-9211-ea0bc5d870f3)
--- - 
![img-5](https://github.com/berthutapea/mern-movie/assets/111676859/c22464fe-addf-4585-8033-19b713b2bf50)
--- - 
![img-6](https://github.com/berthutapea/mern-movie/assets/111676859/462e698e-5a39-470a-b264-ccf93711c06a)
--- - 
![img-7](https://github.com/berthutapea/mern-movie/assets/111676859/9b4ca1b5-6e07-47cf-a2ad-1a737577e035)
--- - 
![img-8](https://github.com/berthutapea/mern-movie/assets/111676859/95bdf537-a93e-4e84-9228-12375d1a1b47)
--- - 
![img-9](https://github.com/berthutapea/mern-movie/assets/111676859/57c7524b-75a3-4c9b-b90b-8b2593cabb41)
--- - 
![img-10](https://github.com/berthutapea/mern-movie/assets/111676859/1532b9cb-0944-4b47-8898-7273f8ce6082)

## Author
- Portfolio: [berthutapea](https://berthutapea.vercel.app/)
- Github: [berthutapea](https://github.com/berthutapea)
- Sponsor: [berthutapea](https://saweria.co/berthutapea)
- Linkedin: [gilberthutapea](https://www.linkedin.com/in/gilberthutapea/)
- Email: [berthutapea@gmail.com](mailto:berthutapea@gmail.com)

## License

MIT License

Copyright (c) 2022 Gilbert Hutapea

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
