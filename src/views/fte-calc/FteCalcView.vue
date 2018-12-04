<template>
  <div class="animated fadeIn">
    <div id="initial-verif-view">
      <b-form>
        <b-form-group label="Regulation Number" horizontal :label-cols="2">
          <b-form-input type="text" v-model="regulationNumber" readonly class="col-sm-3"></b-form-input>
        </b-form-group>
        <b-form-group label="Regulation Date" horizontal :label-cols="2">
          <b-form-input type="text" v-model="regulationDate" readonly></b-form-input>
        </b-form-group>
        <b-form-group label="Document Type" horizontal :label-cols="2">
          <b-form-input type="text" v-model="documentType" readonly></b-form-input>
        </b-form-group>
        <b-form-group label="SKS Equivalent" horizontal :label-cols="2">
          <b-form-input type="text" v-model="sksEquivalent" readonly></b-form-input>
        </b-form-group>
        <b-form-group label="First Corresponding Author" horizontal :label-cols="2">
          <b-form-input type="text" v-model="authorName" readonly></b-form-input>
        </b-form-group>
        <b-form-group label="Other Author" horizontal :label-cols="2">
          <b-form-input type="text" v-model="otherAuthorName" readonly></b-form-input>
        </b-form-group>
        <b-form-group label="Status" horizontal :label-cols="2">
          <b-form-input type="text" v-model="status" readonly></b-form-input>
        </b-form-group>
      </b-form>
      <b-button @click="goBack" variant="primary">&laquo; Kembali</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FteVerifView',
  data () {
    return {
      icon: '\uF002 Search For ...',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Et suas dolor possim eam, ea his nihil sanctus salutatus. At quo sonet tincidunt. An sea semper facilis singulis, ei aeque expetendis cum. Et vix molestie mediocritatem. Ad brute graece efficiendi vel, vix ei ignota quodsi vidisse. Id purto eripuit nec, te eum consul ornatus vituperatoribus, duis epicurei ea ius. Te qui posse officiis luptatum, eos conceptam liberavisse cu, reque euismod vix ut. At eos deleniti persecuti. Suas aeterno ad nam, vel te tale case. Sea cu integre appetere periculis, sed at alii phaedrum honestatis.',
      authorNip: '198910202001020001',
      authorName: 'Yoga Nasukha',
      otherAuthorName: 'Dendi Rohandy, Akbar Hariadi',
      authorStatus: 'First Author',
      publisher: 'Fakultas Sains dan Teknik',
      publishedDate: '19-10-2018',
      regulationDate: '19-11-2018',
      regulationNumber: 'JP/01.02/XII/2018',
      source: 'Manual',
      sksEquivalent: '3',
      documentType: 'Jurnal',
      status: 'Active',
    }
  },
  computed: {

  },
  methods: {
    goBack () {
      this.$router.push('fte-calc-list');
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