const { BLOOD_GROUP } = require("./BLOOD_GROUP");
const { GENDER } = require("./GENDER");

const students = [
    {
        firstName: "Dinesh",
        lastName: "Iyyandurai",
        dateOfBirth: "25-07-2000",
        gender: GENDER.MALE,
        student_id: "2017_BE_CSE_A_03",
        bloodGroup: BLOOD_GROUP.B_POSITIVE,
        phoneNumber: "8768576893",
        email: "dineshi@gmail.com",
        address: "Mettur, Salem, Tamilnadu, India"
    },
    {
        firstName: "Anushree",
        lastName: "Jayasri",
        dateOfBirth: "25-07-1998",
        gender: GENDER.FEMALE,
        student_id: "2017_BE_IT_B_01",
        bloodGroup: BLOOD_GROUP.A_POSITIVE,
        phoneNumber: "8758398764",
        email: "anushree@gmail.com",
        address: "Coimbatore, Tamilnadu, India"
    },
    {
        firstName: "Nishanth",
        lastName: "K",
        dateOfBirth: "25-01-1999",
        gender: GENDER.MALE,
        student_id: "2017_BE_IT_A_02",
        bloodGroup: BLOOD_GROUP.O_POSITIVE,
        phoneNumber: "8940597683",
        email: "nishanthk@gmail.com",
        address: "Hopes, Coimbatore, Tamilnadu, India"
    },
    {
        firstName: "Ragavan",
        lastName: "G",
        dateOfBirth: "01-01-1997",
        gender: GENDER.MALE,
        student_id: "2017_BE_IT_A_04",
        bloodGroup: BLOOD_GROUP.B_POSITIVE,
        phoneNumber: "8785939687",
        email: "ragavang@gmail.com",
        address: "Avinashi, Coimbatore, Tamilnadu, India"
    }
];

module.exports = {
    students
};
