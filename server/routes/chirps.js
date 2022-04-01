import * as express from "express";
const router = express.Router();
// const chirpsStore = require("../chirpstore.js");
// no more chirpstore! install mysql from npm and configure the routes to use that instead of chirpstore.

import db from "../db";

// REST API
router.get("/:id?", async (req, res) => {
    try {
    const id = req.params.id;

    if (id) {
        const chirp = await db.chirps.one(id);
        // const chirp = chirpsStore.GetChirp(id);
        res.json(chirp);
    } else {
        const chirps = await db.chirps.all();
        res.json(chirps);
    }
} catch (err) {
    console.log(err);
}
});

// Create
router.post("/", async (req, res) => {
    try {
        const body = req.body;

        const dbres = await db.chirps.insert(body.userid, body.conent, body.location);
        res.status(200).send(dbres);
    } catch (err) {
        console.log(err);
    }
});

// Delete
router.delete("/:id", async (req, res) => {
    try{
        const id = req.params.id;
        
        const dbres = await db.chirps.destroy(id);
        res.status(200).json(dbres);
    }catch(err){
        console.log(err);
    }
    
});

// Update
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const conent = req.body.conent;

        const dbres = await db.chirps.edit(id, conent);

        res.sendStatus(200).json(dbres);
    } catch (error) {
        console.log(err);
    }
});

export default router;