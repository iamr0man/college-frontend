<template>
  <wrapper
    :title="title">
    <template #text>
      <!--      <v-container>-->
      <!--        <v-card>-->
      <!--          <v-card-text>-->
      <!--            -->
      <!--          </v-card-text>-->
      <!--        </v-card>-->
      <!--      </v-container>-->
    </template>
    <template #actions>
      <v-btn color="primary" @click="$router.push('employees/create/')">Add new Employee</v-btn>
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
export default class Employees extends Vue {
  title: string = 'Employees';

}
</script>

