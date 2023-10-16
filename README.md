# CS3750

This repository is for the CS3750 project. this is a test for deploying postgres as well as a database built on prisma

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

3. After executing the above commands, Docker will download the required images (if not available), build your containers, and start them.

4. Visit your application at the provided port or check the running services using:
    ```bash
    docker-compose ps
    ```

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

---

