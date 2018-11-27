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
      <b-table :items="items" :fields="fields">
        <template slot="action" slot-scope="row">
          <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
          <b-button href="#" variant="warning" size="sm"><i class="fa fa-pencil"></i></b-button>
          <b-button href="#" variant="danger" size="sm"><i class="fa fa-times"></i></b-button>
        </template>
      </b-table>
      <nav>
        <b-pagination align="right" :total-rows="totalRows" :per-page="2" v-model="currentPage" prev-text="<" next-text=">"/>
      </nav>
    </div>
  </div>
</template>

<script>
import * as Const from '../../config/Constant'
import axios from 'axios'

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://api.rajaongkir.com/';

export default {
  name: 'ResearchList',
  data () {
    return {
      icon: '\uF002 Search For ...',
      currentPage: 1,
      fields: [
        {key: 'author', sortable: true},
        {key: 'nip', label: 'NIP', sortable: true},
        {key: 'title', sortable: true},
        {key: 'publisher', label: 'Publisher Institue', sortable: true},
        {key: 'published_date', sortable: true},
        {key: 'action', label: 'Aksi'},
      ],
      items: [
        {author: 'Yoga Nasukha', nip: '198910202001020001', title: 'Item Based Collaborative Filtering on E-Commerce', publisher: 'Fakultas Sains dan Teknik', published_date: '19-10-2018'},
        {author: 'Dendi Rohandy', nip: '197011101996040002', title: 'Managing Scrum in All Aspect of Life', publisher: 'Fakultas Ilmu Komputer', published_date: '19-10-2010'},
        {author: 'Akbar Hariadi', nip: '199509142005010001', title: 'Defining The Truth of Vue JS', publisher: 'Fakultas Ilmu Komputer', published_date: '19-11-2018'},
        {author: 'Akbar Hariadi', nip: '199509142005010001', title: 'Defining The Truth of Vue JS', publisher: 'Fakultas Ilmu Komputer', published_date: '19-11-2018'},
        {author: 'Akbar Hariadi', nip: '199509142005010001', title: 'Defining The Truth of Vue JS', publisher: 'Fakultas Ilmu Komputer', published_date: '19-11-2018'},
        {author: 'Akbar Hariadi', nip: '199509142005010001', title: 'Defining The Truth of Vue JS', publisher: 'Fakultas Ilmu Komputer', published_date: '19-11-2018'},
        {author: 'Akbar Hariadi', nip: '199509142005010001', title: 'Defining The Truth of Vue JS', publisher: 'Fakultas Ilmu Komputer', published_date: '19-11-2018'},
        {author: 'Yoga Nasukha', nip: '198910202001020001', title: 'Item Based Collaborative Filtering on E-Commerce', publisher: 'Fakultas Sains dan Teknik', published_date: '19-10-2018'},
        {author: 'Dendi Rohandy', nip: '197011101996040002', title: 'Managing Scrum in All Aspect of Life', publisher: 'Fakultas Ilmu Komputer', published_date: '19-10-2010'},
        {author: 'Akbar Hariadi', nip: '199509142005010001', title: 'Defining The Truth of Vue JS', publisher: 'Fakultas Ilmu Komputer', published_date: '19-11-2018'},
        {author: 'Yoga Nasukha', nip: '198910202001020001', title: 'Item Based Collaborative Filtering on E-Commerce', publisher: 'Fakultas Sains dan Teknik', published_date: '19-10-2018'},
        {author: 'Dendi Rohandy', nip: '197011101996040002', title: 'Managing Scrum in All Aspect of Life', publisher: 'Fakultas Ilmu Komputer', published_date: '19-10-2010'},
        {author: 'Akbar Hariadi', nip: '199509142005010001', title: 'Defining The Truth of Vue JS', publisher: 'Fakultas Ilmu Komputer', published_date: '19-11-2018'},
      ]
    }
  },
  computed: {
    totalRows: function () { return this.getRowCount() },
  },
  methods: {
    getRowCount: function () {
      console.log(this.items.length);
      return this.items.length
    }
    // click () {
      // do nothing
    // }
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