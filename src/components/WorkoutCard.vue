<template>
    <li class="workout-card">
      <div class="card-header">
        <p class="date">{{ workoutDate.toLocaleString() }}</p>
        <button class="remove-workout" @click="onWorkoutRemove">x</button>
      </div>
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

      console.log('stop clicking me');
      this.handleRemoveWorkout(this.workout.id, this.workout.date);
    }
  }



};
</script>

<style>


li {
  border: 1px solid black;
}
/* .date {
  width: 100%;
} */
.card-header {
  display: flex;
  justify-content: space-between;
}
.remove-workout {
  background-color: black;
  color: white;
  width: 30px;
  height: 30px;
}

</style>
