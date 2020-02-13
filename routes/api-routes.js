var db = require("../models");

module.exports = function(app) {
    // Creating new workout in the database
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body).then(response => {
            res.json(response);
        });
    });

    // Getting last workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
      });

    // Adding new exercise to new workout


    // Adding new exercise to existing workout
    app.put("/api/workouts/:_id", ({ body }, res) => {
        db.Workout.create(body)
          .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
      });
    // Viewing workout stats
};