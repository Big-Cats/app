<template>
  <button
    @click="onLogUpdate(index)" 
    class="set__checkbox" 
    :class="{set__checkbox__completed: this.isComplete}"
  > 
    {{ completed }}

  </button>

</template>

<script>
export default {
  props: {
    handleUpdateLog: Function,
    set: Object
  },
  computed: {
    completed() {
      return this.set.completed;
    },
    isComplete() {
      return this.completed !== null;
    }
  },
  methods: {
    markAsCompleted(index) {
      console.log('i will mark a log as completed', 'index is', index);
      // this.goals[index].completed = !this.goals[index].completed;
      // updateGoal(this.goals[index]);
    },
    onLogUpdate() {
      // nice job on handling tri-set: null vs >0 vs 0
      
      if(!this.isComplete){
        this.set.completed = this.set.attempted;
      }
      else if(this.set.completed <= this.set.attempted && this.set.completed > 0){
        this.set.completed--;
      }
      else if(this.set.completed === 0){
        this.set.completed = null;
      }

      const log = {
        id: this.set.logId,
        attempted: this.set.attempted,
        completed: this.set.completed,
        weight: this.set.weight
      };

      this.handleUpdateLog(log);
    }

  }
};
</script>

<style>

.set__checkbox,
.set__delete {
  background-color: var(--gymred);
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  height: 36px;
  width: 36px;
  margin: 0px 5px;
}

.set__checkbox__completed {
  opacity: 0.45;
  background-color: black;
  color: white;
}

.set__checkbox:hover {
  opacity: 0.75;
}





</style>
