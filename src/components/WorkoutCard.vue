<template>
    <li>
      <p class="date">{{ workoutDate.toLocaleString() }}</p>
      <button class="remove-workout" @click="onWorkoutRemove">x</button>
      <ExerciseCounter
        v-for="(exercise, index) in exercises"
        :key="index"
        :exercise="exercise"
        :workout="workout"
        :workoutIndex="index"
        :handleRemoveExercise="handleRemoveExercise"
        :handleUpdateLog="handleUpdateLog"
      > 
      </ExerciseCounter>
      <AddExercise 
        :movements="movements"
        :muscles="muscles"
        :workout="workout"
        :muscleMovements="muscleMovements"
        :handleAddLog="handleAddLog"
      />
    </li>
</template>

<script>
import AddExercise from './AddExercise.vue';
import ExerciseCounter from './ExerciseCounter.vue';

export default {
  props: {
    movements: Array,
    muscles: Array,
    muscleMovements: Object,
    exercises: Array,
    workout: Object,
    handleAddLog: Function,
    handleRemoveExercise: Function,
    handleUpdateLog: Function,
    handleRemoveWorkout: Function

  },
  components: {
    AddExercise,
    ExerciseCounter
  },
  computed: {
    workoutDate() {
      return new Date(this.workout.date);
    }
  },
  methods: {
    onWorkoutRemove() {
      // const idArray = [];
      // this.setList.forEach(item => idArray.push(item.logId));
      // this.handleRemoveExercise(idArray);

      // console.log(this.workout);
      this.handleRemoveWorkout(this.workout);
    }
  }



};
</script>

<style>


li {
  border: 1px solid black;
}
.date {
  float: left;
}

.remove-workout {
  background-color: black;
  color: white;
  float: right;
  margin-left: 30px;
  padding: 5px;
  width: 30px;
  height: 30px;
}

</style>
