# Hospital Appointment App

https://okudurhospital.netlify.app/

## Project Purpose

The primary objective of this project is to develop a practical hospital appointment application that helps manage patients’ appointments. The “Okudur Hospital Appointment App” allows users to add, view, check, and delete patients’ appointments. This project focuses on understanding and implementing state management using useState, handling events, and storing data using Local Storage in a React application.

## Project Structure

```
|--Okudur_Hospital_Appointment_App(folder)
|
├── public
│     └── index.html
├── src
│    
│    ├── assets
│    │       └──  [images] 
│    │
│    ├── components
│    │       ├── Navbar.jsx
│    │       ├── PatientList.jsx
│    │       └── AddPatient.jsx
│    ├── helper
│    │       ├── Home.jsx
│    │       ├── data.js
│    │       └── doctor.js
│    │       
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```


## Project Features
- **Add Patients**: Users can add new patients, which are saved as objects in the state and displayed in a list.
- **View Patients**: Patients are displayed with their current status (completed or not).
- **Check/Uncheck Patients**: Users can mark patients as completed or uncompleted, with the UI updating accordingly.
- **Delete Patients**: Users can remove patients from the list.
- **Local Storage**: Patients are persisted in Local Storage, ensuring that they remain even after the page is refreshed.
- **Responsive Design**: The app is styled using CSS to ensure it is responsive and user-friendly.

## Outcome

![Hospital Appointment App](https://github.com/user-attachments/assets/a9310bfc-5854-469a-b520-ea81295f4405)



## Technologies Used
- **HTML**: Minimal usage for structuring the React app.
- **CSS**: Employed for styling and enhancing the visual aspects of the app.
- **JavaScript (ReactJS)**: Utilized for building the user interface. Key React features include:
  - State management using `useState`
  - Event handling (`onClick`, `onChange`)
  - Local Storage for data persistence
  - Mapping through state arrays to dynamically render components
-- **date-fns**: Utilized for formatting dates throughout the application. 
 

### At the end of the project, will be able to;

This project has significantly enhanced my understanding and mastery of React state management, event handling, and data persistence using Local Storage. By developing the “Okudur Hospital Appointment App,” I have gained practical experience in:

- Managing state with `useState` in React components.
- Handling user interactions such as adding, checking, and deleting tasks.
- Implementing persistent data storage using Local Storage in a React application.
- Formatting dates using date-fns to ensure consistency and readability.

These skills are essential for developing more complex and user-interactive applications in the future.

<p align="center"> 🏥 Happy Coding! 🩺 </p>

