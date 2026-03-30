const UserStatsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  weight: { type: Number, required: true },
  waistCircumference: { type: Number, required: true }
});

module.exports = mongoose.model('UserStats', UserStatsSchema);