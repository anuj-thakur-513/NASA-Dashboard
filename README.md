# NASA-Dashboard

Web project built with MERN. It lets the user schedule and manage rocket launches to potential habitable planets discovered by Kepler Telescope extracted from NASA Exoplanet Archive as well as maintain past launches history including launches by SpaceX since 2006 fetched using spacex API.

## Project Architecture
![Nasa-Project Architecture (1)](https://github.com/anuj-thakur-513/NASA-Dashboard/assets/82753410/d997ef4f-de94-4c14-870f-6988630f909c)

## Run Locally

Clone the project

```bash
git clone https://github.com/anuj-thakur-513/NASA-Dashboard
```

Go to the project directory

```bash
cd nasa-dashboard
```

Install dependencies

```bash
npm install
```

Start both Front-End and Back-End Servers

```bash
npm run watch
```

## Packages Used

* [**Express**](https://expressjs.com/) -> Express is a back end web application framework for building RESTful APIs with Node.js

* [**CSV Parse**](https://www.npmjs.com/package/csv-parse) -> This package is a parser converting CSV text input into arrays or objects. It implements the Node.js stream API

* [**Morgan**](https://github.com/expressjs/morgan#readme) -> Morgan is a logging tool (middleware) that can be used in HTTP servers implemented using Express & Node. js. It can be used to log requests, errors, and more to the console.

* [**CORS**](https://github.com/expressjs/cors#readme) -> CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

* [**PM2**](https://pm2.keymetrics.io/docs/usage/quick-start/) -> PM2 is a production process manager for Node.js applications with a built-in load balancer. It allows you to keep applications alive forever, to reload them without downtime and to facilitate common system admin tasks.

* [**Nodemon**](https://www.npmjs.com/package/nodemon) -> Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.

* [**Jest**](https://jestjs.io/docs/getting-started) -> Jest is a JavaScript Testing Framework with a focus on simplicity.

* [**Supertest**](https://github.com/ladjs/supertest#readme) -> This module provides a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent.

* [**dotenv**](https://github.com/motdotla/dotenv#readme) -> Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

* [**Mongoose**](https://mongoosejs.com/docs/guide.html) -> Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
