FROM node:18-slim

WORKDIR /app

COPY package.json ./
RUN npm cache clean --force
RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

# Expose port
EXPOSE 80

# Run the build
CMD ["serve", "-s", "build", "-l", "3000"]
