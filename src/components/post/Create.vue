<template>
  <q-dialog v-model="getDialog" persistent>
    <q-card style="width: 500px; max-width: 50vw;">
      <q-linear-progress :value="0" color="blue-10" />
      <q-card-section class="row items-center">
        <div class="text-h6">Nouveau poste</div>
        <q-space />
        <q-btn icon="far fa-times-circle" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section class="row items-center no-wrap q-pa-md">
        <q-form ref="form" @submit="onSubmit" class="q-gutter-md">
          <div class="row">
            <div class="col-md-6 q-pa-xs q-mt-sm">
              <q-input
                v-model="name"
                class="q-p-l-4"
                rounded
                outlined
                type="text"
                hint="Nom"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Veuillez saisir le nom de poste']"
              ></q-input>
            </div>
            <div class="col-md-6 q-pa-xs q-mt-sm">
              <q-input
                v-model="code"
                class="q-p-l-4"
                rounded
                outlined
                type="text"
                hint="Code"
                lazy-rules
                :rules="[]"
              ></q-input>
            </div>
            <div class="col-md-12 q-pa-xs q-mt-sm">
              <q-select
                rounded
                outlined
                v-model="post"
                :options="options"
                label="Point de vente"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Veuillez choisir un point de vente']"
              />
            </div>
            <div class="col-md-12 q-pa-xs q-mt-sm">
              <div class="text-caption">Type de poste</div>
              <q-radio v-model="type" val="cashbox" label="Caisse" />
              <q-radio v-model="type" val="kitchen" label="Cuisine" />
            </div>
            <div class="col-md-12 q-pa-xs q-mt-sm">
              <q-input
                v-model="description"
                class="q-p-l-4"
                rounded
                outlined
                type="textarea"
                hint="Description"
                lazy-rules
                :rules="[]"
              ></q-input>
            </div>
          </div>

          <div class="row justify-end q-mt-lg">
            <div class="q-gutter-sm">
              <q-btn
                push
                rounded
                class="q-pa-xs"
                color="blue-10"
                text-color="white"
                type="submit"
                label="Valider"
              />
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  props: ["dialog"],
  data() {
    return {
      name: "",
      code: "",
      options: ["Pos 1", "Pos 2"],
      description: "",
      type: "cashbox",
      post: ""
    };
  },
  computed: {
    getDialog: {
      get: function() {
        return this.dialog;
      },
      set: function() {
        this.empty();
        this.$emit("toggle");
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then(success => {
        if (success) {
        } else {
          // oh no, user has filled in
          // at least one invalid value
        }
      });
    },
    empty() {
      this.name = "";
      this.code = "";
      this.description = "";
      this.post = "";
      this.type = "cashbox";
    }
  }
};
</script>