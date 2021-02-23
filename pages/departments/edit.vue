<template>
  <wrapper
    :title="title"
    :card-height="height"
    :action-classes="actionClasses">
    <template #text>
      <select-department />
    </template>
  </wrapper>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Wrapper from "~/components/common/Wrapper.vue";
import SelectDepartment from "~/components/departments/SelectDepartment.vue";

@Component({
  components: {
    Wrapper,
    SelectDepartment
  }
})
export default class Departments extends Vue {
  title: string = 'Department and Specialization';
  height: string = '200px';
  actionClasses: string = 'd-flex justify-space-around';
}
</script>

