# Use Node.js as the base image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Start the React app in development mode
CMD ["npm", "start", "--reload"]
