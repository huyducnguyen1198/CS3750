# CS3750

This repository is for the CS3750 project. This project is a test for deploying a PostgreSQL database and an API built with Prisma.

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setting Up the testPost Project

1. **Clone the repository:**
    ```bash
    git clone https://github.com/huyducnguyen1198/CS3750.git
    cd CS3750/testPost
    ```

2. **Build and start the services:**
    ```bash
    docker-compose up --build
    ```

    If you want to run it in detached mode (in the background):
    ```bash
    docker-compose up -d --build
    ```

3. Once the above commands are executed, Docker will download the required images (if not available), build your containers, and start them.

4. Visit your application at the provided port or check the running services using:
    ```bash
    docker-compose ps
    ```

5. **Get API**: A simple GET API has been set up to fetch user types. Once the application is running, you can access it at:
    ```
    http://localhost:3000/userTypes
    ```

## Prisma and Schema Changes

When you make changes to the Prisma schema:

- **Outside of Docker**: Run `npx prisma generate` in your local environment every time you modify the Prisma schema. 

    **Note**: In the PostgreSQL connection URL, use `localhost` when you're working outside of Docker.

- **Inside of Docker**: Integrate `npx prisma generate` into your Docker image build process to ensure the Prisma Client matches the latest schema changes.

    **Note**: In the PostgreSQL connection URL, use `postgres` when you're running inside a Docker container.

## Useful Docker Compose Commands

- **Stopping the services:**
    ```bash
    docker-compose down
    ```

- **View logs:**
    ```bash
    docker-compose logs -f
    ```

- **Access a running service container:**
    ```bash
    docker-compose exec [service-name] /bin/sh
    ```

