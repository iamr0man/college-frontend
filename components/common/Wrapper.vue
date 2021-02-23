<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card :height="cardHeight">
        <v-card-title>
          {{ title }}
        </v-card-title>
        <v-card-text :class="textClasses">
          <slot name="text" />
        </v-card-text>
        <v-card-actions :class="actionClasses">
          <slot name="actions"/>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class Wrapper extends Vue {
  @Prop() title: string;
  @Prop() cardHeight: string;
  @Prop() textClasses: string;
  @Prop() actionClasses: string;
}
</script>
