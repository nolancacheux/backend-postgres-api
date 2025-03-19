# Backend NestJS with PostgreSQL

## Introduction

This project is a **RESTful backend** developed with **NestJS** and **TypeORM**, interacting with a **PostgreSQL** database. It is designed to operate in a **scalable and containerized environment with Docker**, to facilitate deployment and scaling.

## Objectives

- Provide a **REST API** for user management.
- Ensure **data persistence** with PostgreSQL via TypeORM.
- Automate **deployment with Docker and Docker Compose**.
- Test and **analyze performance** using a Jupyter Notebook.
- Manage **scalability** with multiple backend instances.

---

# Installation and Running with Docker

## 1. Clone the project

```bash
git clone https://github.com/nolancacheux/backend-postgres-api.git
cd backend-postgres-api
```

## 2. Configuration of .env File

Create a `.env` file in the project root directory with the following content:

```ini
# Server Configuration
PORT=3000

# PostgreSQL Database Configuration
DATABASE_HOST=postgres  # Should match the service name in docker-compose.yml
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=mydb

# Other Configurations
NODE_ENV=development
```

## 3. Build and start the containers with Docker Compose

Simply run:

```bash
docker-compose up -d --build
```

This starts the application and the database **in the background**.

The API will be accessible at **http://localhost:3000/users**.

## 4. Generate fake data in the database

```bash
docker exec -it backend-api npx ts-node src/scripts/generate-fake-data.ts
```

This adds **100 fake users** to the database.

## 5. Test the API with the Jupyter Notebook

- Open the file **`notebooks/test_api.ipynb`**.
- Run the cells to **test the API and analyze performance**.

## 6. Restart the Docker containers if something goes wrong

```bash
docker-compose down
docker-compose up -d --build
```

---

# Directory Functionality

## 1. `config/`
- Manages **environment variable** loading with `@nestjs/config`.

## 2. `controllers/`
- Contains **controllers** defining the **API routes**.

## 3. `database/`
- Manages **TypeORM connection to PostgreSQL**.

## 4. `models/`
- Contains **TypeORM entities** representing **database tables**.

## 5. `services/`
- Contains **business logic** and data access.

## 6. `scripts/`
- Contains **utility scripts**, such as **fake data generation**.

## 7. `notebooks/`
- Contains **Jupyter notebooks** for **API testing and performance analysis**.

## Project Structure

```
backend-postgres-api/
├── dist/                      # Compiled files after build
├── node_modules/              # Project dependencies
├── notebooks/                 # Tests and analyses with Jupyter Notebook
│   └── test_api.ipynb         # API and performance test notebook
├── src/
│   ├── config/                # Global configuration
│   │   └── config.module.ts
│   ├── controllers/           # API route definitions
│   │   └── user.controller.ts
│   ├── database/              # PostgreSQL connection management
│   │   └── database.module.ts
│   ├── models/                # Data models (TypeORM Entities)
│   │   └── user.entity.ts
│   ├── scripts/               # Utility scripts (data generation)
│   │   └── generate-fake-data.ts
│   ├── services/              # Business logic
│   │   ├── user.module.ts
│   │   └── user.service.ts
│   ├── app.module.ts          # Main application module
│   ├── main.ts                # Application entry point
├── .dockerignore              # Files to ignore by Docker
├── .env                       # Environment variables
├── .gitignore                 # Files to ignore by Git
├── .prettierrc                # Prettier configuration
├── Dockerfile                 # API Dockerization
├── docker-compose.yml         # Simplified container management
├── package.json               # Project dependencies
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Documentation
```

---