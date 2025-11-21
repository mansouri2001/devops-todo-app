# TodoAppAngular
This project is a simple Angular application that I containerized using Docker.
I also added a GitHub Actions CI pipeline, docker-compose, and K8s files .
The goal is to show how an application goes from source code → container → orchestration → automation.


# Project Structure 
 .
    Dockerfile              # Multi-stage build
    docker-compose.yml      # Run locally with Docker
    k8s/                    # Kubernetes files
       deployment.yaml
       service.yaml
    .github/workflows/
         ci.yml              # CI pipeline

# Tools Used

Angular

Node.js 20

Docker

Docker Compose

Kubernetes 

GitHub Actions

# Docker – Multi-Stage Build for Angular App

This project uses Docker to build and run an Angular application in production mode.
The image is created with two stages: one for building the app, and one for serving it with Nginx.

# Run  app with Docker
docker build -t todo-app:v1 .
docker run -d -p 8080:80 --name todo-app todo-app:v1

# Kubernetes
Basic manifests are provided:

deployment.yaml: deploys the Angular app

service.yaml:  To exposes it 

# CI Pipeline (GitHub Actions)
The repository contains a CI workflow triggered on each push or pull request 