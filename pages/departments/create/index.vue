<template>
  <wrapper
    :title="title"
  >
    <template #text>
      <v-row justify="center" align="center">
        <v-col></v-col>
        <v-divider vertical/>
        <v-col class="mr-3" cols="6">
          <v-select
            v-model="currentDepartment"
            solo
            label="Choose Department..."
            :items="[]"
            return-object
          />
        </v-col>
      </v-row>
    </template>
    <template #actions>
      <v-btn
        class="primary"
        @click="$router.push('create/department')"
      >
        Add new Department
      </v-btn>
      <v-divider vertical/>
      <v-btn
        class="primary"
        :disabled="!currentDepartment"
        @click="$router.push('create/specialization')"
      >
        Add new Specialization
      </v-btn>
    </template>
  </wrapper>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Wrapper from "~/components/common/Wrapper.vue";

@Component({
  components: {
    Wrapper,
  }
})
export default class CreateDepartments extends Vue {
  title: string = 'Department and Specialization';

  currentDepartment: null = null
}
</script>

