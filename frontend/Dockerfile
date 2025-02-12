FROM nginx:alpine

# Copy the static HTML, CSS, and JS files to the Nginx public directory
COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]