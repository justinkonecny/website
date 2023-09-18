#!/bin/sh

docker build -t website .
docker run -it --rm -p 8080:80 website