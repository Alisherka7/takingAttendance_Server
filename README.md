# Student Management System (Server) + Admin

For implementation this project I used ***NodeJs, Express, MongoDB***

This project was created in several stages

## Getting Started

The first step is the creation of a new Node project **(make sure you install NodeJs and npm on your pc  -** [https://nodejs.org/en/](https://nodejs.org/en/)**)**

```bash
npm init # for initialize your project

```

End now we need to import the required modules

```bash
npm i express morgan nodemon ejs body-parser dotenv mongoose axios

# morgan - help us to log a message when we make a request
# nodemon - allows us to restart the server automatically when we make changes in the project
# ejs - allows us to create dynamic html
# body-parser - for the access the form data using body property
# dotenv - allows us to separate the secret from your source code
# mongoose - we are going to connect this project with mongodb database
# axios - this library makes it easy to make a request in express application
```

## Project Structure

Project structure is a important part of development. Accuracy, easy accessibility is the guarantee of a pleasant development
<p align="center">
  <img src="https://user-images.githubusercontent.com/38793933/139511924-d9a339c0-32be-4a80-8d35-5c81bc7870bb.png"/>
</p>

### Folder structure of our project looks like this:

- assets
    - css
    - img
    - js
- node_modules
- server
    - controller
    - database
    - model
    - routes
    - services
- views

## HTTP Server
