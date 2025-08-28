# NY Times Clone 📰

Welcome to the **NY Times Clone** project! This is a single-page application built with React and Vite, replicating the look and feel of the New York Times website.

---

## 🚀 Features

* **Responsive Design:** The layout adapts to different screen sizes, providing an optimal viewing experience on both desktop and mobile devices.
* **Component-Based Architecture:** Built using React components for a modular and maintainable codebase.
* **State Management:** Utilizes **Redux Toolkit** for efficient and predictable state management.
* **API Integration:** Fetches data (simulated for this project) using **Axios**.
* **Routing:** Manages navigation using **React Router DOM**.
* **Styling:** Styled with **Sass** for a clean, organized, and scalable stylesheet.

---

## 🛠️ Technologies Used

* **Vite:** A fast build tool that provides a rapid development experience.
* **React:** A JavaScript library for building user interfaces.
* **Sass:** A CSS preprocessor that adds power and elegance to the language.
* **Redux Toolkit:** The official, opinionated, batteries-included toolset for efficient Redux development.
* **React Router DOM:** Enables client-side routing.
* **Axios:** A promise-based HTTP client for making API requests.
* **Prop-types:** For type-checking React props.
* **React Icons:** For including popular icons in the project.
* **React Helmet:** For managing document head tags.

---

## 📂 Project Structure

Here is a simplified overview of the project's file structure, highlighting the organization within the `src` directory:
    ny-times-clone/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── api/              # API calls and data fetching logic
    │   ├── components/       # Reusable UI components
    │   ├── pages/            # Page-level components and views
    │   ├── store/            # Redux slices and store configuration
    │   ├── styles/           # Sass files for global and component-level styling
    │   ├── App.jsx           # Main application component
    │   └── main.jsx          # Entry point of the application
    ├── .env                  # Environment variables
    ├── .gitignore
    ├── index.html            # Main HTML file
    ├── package-lock.json
    └── package.json

---

## 📦 Getting Started

To get a copy of this project up and running on your local machine, follow these steps.

### Prerequisites

You need to have **Node.js** and **npm** (or yarn) installed.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/noemolino/ny-times-clone.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd ny-times-clone
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Project

1.  Start the development server:
    ```sh
    npm run dev
    ```
2.  Open your browser and navigate to `http://localhost:5173` (or the URL provided in your terminal).

---

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.