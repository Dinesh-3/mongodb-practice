const { Schema, model } = require("mongoose");
const BLOOD_GROUP = require("../data/BLOOD_GROUP");
const GENDER = require("../data/GENDER");

const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        validate: {
            validator: function (value) {
                return value != null; // condition TRUE / FALSE
            },
            message: "First Name Field Is Required" // Custom Message
        }
    },
    lastName: { type: String, required: true, minlength: 1 },
    dateOfBirth: { type: String, required: true, format: "date" },
    gender: { type: String, required: true, enum: Object.values(GENDER) },
    student_id: { type: String, required: true },
    bloodGroup: { type: String, required: true, enum: Object.values(BLOOD_GROUP) },
    phoneNumber: {
        type: String,
        required: function () {
            return this.email == null;
        }
    },
    email: { type: String, required: true, match: /.*@.*\..*/ },
    address: { type: String, required: true },
    rank: {
        type: Number,
        min: 1,
        max: 5
    }
});

const Student = model("student", StudentSchema);

module.exports = Student;
