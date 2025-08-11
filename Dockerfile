# Build stage
FROM node:18-alpine as build

# Set build-time arguments
ARG REACT_APP_DOMAIN
ARG REACT_APP_DEBUG
ARG REACT_APP_MAIN

# Pass args to env so React can read them
ENV REACT_APP_DOMAIN=$REACT_APP_DOMAIN
ENV REACT_APP_DEBUG=$REACT_APP_DEBUG
ENV REACT_APP_MAIN=$REACT_APP_MAIN

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built app
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost || exit 1

CMD ["nginx", "-g", "daemon off;"]
