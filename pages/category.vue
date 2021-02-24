<template>
  <wrapper
    :title="title"
    height="auto"
  >
    <template #text>
      <v-container>
        <v-row>
          <v-col>
            <v-treeview
              v-model="selection"
              :items="items"
              selectable
              return-object
              open-all
            />
          </v-col>
          <v-divider vertical></v-divider>
          <v-col
            class="pa-6"
            cols="6"
          >
            <template v-if="!selection.length">
              No nodes selected.
            </template>
            <template v-else>
              <div
                v-for="node in selection"
                :key="node.id"
              >
                {{ node.name }}
              </div>
            </template>
          </v-col>
        </v-row>
      </v-container>
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
export default class Category extends Vue {
  title: string = 'Category';
  selection: any = [];
  items: any = [
    {
      id: 1,
      name: 'Root',
      children: [
        { id: 2, name: 'Child #1' },
        { id: 3, name: 'Child #2' },
        {
          id: 4,
          name: 'Child #3',
          children: [
            { id: 5, name: 'Grandchild #1' },
            { id: 6, name: 'Grandchild #2' },
          ],
        },
      ],
    },
  ];
}
</script>
