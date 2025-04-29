FROM node:18 AS builder

WORKDIR /app


COPY package.json package-lock.json ./
RUN npm cache clean --force
RUN npm install --legacy-peer-deps --force

COPY . .

RUN npm run build

# ------------------------

# Production image
FROM node:18-slim

WORKDIR /app

COPY --from=builder /app/build ./build

RUN npm install -g serve

# Expose port
EXPOSE 3000

# Run the build
CMD ["serve", "-s", "build", "-l", "3000"]
