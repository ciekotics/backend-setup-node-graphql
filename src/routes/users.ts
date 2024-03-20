import { Router } from "express";
import { createUser, getUsers, getUsersId } from "../handlers/users";

const router = Router();

// '/api/users'
router.get('/', getUsers)

// '/api/users/123'
router.get('/:id', getUsersId)

router.post('/', createUser)

export default router;