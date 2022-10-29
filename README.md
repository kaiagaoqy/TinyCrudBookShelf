# Tiny-CRUD-BookShelf
It is a small RESTful project to realize a CRUD bookshelf with Node.js.

The user enters a favorite book name, clicks on the button, and the book name gets stored in a database. Then it redirects to a page (or uses the same page) to show the list of all favorite books stored in the database.

## Stack
1. Framework: Node.js, express, ejs
2. DataBase: MongoDB
3. Frontend: BootStrap


## Deployment
### Node.js
 "dependencies": {
    "body-parser": "^1.20.0",    
    "ejs": "^3.1.8",    
    "express": "^4.18.1",    
    "lodash": "^4.17.21",    
    "mongoose": "^6.6.1",    
    "nodemon": "^2.0.20"    
  }    

```js 
npm i body-parser
npm i express   
npm i mongoose 
npm i lodash
npm i ejs
```    
### MongoDB
1. Download MongoDB locally and install Mongosh
 * [how to download mongoDb on Windows](https://www.mongodb.com/docs/manual/installation/)
 * [how to download mongoDb on MacOS](https://blog.londonappbrewery.com/how-to-download-install-mongodb-on-mac-2895ccd2b5c1)
2. Test your Mdatabase
 * Run `mongosh` without any command-line options to connect to a MongoDB instance running on your localhost with default port 27017:
 * This is equivalent to the following command:
 ``` bash
 $ mongosh "mongodb://localhost:27017"
 ```
 
 [More detail to initiate MongoDB](https://www.mongodb.com/docs/mongodb-shell/connect/#std-label-mdb-shell-connect)

## Run
1. Initiate Database
 * This project use default local port
``` bash
$ mongosh
```
2. Run main code
``` js
node main.js
```
![image](https://user-images.githubusercontent.com/112206446/191115001-11e8eb23-8a9a-4e7a-8101-3342a7d444df.png)

## Functions
### Home Page
![home-page](https://user-images.githubusercontent.com/112206446/191116899-c461b620-d4ef-43af-9b06-1beea019d457.png)
### List Page
![list-page](https://user-images.githubusercontent.com/112206446/191116844-c3da9661-57d0-48ba-8cae-0522a9e30ed4.png)
### Add Page
![add-page](https://user-images.githubusercontent.com/112206446/191116765-38cbac69-7cc9-42d9-8827-7c046e4941ce.png)


