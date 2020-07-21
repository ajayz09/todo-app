const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minlength: 1
    },
    _userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    }
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;