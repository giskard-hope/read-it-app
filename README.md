# Read-it: A React & Redux Reddit Client

A simplified, read-only web client for Reddit built with modern web technologies. This application allows users to browse, search, and filter posts from Reddit's front page and view their comments.

**Live Demo Link:** [ [ Netlify URL ] ]

---

## Features

* View the default list of posts from Reddit's front page.
* Filter posts by "Hot", "New", and "Top".
* Search for posts by a specific term.
* Click on a post to view its details and comments in a modal window.
* Lazy loading for images and code-splitting for performance.
* Fully responsive design for mobile, tablet, and desktop.

## Technologies Used

* **Framework:** React
* **State Management:** Redux Toolkit
* **Build Tool:** Vite
* **Unit Testing:** Vitest & React Testing Library
* **E2E Testing:** Cypress
* **Styling:** CSS
* **Deployment:** Netlify

## Local Setup & Installation

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/giskard-hope/read-it-app
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd read-it-app
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```

## Future Work

* Implement user authentication via Reddit OAuth.
* Add the ability to upvote/downvote posts and comments.
* Implement infinite scrolling for a smoother browsing experience.