# TickTask

## Overview

Tick Task is a web app intended for use by students to prioritize their assignments, although it can be utilized by any user who wants to better organize their workflow. 
Users are first greeted with a login page, where they can make an account that will store their information and authenticate them for future accessing of the site. In the app itself, users input their assignments with information about them such as estimated time to complete and due date, and an algorithm creates a priority list of all the assignments. The app then creates each assignment as a Google Calendar event, which will inform the user of the optimal time to complete each assignment.
This app is built using the MERN stack (MongoDB, Express, React, Node.js) and is hosted using AWS.

## Install Dependencies

```javascript
npm install
npm install -prefix client
```

Start server

```javascript
npm run server
```

Start client

```javascript
npm start -prefix client
```

Start both

```javascript
npm run dev
```
