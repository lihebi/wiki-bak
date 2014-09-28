# Docker

# Start Docker

```sh
boot2docker init
boot2docker start
export FSO_JGSO=xxxxxx # it will be output
docker ... # commands!
boot2docker stop
```

# Commands

* `docker` list all available commands
* `docker version` show docker version
* `docker search <NAME>` search for an image in the docker index
* `docker pull <username>/<repository>` download image from docker image server
* `docker run <ImageName> <command>`

```sh
docker run learn/tutorial echo 'hello world'
docker run learn/tutorial apt-get install -y ping
```

* `docker commit <containerID>` commit changes to save. 3 or 4 digits can work for containerID
* `docker commit <containerID> learn/ping`
* `docker ps` show only running container
* `docker ps -a` show all containers
* `docker ps -l` return detail of the last container
* `docker stop sleepy_hypatia` stop a container
* `docker start sleepy_hypatia` start a container
* `docker restart sleepy_hypatia` restart a container
* `docker rm sleepy_hypatia` delete a already stopped container
* `docker inspect <ID>`
* `docker images`
* `docker push`

# An example of web app

```
docker run -d -P training/webapp python app.py
```

note:

* `-d`: run the container in background
* `-P`: map any required network ports inside the container to our host.

```
docker ps
```

find the PORT 0.0.0.0:49115->5000/tcp

**49115**

```
boot2docker ip # => 192.168.59.103
```

navigate to `192.168.59.103:49115` to see result.

```
docker logs -f sleepy_hypatia
```

check the webapp's log

* `-f` means watch the output

```
docker top sleepy_hypatia
```

examine the processes running in the container.

# Images

List all local images

```
docker images
```

If the images we specify is not listed in local images, docker will download them.

```
docker run -t -i ubuntu:14.04 /bin/bash
```

run interactively.
if not specify `14.04`, it will be `ubuntu:latest`

```
docker pull centos
```

# Dockerfile

sample dockerfile:

```docker
# this is a comment
FROM ubuntu:14.04
MAINTAINER Hebi Li <hebi@example.com>
RUN apt-get update && apt-get install -y ruby ruby-dev
RUN gem install sinatra
```

build the image

```
docker build -t="lihebi/sinatra:v2" .
```

* `v2` is optional tag
* `.` means the dockerfile is in current folder

then push to dockerhub

```
docker push lihebi/sinatra
```

# tips

remove all containers

```
docker rm $(docker ps -a -q)
```

stop all containers

```
docker stop $(docker ps -a -q)
```

# Port Binding

bind automatically:

```
docker run -d -P training/webapp python app.py
```

can be viewed by

```
docker ps
```

map a specific port

```
docker run -d -p 5000:5000 training/webapp python app.py
```

map on local

```
docker run -d -p 127.0.0.1:5000:5000
```

map on local automatically

```
docker run -d -p 127.0.0.1::5000
```

map a UDP port

```
docker run -d -p 127.0.0.1:5000:5000/udp
```

check a mapping port by `docker port`

```
docker port nostalgic_morse 5000
```

`-p` can be used multiple times to configure multiple ports.

# name

Notice that containers are given a long random name.
To give a specific name for a container:

```
docker run -d -P --name web training/webapp python app.py
```

get a container's name

```
docker inspect -f "{{ .Name }}" aed84ee
```

# Container Linking

db container

```
docker run -d --name db training/postgres
```

webapp container

```
docker run -d -P --name web --link db:db training/webapp python app.py
```

link syntax: `--link name:alias`
`name` is the container name. `alias` is your name.
