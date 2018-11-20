<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="3">
        <!-- <b-form> -->
          <b-form-group>
            <b-input-group>
              <b-form-input type="text" :placeholder="icon" class="empty"></b-form-input>
            </b-input-group>
          </b-form-group>
        <!-- </b-form> -->
      </b-col>
      <b-col md="4" offset-md="5">
        <b-btn variant="primary" size="md" href="/research/add-research" class="pull-right">+ Tambah Research Product</b-btn>
      </b-col>
    </b-row>
    <div id="research-grid">
      <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {ServerTable, ClientTable, Event} from 'vue-tables-2';

Vue.use(ClientTable, null, false, 'bootstrap4', 'default');

export default {
  name: 'ResearchList',
  data () {
    return {
      icon: '\uF002 Search For ...',
      columns: ['id', 'name', 'age'],
      tableData: [
          { id: 1, name: "John", age: "20" },
          { id: 2, name: "Jane", age: "24" },
          { id: 3, name: "Susan", age: "16" },
          { id: 4, name: "Chris", age: "55" },
          { id: 5, name: "Susan", age: "16" },
          { id: 6, name: "Chris", age: "55" },
          { id: 7, name: "Susan", age: "16" },
          { id: 8, name: "Chris", age: "55" },
          { id: 9, name: "Susan", age: "16" },
          { id: 10, name: "Chris", age: "55" },
          { id: 11, name: "Chris", age: "55" },
          { id: 12, name: "Susan", age: "16" },
          { id: 13, name: "Chris", age: "55" },
          { id: 14, name: "Dan", age: "40" }
      ],
      options: {
        headings: {
          id: 'No.',
          name: 'Name',
          age: 'Age',
        },
        sortable: ['id', 'name', 'age'],
        filterable: false,
        perPageValues: []
      }
    }
  },
  methods: {
    click () {
      // do nothing
    }
  }
}
</script>