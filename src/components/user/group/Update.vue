<template>
  <q-form ref="form" @submit="onSubmit" class="q-gutter-md">
    <q-card class="q-pa-md q-mb-sm">
      <q-card-section>
        <div class="text-h6">Modifier groupe</div>
        <div class="q-pa-sm">
          <div class="text-h6"></div>
          <q-input
            filled
            v-model="group.name"
            label="Nom"
            class="text-caption q-mb-sm"
            lazy-rules
            :rules="[val => val && val.length > 0 || 'Veuillez saisir le nom du groupe']"
          />
          <q-input filled type="textarea" v-model="group.description" label="Description" />
          <PrivilegesList v-on:privileges="getPrivileges" :selected="group.group_privileges"></PrivilegesList>
        </div>
      </q-card-section>

      <q-separator />
      <q-card-actions vertical align="right">
        <q-btn label="Enregistrer" type="submit" size="12px" color="blue-10" />
      </q-card-actions>
    </q-card>
  </q-form>
</template>
<script>
import { EventBus } from "@/event-bus.js";
import PrivilegesList from "@/components/user/group/Privileges.vue";
export default {
  props: ["group"],
  data() {
    return {
      privileges: []
    };
  },
  components: {
    PrivilegesList
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then(success => {
        if (success) {
          let group_privileges = [];
          this.privileges.forEach(el => {
            group_privileges.push({ privilegeId: el });
          });
          let data = {
            name: this.group.name,
            description: this.group.description,
            group_privileges: group_privileges
          };
          this.$http
            .put("group/update/" + this.group.id, data)
            .then(res => {
              this.$emit("update-success", this.group);
            })
            .catch(err => {
              let message =
                "une erreur a été survenue lors la création du groupe,";
              if (err.status === 400) {
                if (err.body.hasOwnProperty("name")) {
                  if (err.body.name === "SequelizeUniqueConstraintError") {
                    message += "<br /> Le nom du groupe doit ètre unique.";
                  }
                }
              }
              this.$emit("update-error", message);
            });
        }
      });
    },
    getPrivileges(privileges) {
      this.privileges = privileges;
    }
  }
};
</script>
<style>
</style>