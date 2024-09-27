//유저 스키마 (데이터 베이스의 설계도)
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "user must type name"],
        unique: true,
    },
    token: {
        type: String
    },
    online: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("User", userSchema);