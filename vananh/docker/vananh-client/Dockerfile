FROM node:12.18.3-buster-slim

ARG buildno
RUN echo "Build number: $buildno"

WORKDIR /usr/src/app

# install serve for static serve
RUN npm install -g serve

# npm ci modules and build
RUN npm ci
RUN npm run build

EXPOSE 3000
CMD [ "serve", "-s", "build", "-l", "3000" ]
