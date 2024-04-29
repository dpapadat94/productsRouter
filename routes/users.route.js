import express from "express";
import db from "../mockdb";

const router = express.Router();

// request will reach these routes already matching /api/users

/**
 * Read user data
 * If ID url is provided, get one user
 * Else get all users
 */
router.get("/:id?", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data;

    if (id) {
      data = await db.getOne(id);
    } else {
      data = await db.getAll();
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
});

/**
 * Create a new user
 * New user data is sent with request body
 */
router.post("/", async (req, res, next) => {
  try {
    let newUser = req.body;
    let data = await db.add(newUser);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

/**
 * Update existing user
 * Updated user data is sent with request bosy
 * User to be updated is id url paramater
 */
router.put("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let updatedUser = req.body;
    let data = await db.update(id, updatedUser);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

/**
 * Delete existing user
 * User to be deleted is id url paramater
 */
router.delete("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data = await db.remove(id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
