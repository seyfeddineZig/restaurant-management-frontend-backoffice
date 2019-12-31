<template>
  <q-dialog v-model="getDialog" persistent>
    <q-card style="width: 500px; max-width: 50vw;">
      <q-linear-progress :value="0" color="blue-10" />
      <q-card-section class="row items-center">
        <div class="text-h6">Icons</div>
        <q-space />
        <q-btn icon="far fa-times-circle" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section class="row items-center no-wrap q-pa-md">
        <div class="row">
          <div class="col-md-12">
            <q-btn
              v-for="i in icons"
              :key="icons.indexOf(i)"
              color="white"
              text-color="blue-10"
              push
              rounded
              label
              :icon="i"
              @click="selectIcon(i)"
              class="q-ma-sm q-pa-sm q-pt-md q-pb-md"
              size="12px"
              v-close-popup
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  props: ["dialog"],
  data() {
    return {
      icons: [
        "fab fa-gulp",
        "fas fa-glass-cheers",
        "fas fa-beer",
        "fas fa-mug-hot",
        "fas fa-coffee",
        "fas fa-glass-martini",
        "fas fa-wine-glass",
        "fas fa-cocktail",
        "fas fa-mortar-pestle",
        "fas fa-utensils",
        "fas fa-utensil-spoon",
        "fas fa-hamburger",
        "fas fa-pizza-slice",
        "fas fa-egg",
        "fas fa-cheese",
        "fas fa-bread-slice",
        "fas fa-bacon",
        "fas fa-hotdog",
        "fas fa-pepper-hot",
        "fas fa-ice-cream",
        "fas fa-fish",
        "fas fa-cookie",
        "fas fa-carrot",
        "fas fa-lemon",
        "fas fa-concierge-bell"
      ]
    };
  },
  computed: {
    getDialog: {
      get: function() {
        return this.dialog;
      },
      set: function() {
        this.$emit("toggle");
      }
    }
  },
  methods: {
    selectIcon(icon) {
      this.$emit("selectIcon", icon);
    }
  }
};
</script>