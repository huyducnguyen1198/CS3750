# Project Name

## Description

Briefly describe what your project does and what it's used for.

## Getting Started with Docker

### Prerequisites

- Docker
- Docker Compose
- Node.js and npm installed if running the Next.js app locally

### Running PostgreSQL Container

To run the PostgreSQL container independently, execute:

```bash
docker-compose up -d postgres
```

After the PostgreSQL container is up and running, you can start the Next.js app in development mode with:

```bash
npm run dev
```

This command should be run from the root directory of your Next.js application.

### Building the Environment

To construct the Docker environment for all services:

```bash
docker-compose build
```

### Running the Application and PostgreSQL Containers

To initiate both the app and PostgreSQL containers together:

```bash
docker-compose up
```

## API Endpoints Overview

Interact with the API locally at `localhost:3000` using the following endpoints for CRUD operations:

### Standard API Request Formats

- **List All Entries**: Retrieve all records from a specified table.
- **Retrieve One Entry**: Obtain a particular record by its ID.
- **Add New Entry**: Introduce a new record using a JSON payload via Postman.
- **Delete Entry**: Remove an individual record by its ID.

### Database Tables

The API interacts with the following tables:

- `level`
- `passResult`
- `song`
- `user`
- `userType`

### Detailed API Requests

#### Retrieve All Entries from a Table

```http
GET /api/[table]
```

#### Retrieve a Specific Entry by ID

```http
GET /api/[table]/[recordId]
```

#### Add a New Entry

```http
POST /api/[table]/create
```

*For adding records, use a raw JSON body in a POST request via Postman.*

#### Delete a Specific Entry

```http
DELETE /api/[table]/[recordId]
```

Substitute `[table]` with the actual table name and `[recordId]` with the ID of the record you're querying or deleting.

