<template>
  <q-dialog v-model="getDialog" persistent>
    <q-card
      v-bind:class="['q-pa-md no-shadow ', styleClasses.dialogColor]"
      style="width: 500px; max-width: 80vw;"
    >
      <q-card-section class="row items-center">
        <div v-bind:class="['text-h6 ', styleClasses.color]">Nouvel utilisateur</div>
        <q-space />
        <q-btn icon="far fa-times-circle" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section>
        <div class="q-gutter-md">
          <q-form ref="form" @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              class="q-p-l-4"
              v-model="name"
              type="text"
              :color="styleClasses.color"
              size="10px"
              label="Nom complet"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Veuillez saisir le nom'
              ]"
            ></q-input>
            <q-input
              filled
              class="q-p-l-4"
              v-model="username"
              type="text"
              :color="styleClasses.color"
              label="Nom d'utilisateur"
              lazy-rules
              :rules="[
                val =>
                  (val && val.length > 0) ||
                  'Veuillez saisir le nom d\'utilisateur'
              ]"
            ></q-input>
            <q-input
              filled
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              :color="styleClasses.color"
              label="Mot de passe"
              lazy-rules
              :rules="[
                val =>
                  (val && val.length > 0) || 'Veuillez saisir le mot de passe'
              ]"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'far fa-eye-slash' : 'far fa-eye'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                  size="20px"
                />
              </template>
            </q-input>
            <div class="row justify-center q-mt-lg">
              <div class="q-gutter-sm">
                <q-btn
                  push
                  class="q-pa-xs"
                  color="blue-10"
                  text-color="white"
                  type="submit"
                  label="Valider"
                  size="12px"
                />
              </div>
            </div>
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { EventBus } from "@/event-bus.js";
export default {
  name: "CreateUser",
  props: ["dialog"],
  data() {
    return {
      name: "",
      password: "",
      username: "",
      isPwd: true,
      theme: "light",
      styleClasses: {
        color: "blue-10",
        dialogColor: "bg-white"
      }
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
  watch: {
    theme: function() {
      if (this.theme === "light") {
        this.styleClasses.color = "text-blue-10";
        this.styleClasses.dialogColor = "bg-white";
      } else {
        this.styleClasses.color = "text-grey-10";
        this.styleClasses.dialogColor = "bg-grey-3";
      }
    }
  },
  mounted() {
    EventBus.$on("set-theme", theme => {
      this.theme = theme;
    });
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then(success => {
        if (success) {
          let data = {
            email: this.username,
            password: this.password,
            name: this.name
          };
          this.$http
            .post("user", data)
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    onReset() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style></style>
