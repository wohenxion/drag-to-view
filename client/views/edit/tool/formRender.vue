<template>
  <div>
    <template v-for="item in formData">
      {{ item.label }}:<input
        :type="item.name == 'fontSize' ? 'number' : 'text'"
        v-model="item.value"
        :key="item.name"
      />
    </template>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      formData: state => state.editor.formData
    })
  },
  methods: {
    arrToJson(arr) {
      let data = {};
      arr.map(item => {
        data[item.name] = item.value;
      });
      this.$store.dispatch("editor/updateProjectStyle", data);
      // return data;
    }
  },
  watch: {
    formData: {
      handler(newData) {
        this.arrToJson(newData);
      },
      deep: true
    }
  }
};
</script>
