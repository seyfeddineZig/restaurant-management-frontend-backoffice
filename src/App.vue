<template>
  <div class>
    <q-layout view="lHh Lpr lff" container class="window-height">
      <q-header v-if="loggedIn" v-bind:class="getTheme.navbarClass">
        <q-toolbar>
          <q-toolbar-title>
            <q-btn
              @click="drawer = !drawer"
              flat
              color="white"
              text-color="blue-10"
              label
              size="12px"
              :icon="drawer ? 'far fa-dot-circle' : 'fas fa-dot-circle'"
            />
          </q-toolbar-title>
          <q-toggle
            v-model="themeSwitcher"
            @click="setTheme"
            checked-icon="far fa-sun"
            unchecked-icon="fas fa-moon"
            color="blue-10"
            label
          />
          <q-btn flat color="white" icon="fas fa-sign-out-alt" @click="logout" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-if="loggedIn"
        v-model="drawer"
        show-if-above
        :width="270"
        :breakpoint="300"
        :content-class="getTheme.sidebarClass + ' shadow-1'"
        class
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
                <div
                  v-bind:class="[
                    'text-caption text-capitalize',
                    getTheme.textColorClass
                  ]"
                >Caisse</div>
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
                <div
                  v-bind:class="[
                    'text-caption text-capitalize',
                    getTheme.textColorClass
                  ]"
                >Ordres</div>
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
                <div
                  v-bind:class="[
                    'text-caption text-capitalize',
                    getTheme.textColorClass
                  ]"
                >Réservations</div>
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
                <div
                  v-bind:class="[
                    'text-caption text-capitalize',
                    getTheme.textColorClass
                  ]"
                >Point de vente</div>
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
                <div
                  v-bind:class="[
                    'text-caption text-capitalize',
                    getTheme.textColorClass
                  ]"
                >Salles et tables</div>
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
                <div
                  v-bind:class="[
                    'text-caption text-capitalize',
                    getTheme.textColorClass
                  ]"
                >Produits</div>
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
                <div
                  v-bind:class="[
                    'text-caption text-capitalize',
                    getTheme.textColorClass
                  ]"
                >Familles</div>
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
                <div
                  v-bind:class="[
                    'text-caption text-capitalize',
                    getTheme.textColorClass
                  ]"
                >Clients</div>
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
                <div
                  v-bind:class="[
                    'text-caption text-capitalize',
                    getTheme.textColorClass
                  ]"
                >Périphériques</div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 q-mt-lg q-mb-lg">
                <div class="text-body2 text-grey-6">Paramètres</div>
              </div>
              <div class="col-md-4 text-center">
                <q-btn
                  push
                  :color="getTheme.colorClass"
                  class="q-pa-xs q-mb-xs"
                  rounded
                  outline
                  :to="{ name: 'user' }"
                >
                  <q-icon :name="'fas fa-users-cog'" size="20px" />
                </q-btn>
                <div
                  v-bind:class="[
                    'text-caption text-capitalize',
                    getTheme.textColorClass
                  ]"
                >Utilisateurs</div>
              </div>
              <div class="col-md-4 text-center">
                <q-btn push :color="getTheme.colorClass" class="q-pa-xs q-mb-xs" rounded outline>
                  <q-icon :name="'fas fa-cogs'" size="20px" />
                </q-btn>
                <div
                  v-bind:class="[
                    'text-caption text-capitalize',
                    getTheme.textColorClass
                  ]"
                >Paramètres</div>
              </div>
              <div class="col-md-4 text-center">
                <q-btn push :color="getTheme.colorClass" class="q-pa-xs q-mb-xs" rounded outline>
                  <q-icon :name="'fas fa-file-alt'" size="20px" />
                </q-btn>
                <div
                  v-bind:class="[
                    'text-caption text-capitalize',
                    getTheme.textColorClass
                  ]"
                >Rapports</div>
              </div>
            </div>
          </div>
        </q-scroll-area>

        <q-img class="absolute-top" style="height: 90px">
          <div v-bind:class="['bg-transparent', getTheme.textColorClass]">
            <!--<q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>-->
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <q-page v-bind:class="getTheme.pageClass">
          <router-view></router-view>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";
export default {
  data() {
    return {
      drawer: true,
      theme: "light",
      themeSwitcher: true
    };
  },
  computed: {
    getTheme() {
      if (this.theme === "light") {
        return {
          colorClass: "dark",
          textColorClass: "text-dark",
          sidebarClass: "bg-grey-1",
          navbarClass: "bg-blue-grey-1",
          pageClass: "bg-blue-grey-1"
        };
      }
      return {
        colorClass: "white",
        textColorClass: "text-white",
        sidebarClass: "bg-grey-10",
        navbarClass: "bg-dark",
        pageClass: "bg-dark"
      };
    },
    loggedIn() {
      if (localStorage.getItem("token") != null) {
        return true;
      }
      return false;
    }
  },
  watch: {
    themeSwitcher: function() {
      this.setTheme();
    }
  },
  created() {
    this.initTheme();
  },
  methods: {
    initTheme() {
      let theme = window.localStorage.getItem("theme");
      if (!theme) {
        window.localStorage.setItem("theme", "light");
      } else {
        this.theme = theme;
      }
      this.themeSwitcher = this.theme === "light" ? true : false;
      EventBus.$emit("set-theme", this.theme);
    },
    setTheme() {
      if (this.theme === "light") {
        this.theme = "dark";
        window.localStorage.setItem("theme", "dark");
      } else {
        this.theme = "light";
        window.localStorage.setItem("theme", "light");
      }
      EventBus.$emit("set-theme", this.theme);
    },
    logout() {
      window.localStorage.removeItem("token");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss">
* {
  font-family: "Montserrat", sans-serif;
}
.q-field--outlined .q-field__control:before {
  background: #f2f2f2;
}

.fas.fa-exclamation-circle.q-icon.text-negative[aria-hidden] {
  display: none;
}
.sidebar .text-caption {
  font-size: 10px;
}
.sidebar .text-body2 {
  font-size: 12px;
}
.fixed-right,
.absolute-right {
  padding: 0;
}
.q-toggle__label {
  font-size: 12px !important;
}
</style>
