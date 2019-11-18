# Chatroom WebApp

[![Build Status](https://travis-ci.com/zaffranad/chatroom-web.svg?branch=master)](https://travis-ci.com/zaffranad/chatroom-web)

This is the web client for the Chatroom Backend providing the most simple chat interface.

## Made with Angular

This app consumes the backend endpoints, and gets notified, almost immediately when a message was posted.
To do this in 'realtime mode', ServerSentEvent is used, allowing server to push messages (more precisely events), to the client.

## Run and Watch!

While you're at the root of the repository:

`npm run serve`

This will start the application on port 4200 (default)... or run the following to use a different port:

`ng serve --watch --open`

## Wanna deploy?

Having fun with this app, if you want to build and deploy:

`ng build --prod`

## Continuous Integration

A automated build is configured on Travis CI (hey, look the nice badge at the top of this page!).

The configuration is located in the travis.yml file at the root of the project.

Check here: [Here!](https://travis-ci.com/zaffranad/chatroom-web)


