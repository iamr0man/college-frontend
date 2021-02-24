<template>
  <wrapper :title="title"
           text-classes="flex-column">
    <template #text>
      <v-text-field
        v-model="mainPhoto"
        solo
        label="Main Photo:"
      />
      <v-textarea
        v-model="description"
        solo
        label="Description..."
      />
      <v-divider />
      <v-select
        v-model="degreeProgram"
        solo
        label="Choose Degree program..."
        :items="[]"
        return-object
      />
      <v-select
        v-model="manager"
        solo
        label="Choose manager of department..."
        :items="[]"
        return-object
      />
    </template>
    <template #actions>
      <v-btn
        class="primary"
        @click="create"
      >
        Create
      </v-btn>
      <v-divider vertical/>
      <v-btn
        class="warning"
        @click="returnBack"
      >
        Cancel
      </v-btn>
    </template>
  </wrapper>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import {Location} from "vue-router";
import Wrapper from "~/components/common/Wrapper.vue";

@Component({
  components: {
    Wrapper
  }
})
export default class EditDepartments extends Vue {
  title: string = 'Create Department';
  mainPhoto: string = '';
  description: string = '';
  degreeProgram: string = '';
  manager: string = '';


  create(id: number): void {
    const location: Location = { path: this.$route.fullPath, query: { id: `${id}` } };
    this.$router.push(location);
  }

  returnBack() {
    const location: Location = { path: this.$route.fullPath };
    this.$router.push(location);
  }
}
</script>
