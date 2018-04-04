# Coordinate
[TOC]

## About
This is a web application made for

## Usage

### 1. Requirements
  - [NodeJS](https://nodejs.org/)
  - [MongoDB](https://www.mongodb.com/)

### 2. Set up
  1. `git clone <repository>`
  2. `cd <repository>`
  3. `npm install`

### 3. NPM commands
  - `npm start`    : runs development version of application
  - `npm stop`     : kills mongodb manually if necessary
  - `npm restart`  : runs stop and start (use this during continual use)
  - `npm run prod` : runs production version of application

## Application Directory
  - `api`: logic for any api used (e.g Google Maps)
  - `db`: models, routes, and schemas for MongoDB
  - `pages`: views reside here
  - `public`: files publicly available to client-side
  - `sass`: all files under this directory are compiled to stylesheet.css in `app/public`
  - `util`: necessary external scripts to run application (e.g JQuery, Bootstrap, AngularJS)

### Database Information
  - DB is in the folder `data`
  - DB print outs can be found on <http://localhost:3000/app>
