<template>
  <form>
    <FormControl label="Add Exercise">

        <FormControl label="Muscles">
          <select 
            v-if="muscleMovements"
            v-model="selectedMuscle"
            v-on:change="handleChange"
          >
            <option 
              v-for="muscle in muscles"
              :key="muscle.id"
            >
              {{ muscle.name }}
            </option>
          </select>
        </FormControl>
        
        <FormControl label="Movements">
          <select>
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

        <FormControl label="Sets">
          <select>
            <option
              v-for="element in [1,2,3,4,5,6,7,8,9,10]"
              :key="element"
            >
              {{ element }}
            </option>
          </select>          
        </FormControl>

        <FormControl label="Reps">
          <select>
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
    handleAddLog: Function
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

select {
  /* width: fit-content; */
  width: 200px;
}

form {
  width:fit-content;
}

</style>
