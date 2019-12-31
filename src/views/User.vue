<template>
  <div class>
    <div class="q-gutter-y-md" style>
      <q-card class="bg-transparent">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="blue-10"
          indicator-color="blue-10"
          align="justify"
        >
          <q-tab name="user" label="Utilisateurs" class="q-pa-sm" />
          <q-tab name="group" label="Groupes" class="q-pa-sm" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="window-height bg-transparent">
          <q-tab-panel name="user">
            <div class="text-right">
              <q-btn
                push
                color="blue-10"
                class="q-pa-xs"
                text-color="white"
                label="Nouvel utilisateur"
                size="11px"
                @click="toggleDialogUser()"
              ></q-btn>
              <CreateUser v-on:toggle="toggleDialogUser" :dialog="dialogUser"></CreateUser>
            </div>
          </q-tab-panel>
          <q-tab-panel name="group">
            <div>
              <ListGroup></ListGroup>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>
<script>
import CreateUser from "@/components/user/Create.vue";
import ListGroup from "@/components/user/group/List.vue";
export default {
  name: "pos",
  data() {
    return {
      tab: "user",
      dialogUser: false
    };
  },
  components: {
    CreateUser,
    ListGroup
  },
  methods: {
    toggleDialogUser() {
      this.dialogUser = !this.dialogUser;
    }
  }
};
</script>
