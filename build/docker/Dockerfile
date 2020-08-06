FROM node:14.7.0-alpine3.12

COPY build/docker/.npmrc build/docker/.yarnrc ~/

WORKDIR /notion-blog

RUN set -ox pipefail \
  && apk update \
  && apk add --no-cache vim yarn \
  && rm -rf /var/cache/apk/*s

COPY . .
