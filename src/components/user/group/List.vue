<template>
  <div class="q-pa-md">
    <q-tab-panels v-model="tab" animated class="window-height bg-transparent">
      <q-tab-panel name="list">
        <div class="text-right q-mb-md">
          <q-btn
            push
            color="blue-10"
            class="q-pa-xs"
            text-color="white"
            label="Nouveau groupe"
            size="11px"
            @click="tab = 'create'"
          ></q-btn>
        </div>
        <div class="row">
          <div class="col-md-12">
            <q-table
              title="Groupes des utilisateurs"
              :data="data"
              :columns="columns"
              row-key="name"
              :selected.sync="selected"
            >
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="name" :props="props">{{ props.row.name }}</q-td>
                  <q-td key="description" :props="props">{{ props.row.description }}</q-td>
                  <q-td key="options" :props="props">
                    <q-btn
                      dense
                      flat
                      label="privilèges"
                      :icon="props.expand ? 'fas fa-info' : 'fas fa-info-circle'"
                      size="9px"
                      color="blue-10"
                      class="q-mr-md"
                      @click="props.expand = !props.expand"
                    />
                    <q-btn
                      v-if="props.row.deletable"
                      dense
                      round
                      flat
                      text-color="red"
                      class="q-mr-md"
                      icon="fas fa-trash"
                      size="9px"
                    />
                    <q-btn
                      dense
                      round
                      flat
                      text-color="dark"
                      icon="fas fa-pen"
                      size="9px"
                      @click="editGroup(props.row)"
                    />
                  </q-td>
                </q-tr>
                <q-tr v-show="props.expand" :props="props">
                  <q-td colspan="100%">
                    <div class="text-left">
                      <div
                        v-if="props.row.group_privileges.length>0"
                        class="row q-pa-sm q-gutter-sm"
                      >
                        <q-chip
                          v-for="p in props.row.group_privileges"
                          :key="p.id"
                          filled
                          size="10px"
                          class="bg-blue-10 q-pa-md"
                          text-color="white"
                        >{{p.privilege.description}}</q-chip>
                      </div>
                      <div v-else class="text-weight-bold">Aucun privilège.</div>
                    </div>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel name="create">
        <div class="text-left">
          <q-btn
            dense
            flat
            color="grey-3"
            class="q-pa-xs q-mb-md"
            text-color="dark"
            label="Retour à la liste"
            icon="fas fa-long-arrow-alt-left"
            size="11px"
            @click="tab = 'list'"
          ></q-btn>
        </div>
        <CreateForm v-on:create-success="addRow" v-on:create-error="showError"></CreateForm>
      </q-tab-panel>
      <q-tab-panel name="edit">
        <div class="text-left">
          <q-btn
            dense
            flat
            color="grey-3"
            class="q-pa-xs q-mb-md"
            text-color="dark"
            label="Retour à la liste"
            icon="fas fa-long-arrow-alt-left"
            size="11px"
            @click="tab = 'list'"
          ></q-btn>
        </div>
        <EditForm
          v-on:update-success="updateRow"
          v-on:update-error="showError"
          :group="groupToEdit"
        ></EditForm>
      </q-tab-panel>
    </q-tab-panels>
    <q-dialog position="top" v-model="dialog.show">
      <q-card v-bind:class="['text-white text-caption ', dialog.class]">
        <q-card-section align="center">
          <q-icon :name="dialog.icon" size="30px" />
        </q-card-section>
        <q-card-section align="center" v-html="dialog.message"></q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { EventBus } from "@/event-bus.js";
import CreateForm from "@/components/user/group/Create";
import EditForm from "@/components/user/group/Update";
export default {
  data() {
    return {
      tab: "list",
      selected: [],
      columns: [
        {
          name: "name",
          required: true,
          label: "Nom",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "description",
          required: false,
          label: "Description",
          align: "left",
          field: row => row.description,
          format: val => `${val}`,
          sortable: false
        },
        {
          name: "options",
          label: "Options"
        }
      ],
      data: [],
      dialog: {
        show: false,
        message: "",
        icon: "",
        color: ""
      },
      groupToEdit: null
    };
  },
  components: {
    CreateForm,
    EditForm
  },
  mounted() {
    this.getAll();
  },
  methods: {
    getAll() {
      this.$http
        .get("group/index")
        .then(res => {
          this.data = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    ymd(date) {
      let d = new Date(date);
      return (
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1 < 9 ? "0" + d.getMonth() + 1 : d.getMonth() + 1) +
        "-" +
        (d.getDate() + 1 < 9 ? "0" + d.getDate() + 1 : d.getDate() + 1)
      );
    },
    addRow(group) {
      this.data.push(group);
      this.tab = "list";
      EventBus.$emit("dialog", {
        message: "Le groupe a été créé avec succés",
        color: "bg-blue-10"
      });
      this.dialog = {
        show: true,
        message: "Le groupe a été créé avec succés",
        icon: "fas fa-check-circle",
        class: " bg-blue-10"
      };
    },
    updateRow(group) {
      console.log("success");
      this.tab = "list";
      let index = this.data.find(el => el.id === group.id);
      if (index !== -1) {
        this.data[index] = group;
      }
      this.dialog = {
        show: true,
        message: "Le groupe a été modifié avec succés",
        icon: "fas fa-check-circle",
        class: " bg-blue-10"
      };
    },
    showError(message) {
      this.dialog = {
        show: true,
        message: message,
        icon: "fas fa-exclamation-circle",
        class: " bg-red"
      };
    },
    editGroup(group) {
      this.groupToEdit = group;
      this.tab = "edit";
    },
    updateRow() {}
  }
};
</script>
<style>
</style>