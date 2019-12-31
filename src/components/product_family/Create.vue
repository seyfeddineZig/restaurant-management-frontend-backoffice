<template>
  <q-dialog v-model="getDialog" persistent>
    <q-card style="width: 500px; max-width: 50vw;">
      <q-linear-progress :value="0" color="blue-10" />
      <q-card-section class="row items-center">
        <div class="text-h6">Nouvelle famille</div>
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
                filled
                color="blue-10"
                type="text"
                label="Nom"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Veuillez saisir le nom de la famille']"
              ></q-input>
            </div>
            <div class="col-md-6 q-pa-xs q-mt-sm">
              <q-input
                v-model="code"
                class="q-p-l-4"
                filled
                color="blue-10"
                type="text"
                label="Code"
                lazy-rules
                :rules="[]"
              ></q-input>
            </div>
            <div class="col-md-12 q-pa-xs q-mt-sm">
              <q-input
                v-model="description"
                class="q-p-l-4"
                filled
                color="blue-10"
                type="textarea"
                label="Description"
                lazy-rules
                :rules="[]"
              ></q-input>
            </div>
            <div class="col-md-4 q-pa-xs q-mt-sm text-center">
              <q-btn-dropdown
                v-bind:style="[{'background': bgColor}]"
                rounded
                dropdown-icon="none"
                class="q-pa-xs q-pt-md q-pb-md"
              >
                <q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-color v-model="bgColor" no-footer no-header default-value="#285de0" />
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <div class="text-caption q-mt-sm">Couleur du fond</div>
            </div>
            <div class="col-md-4 q-pa-xs q-mt-sm text-center">
              <q-btn-dropdown
                v-bind:style="[{'background': textColor}]"
                rounded
                dropdown-icon="none"
                class="q-pa-xs q-pt-md q-pb-md"
              >
                <q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-color v-model="textColor" no-footer no-header default-value="#285de0" />
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <div class="text-caption q-mt-sm">Couleur du texte</div>
            </div>
            <div class="col-md-4 q-pa-xs q-mt-sm text-center">
              <q-btn
                v-bind:style="[{'background': bgColor, 'color': textColor}]"
                push
                rounded
                dropdown-icon="none"
                class="q-pa-sm q-pt-md q-pb-md"
                @click="toggleDialogICONS()"
                :icon="icon"
              ></q-btn>
              <div class="text-caption q-mt-sm">Miniature</div>
              <Icons
                v-on:toggle="toggleDialogICONS"
                v-on:selectIcon="getIcon($event)"
                :dialog="dialogICONS"
              ></Icons>
            </div>
          </div>
          <div class="q-gutter-sm">
            <q-toggle v-model="isActive" color="blue-10" label="Afficher la categorie" />
          </div>

          <div class="row justify-end q-mt-lg">
            <div class="q-gutter-sm">
              <q-btn
                push
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
import Icons from "@/components/Icons.vue";
export default {
  props: ["dialog"],
  data() {
    return {
      name: "",
      code: "",
      description: "",
      bgColor: "#0d47a1",
      textColor: "#FFFFFF",
      icon: "fas fa-concierge-bell",
      dialogICONS: false,
      isActive: true
    };
  },
  components: {
    Icons
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
    },
    toggleDialogICONS() {
      this.dialogICONS = !this.dialogICONS;
    },
    getIcon(icon) {
      this.icon = icon;
    }
  }
};
</script>