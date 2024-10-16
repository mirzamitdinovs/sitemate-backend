# Issue Tracker - Server

This is the backend for the Issue Tracker application. It provides a RESTful API to create, read, update, and delete (CRUD) issues. The backend is built using **Node.js**, **Express**, **Prisma ORM**, and **PostgreSQL**.

## What I Did

- Set up a RESTful API server using Node.js and Express to manage issues (similar to a task or issue tracker).
- Configured **Prisma ORM** to interact with a **PostgreSQL** database, providing database models and migrations.
- Implemented CRUD operations: create, read, update, and delete issues.
- Set up proper routing, validation, and error handling for API requests.
- Integrated **SWR** (used by the frontend) to allow automatic data revalidation and caching.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend server.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **Prisma ORM**: Object-Relational Mapper for interacting with the PostgreSQL database.
- **PostgreSQL**: Relational database for storing issue data.
- **TypeScript**: Used for strong typing and improving code quality.
  
## Environment Variables

Make sure to create a `.env` file in the root of the project with the following variables:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/issue_tracker
PORT=4000
