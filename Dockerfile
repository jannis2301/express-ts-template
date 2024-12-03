# Use official Node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json & pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the TypeScript files
RUN pnpm run build