FROM nginx:stable-alpine

LABEL authors="oh3823, ddodongit"

COPY dist/ /app

RUN cat > /etc/nginx/conf.d/default.conf <<EOF
server {
    listen 80;
    location / {
        root /app;
    }
}
EOF

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]