#!/bin/bash

# Set AWS region to UAE
export AWS_DEFAULT_REGION=me-central-1

# Authenticate Docker to AWS ECR
aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $1

# Build your Docker image (assuming you're in the image directory)
docker build -t $1:latest .

# Push the Docker image to ECR
docker push $1:latest