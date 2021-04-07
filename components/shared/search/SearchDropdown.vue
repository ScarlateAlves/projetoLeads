<template>
  <select @input="$emit('input', $event.target.value)">
    <option value="">Categories</option>
    <option v-for="text in options" :key="text.id">
      {{ text }}
    </option>
  </select>
</template>
<script>
export default {
  props: ['options'],
}
</script>
<style scoped lang="scss">
select {
  width: 40%;
  height: 50px;
  font-size: 16px;
  border-radius: 4px;
  border: $border-color 1.5px solid;
  border-radius: 10px;
  color: rgb(116, 129, 138);
  font-weight: 500;
  padding: 0.5rem;
}
</style>
