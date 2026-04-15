# Stage 1: Build
FROM node:22-alpine as build-step
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve với Nginx
FROM nginx:alpine
# Copy file config nginx (nếu bạn đã tạo)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# QUAN TRỌNG: Copy từ thư mục /browser
COPY --from=build-step /app/dist/Clyvasync_Network/browser /usr/share/nginx/html

EXPOSE 80

