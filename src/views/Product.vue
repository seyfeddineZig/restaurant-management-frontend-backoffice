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
          <q-tab name="product" label="Produits" class="q-pa-sm" />
          <q-tab name="family" label="Familles" class="q-pa-sm" />
          <q-tab name="accompaniment" label="Accompagnements" class="q-pa-sm" />
          <q-tab name="menu" label="Menus" class="q-pa-sm" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="window-height">
          <q-tab-panel name="product">
            <div class="text-h6">Produits</div>
            <div class="text-right"></div>
          </q-tab-panel>
          <q-tab-panel name="family">
            <div class="text-h6">Familles</div>
            <div class="text-right">
              <q-btn
                push
                color="blue-10"
                class="q-pa-xs"
                text-color="white"
                label="Nouvelle famille"
                size="12px"
                @click="toggleDialogFAMILY()"
              ></q-btn>
              <CreateFAMILY v-on:toggle="toggleDialogFAMILY" :dialog="dialogFAMILY"></CreateFAMILY>
            </div>
          </q-tab-panel>
          <q-tab-panel name="accompaniment">
            <div class="text-h6">Accompagnements</div>
            <div class="text-right"></div>
          </q-tab-panel>
          <q-tab-panel name="menu">
            <div class="text-h6">Menus</div>
            <div class="text-right"></div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>
<script>
import CreateFAMILY from "@/components/product_family/Create.vue";
export default {
  name: "product",
  data() {
    return {
      tab: "product",
      dialogFAMILY: false
    };
  },
  components: {
    CreateFAMILY
  },
  methods: {
    toggleDialogFAMILY() {
      this.dialogFAMILY = !this.dialogFAMILY;
    }
  }
};
</script>