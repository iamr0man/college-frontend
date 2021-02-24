<template>
  <wrapper
    :title="title">
    <template #actions>
      <v-btn color="primary" @click="$router.push('departments/create')">Add new Department/Specialization</v-btn>
      <v-divider vertical/>
      <v-btn color="primary" @click="$router.push('departments/edit')">Edit Department/Specialization</v-btn>
    </template>
  </wrapper>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Wrapper from "~/components/common/Wrapper.vue";

@Component({
  components: {
    Wrapper
  }
})
export default class Departments extends Vue {
  title: string = 'Department and Specialization';
}
</script>

