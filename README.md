# LAB - 401-lab-09

## API server

### Author: Travis Skyles

### Links and Resources
* [submission PR](https://github.com/tskyles-401-advanced-javascript/401-lab-09/pull/1)
* [travis](http://xyz.com)
* [back-end](https://lab-09-401-tskyles.herokuapp.com/)
* [mongo-model npm](https://www.npmjs.com/package/@tskyles/mongo-model)

#### Documentation
* [api docs](https://lab-09-401-tskyles.herokuapp.com/api-docs)
* Run /docs/global.html with live server to view jsdocs

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### How to initialize/run your server app (where applicable)
* Start App: `npm start`
* Endpoint: /api-docs
  * Returns api-documentation
* Endpoint: /docs
  * Returns JSdocs
* Endpoint: /api/v1/products
  * Returns all products
* Endpoint: /api/v1/products/:id
  * Returns specific products
* Endpoint: /api/v1/categories
  * Returns all categories
* Endpoint: /api/v1/categories/:id
  * Returns specific category
  
#### Tests
* Unit Tests: `npm test`
* Eslint: `npm run lint`

#### UML
![](./assets/lab-09.jpg)