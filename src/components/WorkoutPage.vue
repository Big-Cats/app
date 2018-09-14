<template>
    <main>
      <WorkoutDetail
          :workout="workout"
          :movements="movements"
          :muscles="muscles"
          :muscleMovements="muscleMovements"
          :exercises="workout.exercises"
          :handleAddLog="handleAddLog"
          :handleAddWorkout="handleAddWorkout"
          :handleRemoveWorkout="handleRemoveWorkout"
          :handleRemoveExercise="handleRemoveExercise"
          :handleUpdateLog="handleUpdateLog"
      />        
    </main>
</template>

<script>
import WorkoutDetail from './WorkoutDetail.vue';
import AddWorkout from './AddWorkout.vue';

export default {
  props: {
    workoutSet: Array,
    programSet: Array,
    movements: Array,
    muscles: Array,
    muscleMovements: Object,
    handleAddLog: Function,
    handleAddWorkout: Function,
    handleRemoveExercise: Function,
    handleRemoveLog: Function,
    handleUpdateLog: Function,
    handleRemoveWorkout: Function
  },
  data() {
    return {
      workout: this.getWorkout(this.$route.params.id)
    };
  },
  created() {

  },
  components: {
    WorkoutDetail,
    AddWorkout
  },
  methods: {
    getWorkout(id) {
      //make this run after getting workoutset via app routes      
      return this.workoutSet[id];
    }
  }

};
</script>

<style>

@font-face {
    font-family: BOMBARD;
    src: url("../assets/fonts/BOMBARD.ttf") format("opentype");
}


.call-to-action {
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0);
  color: var(--gymred);
  text-shadow: 2px 2px black;
  font-size: 72px;
  border: 5px solid var(--gymred);
  border-radius: 20px 20px;
  padding: 8px;
}

main {
  background: url(../assets/background.jpg);
  background-size: cover;
}





</style>
