# Cacofonix

Small concert songbook app. Consisting of three docker containers.
MongoDB as a storage, Payload CMS for administration and Next.js frontend.

You can set up song list, performers, about page and currently happening page.

## Installation
App is designed primarily to be run in docker on linux. 
Thus `docker` and `docker-compose` are mandatory dependencies for this example setup.

I don't have prebuilt images in docker hub ready yet (but it's planned), so you have to build them locally. 
Docker compose should build images for you from sources...

2. Copy `.env.dist` to `.env` and edit it as needed.
3. Create an `docker-compose.override.yml` file and override configuration by your liking.
You should at least add proxy with tls termination.
4. Start the up by command
```docker compose up -d```

## Config
All configuration is done by env vars. 
Just edit `.env` file. 

