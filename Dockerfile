# ===========================================
# 1) BUILD STAGE
# ===========================================
FROM node:18-alpine AS builder

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (include devDependencies for the build)
RUN npm install

# Copy all project files
COPY . .

# Build Next.js (standalone mode)
RUN npm run build

# ===========================================
# 2) RUNNER STAGE — Ultra light
# ===========================================
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy only the necessary runtime files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# Run the Next.js standalone server
CMD ["node", "server.js"]
