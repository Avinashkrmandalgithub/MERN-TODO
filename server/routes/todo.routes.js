import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import todoController from '../controllers/todo.controller.js';


const router = express.Router();

router.post("/", authMiddleware, todoController.createTodo);
router.get("/", authMiddleware, todoController.getTodos);
router.put("/:id", authMiddleware, todoController.updateTodo);
router.delete("/:id", authMiddleware, todoController.deleteTodo);
router.patch("/:id/toggle", authMiddleware, todoController.toggleTodo);


export default router;