FROM nginx:stable-alpine

RUN sed -i '1idaemon off;' /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/index.html /usr/share/nginx/html/index.html
COPY dist/upload /usr/share/nginx/html/upload


EXPOSE 8080

CMD ["nginx"]
