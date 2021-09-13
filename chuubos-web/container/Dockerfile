FROM node:current-buster as build0

WORKDIR /srv
COPY  . ./
RUN npm install
RUN npm run build


FROM nginxinc/nginx-unprivileged
COPY --from=build0 /srv/dist /usr/share/nginx/html/
COPY  ./startup.sh /srv/startup.sh
COPY ./etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
USER root
RUN ["touch", "/usr/share/nginx/html/config.txt"]
RUN ["chmod", "666", "/usr/share/nginx/html/config.txt"]
USER $UID
ENTRYPOINT [ "/srv/startup.sh"]


