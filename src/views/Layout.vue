<template>
  <div class>
    <q-layout
      view="lHh Lpr lff"
      container
      class="window-height shadow-2 rounded-borders"
    >
      <q-header class="bg-blue-10">
        <q-toolbar>
          <q-toolbar-title>Header</q-toolbar-title>
          <q-toggle
            v-model="nightMode"
            v-on:change="setNightMode"
            color="blue-10"
            label="Mode nuit"
          />
          <q-btn
            @click="drawer = !drawer"
            rounded
            push
            color="white"
            text-color="blue-10"
            label
            size="12px"
          />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="270"
        :breakpoint="300"
        content-class="bg-dark"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 100px;">
          <div class="q-pa-lg sidebar">
            <div class="row">
              <div class="col-md-12 q-mb-lg">
                <div class="text-body2 text-grey-6">Menu</div>
              </div>
              <div class="col-md-4 text-center">
                <q-btn
                  text-color="white"
                  push
                  color="blue-10"
                  class="q-pa-xs q-mb-sm q-pt-sm q-pb-sm"
                  rounded
                >
                  <q-icon :name="'fas fa-cash-register'" size="20px" />
                </q-btn>
                <div class="text-caption text-capitalize text-white">
                  Caisse
                </div>
              </div>
              <div class="col-md-4 text-center">
                <q-btn
                  text-color="white"
                  push
                  color="blue-10"
                  class="q-pa-xs q-mb-sm q-pt-sm q-pb-sm"
                  rounded
                >
                  <q-icon :name="'fas fa-clipboard-list'" size="20px" />
                </q-btn>
                <div class="text-caption text-capitalize text-white">
                  Ordres
                </div>
              </div>
              <div class="col-md-4 text-center">
                <q-btn
                  text-color="white"
                  push
                  color="blue-10"
                  class="q-pa-xs q-mb-sm q-pt-sm q-pb-sm"
                  rounded
                >
                  <q-icon :name="'fas fa-utensils'" size="20px" />
                </q-btn>
                <div class="text-caption text-capitalize text-white">
                  Réservations
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 col-sm-12 q-mt-md q-mb-lg">
                <div class="text-body2 text-grey-6">Bases</div>
              </div>
              <div class="col-md-4 text-center">
                <q-btn
                  text-color="blue-10"
                  push
                  outline
                  class="q-pa-xs q-mb-sm q-pt-sm q-pb-sm"
                  rounded
                  :to="{ name: 'pos' }"
                >
                  <q-icon :name="'fas fa-store'" size="20px" />
                </q-btn>
                <div class="text-caption text-capitalize text-white">
                  Point de vente
                </div>
              </div>
              <div class="col-md-4 text-center">
                <q-btn
                  text-color="blue-10"
                  push
                  outline
                  class="q-pa-xs q-mb-sm q-pt-sm q-pb-sm"
                  rounded
                >
                  <q-icon :name="'fas fa-th'" size="20px" />
                </q-btn>
                <div class="text-caption text-capitalize text-white">
                  Salles et tables
                </div>
              </div>
              <div class="col-md-4 text-center">
                <q-btn
                  text-color="blue-10"
                  push
                  outline
                  class="q-pa-xs q-mb-sm q-pt-sm q-pb-sm"
                  :to="{ name: 'product' }"
                  rounded
                >
                  <q-icon :name="'fas fa-box'" size="20px" />
                </q-btn>
                <div class="text-caption text-capitalize text-white">
                  Produits
                </div>
              </div>
              <div class="col-md-4 text-center q-mt-md">
                <q-btn
                  text-color="blue-10"
                  push
                  outline
                  class="q-pa-xs q-mb-sm q-pt-sm q-pb-sm"
                  rounded
                >
                  <q-icon :name="'fas fa-boxes'" size="20px" />
                </q-btn>
                <div class="text-caption text-capitalize text-white">
                  Familles
                </div>
              </div>

              <div class="col-md-4 text-center q-mt-md">
                <q-btn
                  text-color="blue-10"
                  push
                  outline
                  class="q-pa-xs q-mb-sm q-pt-sm q-pb-sm"
                  rounded
                >
                  <q-icon :name="'fas fa-users'" size="20px" />
                </q-btn>
                <div class="text-caption text-capitalize text-white">
                  Clients
                </div>
              </div>
              <div class="col-md-4 text-center q-mt-md">
                <q-btn
                  text-color="blue-10"
                  push
                  outline
                  class="q-pa-xs q-mb-sm q-pt-sm q-pb-sm"
                  rounded
                >
                  <q-icon :name="'fas fa-print'" size="20px" />
                </q-btn>
                <div class="text-caption text-capitalize text-white">
                  Périphériques
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 q-mt-lg q-mb-lg">
                <div class="text-body2 text-grey-6">Paramètres</div>
              </div>
              <div class="col-md-4 text-center">
                <q-btn
                  push
                  color="white"
                  class="q-pa-xs q-mb-xs"
                  rounded
                  outline
                  text-color="white"
                >
                  <q-icon :name="'fas fa-users-cog'" size="20px" />
                </q-btn>
                <div
                  class="text-caption text-capitalize text-capitalize text-white"
                >
                  Utilisateurs
                </div>
              </div>
              <div class="col-md-4 text-center">
                <q-btn
                  push
                  color="white"
                  class="q-pa-xs q-mb-xs"
                  rounded
                  outline
                  text-color="white"
                >
                  <q-icon :name="'fas fa-cogs'" size="20px" />
                </q-btn>
                <div class="text-caption text-capitalize text-white">
                  Paramètres
                </div>
              </div>
              <div class="col-md-4 text-center">
                <q-btn
                  push
                  color="white"
                  class="q-pa-xs q-mb-xs"
                  rounded
                  outline
                  text-color="white"
                >
                  <q-icon :name="'fas fa-file-alt'" size="20px" />
                </q-btn>
                <div class="text-caption text-capitalize text-white">
                  Rapports
                </div>
              </div>
            </div>
          </div>
        </q-scroll-area>

        <q-img class="absolute-top" style="height: 90px">
          <div class="absolute-bottom bg-transparent">
            <!--<q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>-->
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <q-page>
          <router-view></router-view>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      nightMode: false
    };
  },
  computed: {
    getNightMode(color) {
      if (this.nightMode) {
        return true;
      } else {
        return color;
      }
    }
  },
  created() {
    this.nightMode =
      window.localStorage.getItem("nightMode") === 1 ? true : false;
  },
  methods: {
    setNightMode() {
      if (this.nightMode) {
        window.localStorage.setItem("nightMode", "1");
      } else {
        window.localStorage.setItem("nightMode", "0");
      }
    }
  }
};
</script>
<style></style>
