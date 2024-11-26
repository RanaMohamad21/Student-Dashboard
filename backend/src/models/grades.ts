import mongoose from 'mongoose';

const gradeSchema = new mongoose.Schema({
    gradeName:{
        type: String,
        required: true
    },
    subjects:{
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
        }],
        validate: {
            validator: (v:mongoose.Types.ObjectId[])=> v.length >0,
            message: "A grade must have at least one subject."
        }
    }
}, { timestamps: true })

module.exports = mongoose.model("Grade", gradeSchema);