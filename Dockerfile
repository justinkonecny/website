FROM nginx:latest

# copy static website export to nginx default serve directory
COPY out/ /usr/share/nginx/html/

# copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
