FROM ubuntu:16.04

ENV TZ=Asia/Kolkata

RUN apt-get update && apt-get -y upgrade \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone \
    && apt-get install -y curl \
    && curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh \
    && bash nodesource_setup.sh \
    && apt-get install -y build-essential \
    && apt-get install -y nodejs \
    && npm install -g @angular/cli
    
WORKDIR /home/angular

EXPOSE 4200

COPY . .

# start app
# CMD ng serve --host 0.0.0.0