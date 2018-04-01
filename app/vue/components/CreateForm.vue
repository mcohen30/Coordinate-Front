<template>
  <form>
    <input v-model="text">
    <button v-model="text" @click="submit">Submit</button>
    You typed {{ text }}
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    };
  },
  methods: {
    submit: function(event) {
      lib['leroydevelops.coordinateBack[@dev]']({name: this.text}, (err, result) => {
        alert(result);
      })
    }
  }
}
</script>
