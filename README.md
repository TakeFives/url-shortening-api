# URL Shortening API

A simple and efficient URL shortening service built with Node.js and React. This project allows users to shorten long URLs and retrieve the original URLs using a unique short code.

## Features

- Shorten long URLs into compact, shareable links.
- Retrieve original URLs using the short code.
- Basic validation for URLs.
- RESTful API design.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/url-shortening-api.git
    ```
2. Navigate to the project directory:
    ```bash
    cd url-shortening-api
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm run dev
    ```
2. Access the API at localhost.

## API Endpoints

### 1. Shorten URL
- **POST** `/api/shorten`
- **Request Body**:
  ```json
  {
     "url": "https://example.com"
  }
  ```
- **Response**:
  ```json
  {
     "shortCode": "abc123"
  }
  ```

### 2. Retrieve Original URL
- **GET** `/api/:shortCode`
- **Response**:
  ```json
  {
     "url": "https://example.com"
  }
  ```

## Technologies Used

- Node.js
- Express.js
- Vite
- React

