FROM node:8
# Create directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install dependencies
COPY package.json /usr/src/app/
RUN npm install
# Copy files
COPY . /usr/src/app
# RUN npm run start
EXPOSE 3000
CMD [ "npm", "start" ]
