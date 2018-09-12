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
  </div>
</template>

<script>
export default {
  props: {
    exercise: Object,
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
