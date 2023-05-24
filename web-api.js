// const express = require("express");
// const app = express();
// const port = 5000;
// app.get('/', (req, res) => {
// res.send(`Hello World!`)
// })
 
// app.listen(port, () => {
// console.log(`Server is listening at http: //localhost:port`)
// })

import express from "express";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import category from './routes/category.js';


const port = 5000;
const app = express();

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'WebAPI demo api',
            version: '1.0.0',
        },
    },
    apis: ['./web-api.js', './routes/*.js'], 
};

const openapiSpec = await swaggerJSDoc(options);
const UIoptions = {
    explorer: true  
};
app.use(express.json());
app.use("/category", category);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpec, UIoptions));

/**
 * @openapi
 * /:
 *  get:
 *     description: Manual document
 *     responses: 
 *      200:
 *          description: Manual documentation in HTML format.
 *      500:
 *          description: Error parsing...
 */

app.get("/", (req, res) => {
    res.send(``);
})

/**
 * @openapi
 * /products:
 *  get:
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *          200:
 *              description: Retruns a mysterious string.
 */

app.get('/product', (req, res) => {
    res.send('{"products":[{"id":"1", "name":"Product1"}, {"id":"2", "name":"Product2"}]}')
})

app.listen(port, () => {
    console.log(`Server is listening at http:`)
})
