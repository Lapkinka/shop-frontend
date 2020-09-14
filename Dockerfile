FROM node:12.18.3

#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app
WORKDIR /app

#ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV PATH /app/node_modules/.bin:$PATH

#COPY package.json /usr/src/app/package.json
COPY package.json /app/package.json
RUN npm install

#COPY . /usr/src/app
COPY . /app

CMD npm run build
CMD npm run start
#EXPOSE 8000

#CMD ["python","manage.py","migrate"]
#CMD ["python","manage.py","runserver","178.250.243.221:8080"]
#CMD ["python","manage.py","runserver","0.0.0.0:8080"]