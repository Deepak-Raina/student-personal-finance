const mongoose = require('mongoose');

const projectIdeaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: String,
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    problem: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    budget: {
        type: String,
        required: true
    },
    market: {
        type: String,
        required: true
    },
    usp: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    timeline: {
        type: String,
        required: true
    },
    documents: [String],
    terms: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('ProjectIdea', projectIdeaSchema);
