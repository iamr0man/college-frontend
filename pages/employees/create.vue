<template>
  <wrapper
    :title="title"
    text-classes="flex-column">
    <template #text>
      <v-text-field
        v-model="firstName"
        solo
        label="First name:"
      />
      <v-text-field
        v-model="lastName"
        solo
        label="Last name:"
      />
      <v-text-field
        v-model="middleName"
        solo
        label="Middle name:"
      />
      <v-text-field
        v-model="position"
        solo
        label="Position:"
      />
      <v-text-field
        v-model="degree"
        solo
        label="Degree..."
      />
      <v-select
        v-model="department"
        solo
        label="Choose department..."
        :items="[]"
        return-object
      />
      <v-text-field
        v-model="phoneNumber"
        solo
        label="Phone number:"
      />
      <v-text-field
        v-model="avatar"
        solo
        label="Avatar url:"
      />
      <v-divider />
      <v-textarea
        v-model="quote"
        solo
        label="Quote..."
      />
    </template>
    <template #actions>
      <v-btn color="primary" @click="createEmployee">Add Employee</v-btn>
      <v-divider vertical/>
      <v-btn color="warning" @click="returnBack">Cancel</v-btn>
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
export default class Employees extends Vue {
  title: string = 'Employees';

  firstName: string = '';
  lastName: string = '';
  middleName: string = '';
  position: string = '';
  degree: string = '';
  department: null = null;
  phoneNumber: string = '';
  avatar: string = '';
  quote: string = '';

  createEmployee(id: number): void {
    const location: Location = { path: this.$route.fullPath, query: { id: `${id}` } };
    this.$router.push(location);
  }

  returnBack() {
    const location: Location = { path: this.$route.fullPath };
    this.$router.push(location);
  }
}
</script>

