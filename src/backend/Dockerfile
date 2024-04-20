FROM node:latest

RUN apt-get update && \
    apt-get install -y default-jdk && \ 
    apt install -y build-essential && \
    apt install -y python3

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 5000

CMD ["node", "index.js"]
