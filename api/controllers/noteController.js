import Note from "../model/noteModel.js";
import { errorHandler } from "../utils/error.js"


export const createNote = async (req, res, next) => {
    const { title, description } = req.body
  
    const { id } = req.user
  
    if (!title) {
      return next(errorHandler(400, "Title is required"))
    }
  
    if (!description) {
      return next(errorHandler(400, "description is required"))
    }
  
    try {
      const note = new Note({
        title,
        description,
      
        userId: id,
      })
  
      await note.save()
  
      res.status(201).json({
        success: true,
        message: "Note added successfully",
        note,
      })
    } catch (error) {
      next(error)
    }
  }
  