# Stage 1: Build
FROM node:22-alpine AS build-step
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
# Đảm bảo file nginx.conf tồn tại ở máy bạn
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy đúng thư mục browser vào nginx
COPY --from=build-step /app/dist/Clyvasync_Network/browser /usr/share/nginx/html
EXPOSE 80