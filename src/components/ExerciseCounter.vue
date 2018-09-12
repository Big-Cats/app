<template>
  <div>
    <h3>Exercise Counter</h3>
    <div 
      class="set"
      v-for="(exercise,key) in exercises" 
      :key="exercise"
    >
      <p>{{ exercise.movement }}</p>
      <button
        v-for="(set, index) in exercise[key]"
        :key="index"
        @click="markAsCompleted(i)" 
        class="set__checkbox" 
        :class="{set__checkbox__completed: set.completed}"
      > 
        {{ exercise.attempted }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    exercises: Object,
  },
  data() {
    return {
      set: {
        completed: false
      }
    };
  },

  methods: {
    markAsCompleted(index) {
      console.log('i will mark a log as completed', 'index is', index);
      // this.goals[index].completed = !this.goals[index].completed;
      // updateGoal(this.goals[index]);
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

</style>
