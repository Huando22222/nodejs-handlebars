const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String, maxlength: 600},
        image: {type: String, maxlength: 255},
        videoId: {type: String, required: true},
        
        slug: {type: String, slug: 'name' },   //error 
        // slug: {type: String, slug: 'name',unique: true},
    },{
        timestamps: true,
    },
);

Course.plugin(mongooseDelete,{ 
    deletedAt : true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
