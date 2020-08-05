FROM node:12.18.3-buster-slim

ARG buildno
RUN echo "Build number: $buildno"

WORKDIR /usr/src/app

# npm ci modules and build
RUN npm ci

EXPOSE 5000
CMD [ "npm", "run", "start" ]
