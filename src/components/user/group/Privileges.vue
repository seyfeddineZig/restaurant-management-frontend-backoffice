<template>
  <div>
    <div class="text-h6 q-mt-md q-mb-md">Privilèges</div>
    <div class="row">
      <div class="col-md-12">
        <q-toggle label="Séléctionner tout" v-model="all" color="blue-10" />
      </div>
    </div>
    <div class="row">
      <div v-for="g in groups" :key="g" class="q-gutter-sm col-md-6 q-pa-sm">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-subtitle2">{{ g }}</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div v-for="p in privileges" :key="p.id">
              <q-toggle
                v-if="p.group === g"
                :label="p.description "
                v-model="selection"
                :val="p.id"
                color="blue-10"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["selected"],
  data() {
    return {
      all: false,
      selection: [],
      privileges: [],
      groups: []
    };
  },
  mounted() {
    this.getAll();
    if (this.selected && this.selected.length > 0) {
      this.selected.forEach(el => {
        this.selection.push(el.privilegeId);
      });
    }
    this.$emit("privileges", this.selection);
  },
  watch: {
    all: function(newVal, oldVal) {
      if (this.all) {
        this.privileges.forEach(el => {
          this.selection.push(el.id);
        });
      } else if (!newVal && oldVal) {
        this.selection = [];
      }
      this.$emit("privileges", this.selection);
    },
    selection: function() {
      if (this.selection.length === this.privileges.length && !this.all) {
        this.all = true;
      }
      this.$emit("privileges", this.selection);
    }
  },
  methods: {
    getAll() {
      this.$http
        .get("privileges/index")
        .then(res => {
          res.data.forEach(el => {
            if (!this.groups.find(e => e === el.group)) {
              this.groups.push(el.group);
            }
            this.privileges.push(el);
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style>
</style>