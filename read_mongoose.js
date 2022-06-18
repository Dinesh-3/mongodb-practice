const Student = require("./models/Student");

async function updateStudent({ id, firstName, lastName }) {
    const updatedStudent = await Student.findByIdAndUpdate(
        id,
        {
            $set: {
                firstName,
                lastName
            }
        },
        { new: true } // will return updated entry, NOTE: if it false (DEFAULT) record before updating will be returned
    );
}
