# MERN Backend API

> Building backend using MongoDB Node and Express

## Quick Start

```bash

# Install Type Script globally
sudo npm install -g typescript ts-node

# Run Mongo DB server 
 .\mongod.exe --dbpath d:\mongodb

# Install dependencies for server
npm install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run Type Script code 
npm run dev

# Server runs on http://localhost:5000
```
# Setting up Docker
```
# setup docker for appropriate OS version

# To use docker on windows sub system use following commands


$ docker -H localhost:2375 images
$ export DOCKER_HOST=localhost:2375
$ echo "export DOCKER_HOST=localhost:2375" >> ~/.bash_profile

# Refer following link
https://medium.com/@sebagomez/installing-the-docker-client-on-ubuntus-windows-subsystem-for-linux-612b392a44c4
```
# Running in Docker
```
# Run in Docker
docker-compose up
# use -d flag to run in background

# Tear down
docker-compose down

# To be able to edit files, add volume to compose file
volumes: ['./:/usr/src/app']

# To re-build
docker-compose build

# Docker help gist
https://gist.github.com/bradtraversy/89fad226dc058a41b596d586022a9bd3
```
## App Info

### Author

ASP

### Version

1.0.0