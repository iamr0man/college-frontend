<template>
  <wrapper
    :title="title"
    :card-height="height"
    :text-classes="textClasses"
    :action-classes="actionClasses"
  >
    <template #text>
      <v-row justify="center" align="center">
        <v-col></v-col>
        <v-divider vertical/>
        <v-col class="mr-3" cols="6">
          <v-select
            v-model="currentDepartment"
            solo
            label="Department"
            :items="[]"
            return-object
          />
        </v-col>
      </v-row>
    </template>
    <template #actions>
      <v-btn class="primary" @click="$router.push('departments/create/new')">Add new Department</v-btn>
      <v-divider vertical/>
      <v-btn class="primary" :disabled="!currentDepartment" @click="create">Add new Specialization</v-btn>
    </template>
  </wrapper>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Wrapper from "~/components/common/Wrapper.vue";
import SelectDepartment from "~/components/departments/SelectDepartment.vue";
import { ICategory } from "~/store/category/types";

@Component({
  components: {
    Wrapper,
    SelectDepartment
  }
})
export default class Departments extends Vue {
  title: string = 'Department and Specialization';
  height: string = '300px';
  textClasses: string = 'd-flex justify-center';
  actionClasses: string = 'd-flex justify-space-around';

  currentDepartment: ICategory = null
}
</script>

