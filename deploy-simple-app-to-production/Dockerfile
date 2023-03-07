FROM node:buster-slim

RUN apt update
RUN apt install -y curl

RUN mkdir /script
COPY ./secret.sh /script
RUN chmod +x /script/secret.sh

WORKDIR /app

COPY ./package.json .
RUN npm i

COPY . /app

RUN groupadd -r simpleuser
RUN useradd -g simpleuser simpleuser
RUN chown -R simpleuser:simpleuser /app
USER simpleuser

HEALTHCHECK CMD curl --fail http://localhost:3000/ || exit 1