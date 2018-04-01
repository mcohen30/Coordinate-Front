import TextInputExample from '../components/TextInputExample.vue';

export default {
  data() {
    return {
      appName: 'Your Vue App',
      testValue: env.key
    }
  },
  components: {
    'text-input-example': TextInputExample
  }
}
