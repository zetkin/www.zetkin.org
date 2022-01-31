FROM node:14

WORKDIR /var/app

ADD package.json /var/app/package.json
RUN yarn install

ADD . /var/app

CMD yarn dev
