import express from 'express';
import { responseMessage } from '../controller/authController';
const router = express.Router()

router.get("/:message", responseMessage)
module.exports = router

