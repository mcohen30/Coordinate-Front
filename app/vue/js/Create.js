import CreateForm from '../components/CreateForm.vue';

export default {
  data() {
    return {
      pageTitle: 'Create Page',
      testValue: env.key
    }
  },
  components: {
    'create-form-component': CreateForm
  }
}
