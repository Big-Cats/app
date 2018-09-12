<template>

  <form class="add-exercise">
    <FormControl label="Add Exercise" >

        <FormControl label="Muscles" class="exercise-selector">
          <select 
            v-if="muscleMovements"
            v-model="selectedMuscle"
            v-on:change="handleChange"
            class="pulldown"
          >
            <option 
              v-for="muscle in muscles"
              :key="muscle.id"
            >
              {{ muscle.name }}
            </option>
          </select>
        </FormControl>
        
        <FormControl label="Movements" class="exercise-selector">
          <select
            class="pulldown"
          >
            <option 
              v-for="movement in muscleMovements[this.selectedMuscle]"
              :movement="movement"
              :key="movement.id"
              :name="movement.name"
            >
              {{ movement.name }}
            </option>
          </select>
        </FormControl>

        <FormControl label="Sets" class="exercise-selector">
          <select class="pulldown">
            <option
              v-for="element in [1,2,3,4,5,6,7,8,9,10]"
              :key="element"
            >
              {{ element }}
            </option>
          </select>          
        </FormControl>

        <FormControl label="Reps" class="exercise-selector">
          <select class="pulldown">
            <option
              v-for="element in [1,2,3,4,5,6,7,8,9,10]"
              :key="element"
            >
              {{ element }}
            </option>
          </select>          
        </FormControl>


      </FormControl>
      <button @click.prevent="onExerciseAdd">Add</button>
  </form>
</template>

<script>
import FormControl from './FormControl.vue';
export default {
  
  props: {
    movements: Array,
    muscles: Array,
    muscleMovements: Object,
    selectedMuscle: String,
    handleAddLog: Function,
  },
  components: {
    FormControl
  },
  computed: {
    selectMuscle() {
      return null;
    }
  },
  methods: {
    handleChange() {
      // use selectedMuscle
      // selectedMuscle
    },

    onExerciseAdd() {
      console.log('I will add the new exercise');
      console.log(Object.keys(this.muscleMovements));
      // handleAddLog();
    }


  }

};
</script>

<style>
.add-exercise {
  display: flex;
  border: 2px solid #C97560;
  background-color: #F7EDEA;
  border-radius: .5em;
  padding: .5em 0 1em 1em;
}

.exercise-selector {
  display: inline-block;
  margin: auto;
  padding: 0 .2em;
  border-radius: .3em;
  border: 1px solid #C97560;
}

.pulldown {
  border-radius: .2em;
}

</style>
