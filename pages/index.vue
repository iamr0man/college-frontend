<template>
  <wrapper
    :title="title"
    text-classes="flex-column"
  >
    <template #text>
      <p>
        The College CRM is a web-application. It was created to control college content
        to create amazing website.
      </p>
      <p>
        For more information about College CRM, write to
        <a
          href="https://telegram.me/iamr0ma"
          target="_blank"
          rel="noopener noreferrer"
        >
          Roman Korniienko</a
        >.
      </p>
      <hr class="my-3" />
      <a
        href="https://nuxtjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nuxt Documentation
      </a>
      <br />
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nuxt GitHub
      </a>
    </template>
  </wrapper>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import Logo from '~/components/Logo.vue';
import Wrapper from "~/components/common/Wrapper.vue";

@Component({
  components: {
    Logo,
    Wrapper
  }
})
export default class Welcome extends Vue {
  title: string = 'Welcome to the College CRM'
}
</script>
