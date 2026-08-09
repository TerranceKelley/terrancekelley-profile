## Multi-stage Dockerfile for Nuxt 3 production build

# 1) Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies (only package files first for better caching)
COPY package.json package-lock.json ./
RUN npm ci --omit=dev=false

# Copy the rest of the app and build
COPY . .
RUN npm run build


# 2) Production runtime stage
FROM node:20-alpine AS production

WORKDIR /app

ENV NODE_ENV=production
ENV NITRO_PORT=3000
ENV PORT=3000
ENV HOST=0.0.0.0

# Copy only what is needed to run the built app
COPY --from=build /app/package.json /app/package-lock.json ./
COPY --from=build /app/.output ./.output

# Install only production dependencies (ignore postinstall so nuxt prepare is not run)
RUN npm ci --omit=dev --ignore-scripts

EXPOSE 3000

# Start the Nitro server produced by `nuxt build`
CMD ["node", ".output/server/index.mjs"]


