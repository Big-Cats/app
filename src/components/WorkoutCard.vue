<template>
    <div>
        <p>Excercise 1</p>
        <p>Exercise 2</p>
        <form>
            <select>
                <option v-for="movement in movements"
                :movement="movement"
                :key="movement.id"
                :name="movement.name">{{ movement.name }}</option>
            </select>
        </form>
    </div>
</template>

<script>
export default {
  props: {
    movements: Array
  }

};
</script>

<style>

</style>
