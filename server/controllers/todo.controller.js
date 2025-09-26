import ListModel from "../models/list.model.js";
import UserModel from "../models/user.model.js";

async function createTodo(req, res) {
  try {
    const { title, body } = req.body;

    if (!title || !body) {
      return res.status(400).json({
        message: "Title and Body required",
      });
    }

    const todo = await ListModel.create({
      title,
      body,
      user: req.user._id,
    });

    const updatedUser = await UserModel.findByIdAndUpdate(req.user._id, {
      $push: {
        lists: todo._id,
      },
      
    }, { new: true })
    .populate("lists")
    .select("-password")

    res.status(201).json({
      message: "Todo created successfully",
      todo,
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
}

async function getTodos(req, res) {
  try {
    const todos = await ListModel.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      todos,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
}

async function updateTodo(req, res) {
  try {
    const { id } = req.params;
    const { title, body } = req.body;

    const todo = await ListModel.findOne({
      _id: id,
      user: req.user._id,
    });

    if (!todo) {
      return res.status(404).json({
        message: "todo not found",
      });
    }

    if (title) todo.title = title;
    if (body) todo.body = body;

    await todo.save();

    res.status(200).json({
      message: "Todo updated successfull",
      todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
}

async function deleteTodo(req, res) {
  try {
    const { id } = req.params;

    const todo = await ListModel.findOneAndDelete({
      _id: id,
      user: req.user._id,
    });

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    await UserModel.findByIdAndUpdate(req.user._id, {
      $pull: {
        lists: todo._id,
      },
    });

    res.status(200).json({
      message: "Todo deleted successfully",
      todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
}

async function toggleTodo(req, res) {
  try {
    const { id } = req.params;

    const todo = await ListModel.findOne({ _id: id, user: req.user._id });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    // flip the completed state
    todo.completed = !todo.completed;
    await todo.save();

    res.status(200).json({
      message: `Todo marked as ${todo.completed ? "completed" : "incomplete"}`,
      todo,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}


export default {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  toggleTodo,
};
