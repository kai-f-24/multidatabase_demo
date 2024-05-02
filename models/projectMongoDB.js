const mongoose = require("mongoose");
const ProjectBasic = new mongoose.Schema({
    name: { // プロジェクト名
        type: String,
        required: true,
    },
    skill: { //プロジェクトで使用するスキルを配列で格納
        type: [String]
    },
    caption: { // 200文字以内でプロジェクトについての説明を格納
        type: String,
        required: true,
        // maxlength: 200,
    }
});

const ProjectHome = mongoose.model("ProjectHome", ProjectBasic);

module.exports = ProjectHome ;