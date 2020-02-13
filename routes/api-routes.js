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
    app.post("/api/workouts/:_id", (req, res) => {
        let exercises = {
            type: req.body.type,
            name: req.body.name,
            duration: req.body.duration,
            weight: req.body.weight,
            reps: req.body.reps,
            sets: req.body.sets,
            distance: req.body.distance
        }
        db.Workout.update({
            _id: req.params._id
        },
        {
            $push: {
                exercises
            }
        })
        //   .then(({}) => db.Workout.findOneAndUpdate({_id: mongojs.ObjectId(req.params.id)}, { $set: { exercises } }, { new: true }))
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
      });

    // Viewing workout stats
};