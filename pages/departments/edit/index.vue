<template>
  <wrapper
    :title="title"
    :card-height="height">
    <template #text>
      <v-row justify="center" align="center">
        <v-col>
          <v-select
            v-model="currentDepartment"
            solo
            label="Choose Department..."
            :items="[]"
            return-object
          />
        </v-col>
        <v-divider vertical/>
        <v-col class="mr-3" cols="6">
          <v-select
            v-model="currentSpecialization"
            solo
            label="Choose Specialization..."
            :items="[]"
            return-object
          />
        </v-col>
      </v-row>
    </template>
    <template #actions>
      <v-btn class="primary" :disabled="!currentDepartment" @click="$router.push('departments/create/new')">Edit Department</v-btn>
      <v-divider vertical/>
      <v-btn class="primary" :disabled="!currentDepartment && !currentSpecialization" @click="create">Edit Specialization</v-btn>
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

  currentDepartment: null = null;
  currentSpecialization: null = null;
}
</script>

