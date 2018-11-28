<template>
  <div class="animated fadeIn">
    <div id="research-view">
      <b-form>
        <b-form-group label="Title" horizontal :label-cols="2">
          <b-form-input type="text" v-model="title" readonly></b-form-input>
        </b-form-group>
        <b-form-group label="Description" horizontal :label-cols="2">
          <b-form-textarea v-model="description" rows="2" :max-rows="3"></b-form-textarea>
        </b-form-group>
        <b-form-group label="First Author" horizontal :label-cols="2">
          <b-form-input type="text" v-model="firstAuthorName" readonly class="col-sm-3"></b-form-input>
          <b-form-input type="text" v-model="firstAuthorNip" readonly class="col-sm-3"></b-form-input>
        </b-form-group>
        <b-form-group label="Other Author" horizontal :label-cols="2">
          <b-row>
            <b-col sm="4">
              <b-form-input type="text" v-model="authorName1" readonly></b-form-input>
            </b-col>
            <b-col sm="4">
              <b-form-input type="text" v-model="authorName2" readonly></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-input type="text" v-model="authorNip1" readonly></b-form-input>
            </b-col>
            <b-col sm="4">
              <b-form-input type="text" v-model="authorNip2" readonly></b-form-input>
            </b-col>
          </b-row>
        </b-form-group>
        <b-form-group label="Publisher Institue" horizontal :label-cols="2">
          <b-form-input type="text" v-model="publisher" readonly></b-form-input>
        </b-form-group>
        <b-form-group label="Published Date" horizontal :label-cols="2">
          <b-form-input type="text" v-model="publishedDate" readonly></b-form-input>
        </b-form-group>
        <b-form-group label="Source" horizontal :label-cols="2">
          <b-form-input type="text" v-model="source" readonly></b-form-input>
        </b-form-group>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResearchView',
  data () {
    return {
      icon: '\uF002 Search For ...',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Et suas dolor possim eam, ea his nihil sanctus salutatus. At quo sonet tincidunt. An sea semper facilis singulis, ei aeque expetendis cum. Et vix molestie mediocritatem. Ad brute graece efficiendi vel, vix ei ignota quodsi vidisse. Id purto eripuit nec, te eum consul ornatus vituperatoribus, duis epicurei ea ius. Te qui posse officiis luptatum, eos conceptam liberavisse cu, reque euismod vix ut. At eos deleniti persecuti. Suas aeterno ad nam, vel te tale case. Sea cu integre appetere periculis, sed at alii phaedrum honestatis.',
      firstAuthorNip: '198910202001020001',
      firstAuthorName: 'Yoga Nasukha',
      authorNip1: '197011101996040002',
      authorName1: 'Dendi Rohandy',
      authorNip2: '199509142005010001',
      authorName2: 'Akbar Hariadi',
      publisher: 'Fakultas Sains dan Teknik',
      publishedDate: '19-10-2018',
      source: 'Manual',
    }
  },
  computed: {

  },
  methods: {
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