# GoTund - A Blogging Application

I'll create a comprehensive README file for your GoTund blogging application that will help developers understand the codebase and architecture quickly.

# GoTund - Blogging Application

A modern blogging platform built with Node.js, Express, and PostgreSQL.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Authentication](#authentication)
- [Error Handling](#error-handling)

## Overview

GoTund is a blogging platform that allows users to create, read, update, and delete blog posts. The application is built with a modern tech stack including Node.js, Express, Sequelize ORM, and PostgreSQL.

## Features

- User authentication (signup, login)
- User profile management
- Blog post creation and management
- Social media integration
- RESTful API architecture

## Architecture

GoTund follows a layered architecture pattern:

1. **Routes Layer**: Handles HTTP requests and routes them to appropriate controllers
2. **Controller Layer**: Contains business logic and coordinates between services
3. **Service Layer**: Implements core application functionality
4. **Model Layer**: Defines data structures and database interactions
5. **Utility Layer**: Provides helper functions and shared utilities

## Project Structure

```
goTund/
├── src/
│   ├── app.js                 # Express application setup
│   ├── config/                # Configuration files
│   │   ├── db.js              # Database connection
│   │   └── associations.js    # Model associations
│   ├── controllers/           # Request handlers
│   ├── middlewares/           # Express middlewares
│   ├── models/                # Sequelize models
│   ├── routes/                # API routes
│   ├── services/              # Business logic
│   └── utils/                 # Utility functions
├── index.js                   # Application entry point
├── package.json               # Project dependencies
└── README.md                  # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/thewecas/goTund.git
cd goTund
```

2. Install dependencies:

```bash
npm install
```

### Environment Variables

```
PORT=3000
NODE_ENV=development

DB_DIALECT=postgres
DB_NAME=your_database_name
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=127.0.0.1
DB_PORT=5432
```

### Running the Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

## API Documentation

### Authentication Endpoints

- **POST /auth/signup**: Register a new user

  - Request body: `{ username, email, firstName, lastName, password }`
  - Response: User object

- **POST /auth/login**: Authenticate a user
  - Request body: `{ email, password }`
  - Response: User object and access token

## Authentication

The application uses JWT (JSON Web Tokens) for authentication. When a user logs in, the server generates a token that the client can use for subsequent authenticated requests.

## Error Handling

The application uses a standardized error response format:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error message",
    "details": {},
    "statusCode": 400,
    "timestamp": "2023-01-01T00:00:00.000Z"
  }
}
```

Success responses follow this format:

```json
{
  "success": true,
  "data": {},
  "message": "Operation successful",
  "timestamp": "2023-01-01T00:00:00.000Z",
  "metadata": {}
}
```
