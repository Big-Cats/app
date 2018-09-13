<template>
  <div>
    <h3>{{ exercise.movement.toUpperCase() }}</h3>
    <div 
      class="set"
    >
      <button
        v-for="(set, index) in exercise.sets"
        :key="index"
        @click="markAsCompleted(i)" 
        class="set__checkbox" 
        :class="{set__checkbox__completed: set.completed}"
      > 
        {{ set.attempted }}
      </button>

    </div>

    <button class="remove-exercise" @click="onExerciseRemove">
      x
    </button>

  </div>
</template>

<script>
export default {
  props: {
    exercise: Object,
    workout: Object,
    workoutIndex: Number,
    handleRemoveExercise: Function
  },
  data() {
    return {
      set: {
        completed: false
      }
    };
  },
  computed: {
    setList() {
      return this.workout.exercises[this.workoutIndex].sets;
    }
  },
  methods: {
    markAsCompleted(index) {
      console.log('i will mark a log as completed', 'index is', index);
      // this.goals[index].completed = !this.goals[index].completed;
      // updateGoal(this.goals[index]);
    },
    onExerciseRemove() {
      const idArray = [];
      this.setList.forEach(item => idArray.push(item.logId));
      this.handleRemoveExercise(idArray);
    }
  }
};
</script>

<style>

.set,
.add {
  display: inline-block;
}


.set__checkbox,
.set__delete {
  background-color: var(--gymred);
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  height: 24px;
  width: 24px;
}

.remove-exercise {
  background-color: black;
  color: white;
  display: inline;
  margin-left: 30px;
  padding: 5px;
  width: 30px;
  height: 30px;
}

</style>
