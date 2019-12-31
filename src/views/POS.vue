<template>
  <div class>
    <div class="q-gutter-y-md" style>
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="blue-10"
          indicator-color="blue-10"
          align="justify"
        >
          <q-tab name="pos" label="Points de vente" class="q-pa-sm" />
          <q-tab name="post" label="Postes" class="q-pa-sm" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="window-height">
          <q-tab-panel name="pos">
            <div class="text-h6">Points de vente</div>
            <div class="text-right">
              <q-btn
                push
                color="blue-10"
                class="q-pa-xs"
                rounded
                text-color="white"
                label="Nouveau POS"
                size="12px"
                @click="toggleDialogPOS()"
              ></q-btn>
              <CreatePOS v-on:toggle="toggleDialogPOS" :dialog="dialogPOS"></CreatePOS>
            </div>
          </q-tab-panel>
          <q-tab-panel name="post">
            <div class="text-h6">Postes</div>
            <div class="text-right">
              <q-btn
                push
                color="blue-10"
                class="q-pa-xs"
                rounded
                text-color="white"
                label="Nouveau poste"
                size="12px"
                @click="toggleDialogPOST()"
              ></q-btn>
              <CreatePOST v-on:toggle="toggleDialogPOST" :dialog="dialogPOST"></CreatePOST>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>
<script>
import CreatePOS from "@/components/pos/Create.vue";
import CreatePOST from "@/components/post/Create.vue";
export default {
  name: "pos",
  data() {
    return {
      tab: "mails",
      dialogPOS: false,
      dialogPOST: false
    };
  },
  components: {
    CreatePOS,
    CreatePOST
  },
  methods: {
    toggleDialogPOS() {
      this.dialogPOS = !this.dialogPOS;
    },
    toggleDialogPOST() {
      this.dialogPOST = !this.dialogPOST;
    }
  }
};
</script>