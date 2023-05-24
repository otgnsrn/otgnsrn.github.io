
import express, { Router } from 'express'

const router = express.Router();
//const router = require('express').Router()
const returnSuccess = {"success": true}

const demoCategories = [
    {"id": 1, "name": "Category1"},
    {"id": 2, "name": "Category2"},
    {"id": 3, "name": "Category3"},
    {"id": 4, "name": "Category4"},
    {"id": 5, "name": "Category5"},
];

/**
 * @openapi
 * /category:
 *  get:
 *      description: Finds all categories
 *      responses: 
 *          200:
 *              description: Categories in a json format.
 *          500:
 *              description: Error parsing... 
 */
router.get('/', (req, res) => {
    res.send(demoCategories);
})

/**
 * @openapi
 * /category:
 *  post:
 *      summary: Creates a new category
 *      requestBody:
 *          description: Optional description in *Markdown*
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      properties:
 *                          category_name:
 *                              type: string
 *                              description: category name
 *      responses:
 *          201:
 *              description: Category added successfully.
 *          412:
 *              description: Category name is not valid.
 *          422:
 *              description: Already exists or has an error.
 */
router.post('/', (req, res) => {
    console.log(req.body.category_name);
    demoCategories.push({"id": demoCategories.length+1, "name": req.body.category_name});
    res.status(201).send(returnSuccess);
})

/**
 * @openapi
 * /category/{id}:
 *  get:
 *      summary: Fetches category by id
 *      parameters:
 *       - in: path
 *         name: id
 *         description: category id
 *         required: true
 *         type: integer
 *      responses:
 *       200:
 *          description: Categories in a json format.
 *       500:
 *          description: Error parsing...
 */
router.get("/id", (req, res) => {
    res.status(200).send(returnSuccess);
})
export default router;
//module.export = router