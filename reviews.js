var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var ReviewSchema = new Schema({
    ReviewerName: { type: String, required: true, trim: true},
    Quote: { type: String, required: true, trim: true},
    rating: { type: Number, enum: [0,  1,  2,  3,  4,  5], required: [true, 'missing rating'] },
    MovieName: { type: String, required: true, trim: true},
    Comments: { type: [ { comentatorName: String, comment: String } ], required: [true, 'missing comment']}
});


module.exports = mongoose.model('Review', ReviewSchema);
