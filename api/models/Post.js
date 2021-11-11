const moongose = require('mongoose');

const PostSchema = new moongose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: false
        },
        titleLyrics: {
            type: String,
            required: true,
            unique: true
        },
        romanji: {
            type: String,
            required: true,
        },
        english: {
            type: String,
            required: false
        },
        kanji: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
);

module.exports = moongose.model('post', PostSchema);