<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the College CRM
        </v-card-title>
        <v-card-text>
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
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo,
  },
};
</script>
