<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="3">
        <!-- <b-form> -->
          <b-form-group>
            <b-input-group>
              <b-form-input type="text" :placeholder="icon" class="empty" v-model="filter"></b-form-input>
            </b-input-group>
          </b-form-group>
        <!-- </b-form> -->
      </b-col>
      <!-- <b-col md="4" offset-md="5">
        <b-btn variant="primary" size="md" href="#/research/research-add" class="pull-right">+ Tambah Research Product</b-btn>
      </b-col> -->
    </b-row>
    <div id="research-grid">
      <b-table show-empty :items="items" :fields="fields" :per-page="perPage" :current-page="currentPage" :filter="filter" @filtered="onFiltered" @row-dblclicked="viewResearch" hover>
        <template slot="action" slot-scope="row">
          <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
          <b-button variant="warning" size="sm" @click="editData"><i class="fa fa-pencil"></i></b-button>
          <b-button href="#" variant="danger" size="sm"><i class="fa fa-times"></i></b-button>
        </template>
      </b-table>
      <nav>
        <b-pagination align="right" :total-rows="totalRows" :per-page="perPage" v-model="currentPage" prev-text="<" next-text=">"/>
      </nav>
    </div>
  </div>
</template>

<script>
import * as Const from '../../config/Constant'
import axios from 'axios'

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://api.rajaongkir.com/';
const items = [
        {author: 'Yoga Nasukha', other_author: 'Akbar Hariadi, Dendi Rohandy', title: 'Item Based Collaborative Filtering on E-Commerce', status: 'Active', document_type: 'Jurnal Penelitian', sks_equivalent: '3'},
        {author: 'Dendi Rohandy', other_author: 'Yoga Nasukha, Akbar Hariadi', title: 'Managing Scrum in All Aspect of Life', status: 'Active', document_type: 'Esai', sks_equivalent: '2'},
        {author: 'Akbar Hariadi', other_author: 'Dendi Rohandy, Yoga Nasukha', title: 'Defining The Truth of Vue JS', status: 'Non Active', document_type: 'Artikel', sks_equivalent: '1'},
        {author: 'Akbar Hariadi', other_author: 'Dendi Rohandy, Yoga Nasukha', title: 'Defining The Truth of Vue JS', status: 'Active', document_type: 'Conference Proceeding', sks_equivalent: '2'},
        {author: 'Akbar Hariadi', other_author: 'Dendi Rohandy, Yoga Nasukha', title: 'Defining The Truth of Vue JS', status: 'Active', document_type: 'Buku', sks_equivalent: '4'},
        {author: 'Akbar Hariadi', other_author: 'Dendi Rohandy, Yoga Nasukha', title: 'Defining The Truth of Vue JS', status: 'Non Active', document_type: 'Hak Cipta Bersertifikat', sks_equivalent: '2'},
        {author: 'Akbar Hariadi', other_author: 'Dendi Rohandy, Yoga Nasukha', title: 'Defining The Truth of Vue JS', status: 'Active', document_type: 'Artikel Internasional', sks_equivalent: '3'},
        {author: 'Yoga Nasukha', other_author: 'Dendi Rohandy, Akbar Hariadi', title: 'Item Based Collaborative Filtering on E-Commerce', status: 'Active', document_type: 'Proceeding', sks_equivalent: '1'},
        {author: 'Dendi Rohandy', other_author: 'Akbar Hariadi, Yoga Nasukha', title: 'Managing Scrum in All Aspect of Life', status: 'Non Active', document_type: 'Buku Chapter I', sks_equivalent: '3'},
        {author: 'Akbar Hariadi', other_author: 'Dendi Rohandy, Yoga Nasukha', title: 'Defining The Truth of Vue JS', status: 'Active', document_type: 'Artikel Internasional', sks_equivalent: '2'},
        {author: 'Yoga Nasukha', other_author: 'Dendi Rohandy, Akbar Hariadi', title: 'Item Based Collaborative Filtering on E-Commerce', status: 'Non Active', document_type: 'Conference Proceeding', sks_equivalent: '4'},
        {author: 'Dendi Rohandy', other_author: 'Akbar Hariadi, Yoga Nasukha', title: 'Managing Scrum in All Aspect of Life', status: 'Active', document_type: 'Paten', sks_equivalent: '1'},
        {author: 'Akbar Hariadi', other_author: 'Dendi Rohandy, Yoga Nasukha', title: 'Defining The Truth of Vue JS', status: 'Non Active', document_type: 'Paper', sks_equivalent: '3'},
      ]

export default {
  name: 'FteVerifList',
  data () {
    return {
      icon: '\uF002 Search For ...',
      items: items,
      fields: [
        // {key: 'Id', thClass: 'd-none', tdClass: 'd-none' }, save for later to have a row-id / row-uuid
        {key: 'document_type', sortable: true},
        {key: 'sks_equivalent', label: 'SKS Equivalent', sortable: true},
        {key: 'author', label: 'First Author', sortable: true},
        {key: 'other_author', sortable: true},
        {key: 'status', sortable: true},
        {key: 'action', label: 'Aksi'},
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      filter: null,
    }
  },
  computed: {

  },
  methods: {
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    viewResearch(r, i, e) {
      console.log(JSON.stringify(r))
      this.$router.push("fte-calc-view")
      // TODO, redirect to view detail
    },
    editData () {
      this.$router.push("fte-calc-edit")
    }
  },
  mounted() {
    // axios.get(Const.BASEURL + 'city', {
    //   params: {
    //     province: 10,
    //     key: '1b209427659178e861d8b581a3a9ac6e',
    //   },
    // })
    // .then(function (response) {
    //   console.log(response.results.province);
    // })
    // .catch(function (error) {
    //   // console.log(error);
    // })
    // .then(function () {
    //   // always executed
    // });  
  }
}
</script>