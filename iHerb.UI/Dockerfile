FROM node:6

# Create app directory
WORKDIR /app

# This should speed up the build by caching the yarn output unless package.json or yarn.lock is changed
ADD ./package.json /app/package.json
ADD ./yarn.lock /app/yarn.lock

RUN npm install -g http-server && \
    npm install -g yarn && \
    yarn

# Copy the current directory contents into the container at /app
ADD . /app

#ENV CART_API_URL https://checkout-api.iherb.biz/
ENV CART_API_URL https://checkout-api.iherbtest.biz/

#RUN echo "http://dl-cdn.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories
#RUN echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories
#RUN echo "http://dl-cdn.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories
#RUN apk --no-cache update && \
#  apk --no-cache upgrade && \
#  apk add --no-cache --update \
#   git \
#   patch

# This is needed if you're building the docker image on a Windows machine
#RUN find . -type f -exec sed -i 's/\x0d//g' {} \+

RUN npm run bootstrap:web && \
    npm run build:webpack --prefix platforms/web/ && \
    npm run clean

EXPOSE 3000

CMD [ "http-server", "platforms/web/dist/", "-p", "3000" ]