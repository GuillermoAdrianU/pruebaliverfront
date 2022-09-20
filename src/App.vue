<template>
  <v-app>
    <v-app-bar
      absolute
      color="pink"
      dark
      dense
      prominent
      scroll-target="#scrolling-techniques-3"
      height=""
    >
      <v-app-bar-title>Prueba</v-app-bar-title>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Archivos</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main style="height: auto; margin-top: 10%">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch} from 'vue-property-decorator';
import router from './router';
@Component({
})
export default class App extends Vue {
};
</script>

<style lang="css">
html, body{
  height:100%;
  margin:0;
  display: flex;
  flex-direction: column;
}
</style>