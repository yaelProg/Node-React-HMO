**Node-React-HMO**

## Overview

Node-React-HMO is a simple web application developed using Node.js and React that allows users to view and manage a list of members. The application is built using React and Redux for state management.
## Features

- View a list of members.
- Add new members.
- View the details of a member.
- Edit the details of a member.
- Delete a member.
## Installation

To run this application locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/yaelProg/Node-React-HMO.git
   ```
2. Create a MongoDB collection and copy its connection string.

3. Update the .env file in the server directory with your MongoDB connection string:
   ```
    DATABASE_URI=<your_connection_string>
   ```

4. Initialize the server by running:

   ```
   npm init
   ```
   
5. Start the server by running:

   ```
   npm run dev
   ```

6. Initialize the client by running:

   ```
   npm install
   ```
   
5. Start the client by running:

   ```
   npm start
   ```

6. Open your browser and visit `http://localhost:3000` to access the application.

## Technologies Used

- **Frontend**:
  - React
  - Redux
  - Axios
  - Material-UI

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
