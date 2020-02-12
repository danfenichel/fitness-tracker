var db = require("../models");

module.exports = function(app) {
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body).then(response => {
            res.json(response);
        });
    });

    
};