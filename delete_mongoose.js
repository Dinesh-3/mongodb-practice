const Student = require("./models/Student");

async function deleteStudent(id) {
    Student.deleteOne({ _id: id });

    Student.deleteMany({ _id: id });

    Student.findByIdAndDelete(id); // will return deleted record
}
