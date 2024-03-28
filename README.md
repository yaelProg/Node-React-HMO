**Node-React-HMO**

## Overview

Node-React-HMO is a simple web application developed using Node.js and React that allows users to view and manage a list of members. The application is built using React and Redux for state management.
## Features

- Manage members: Add, update, and delete member details.
- Corona tracking: Keep track of members who have tested positive for COVID-19.
- Vaccine management: Record vaccine details for each member.
## Screenshots

![image](https://github.com/yaelProg/Node-React-HMO/assets/156606079/51f78e3f-8dda-4241-9d67-51a33e5d45d2)
![image](https://github.com/yaelProg/Node-React-HMO/assets/156606079/dab4dd21-28a8-4595-8f84-d4bf0d84decc)
![image](https://github.com/yaelProg/Node-React-HMO/assets/156606079/730d036b-1779-4793-9783-cb50b18cafcc)
![image](https://github.com/yaelProg/Node-React-HMO/assets/156606079/05105081-f574-4701-b0ee-11d6ac3ba02c)
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

