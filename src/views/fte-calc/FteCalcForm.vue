<template>
  <div class="animated fadeIn">
    <div id="initial-verif-form">
      <b-form>
        <b-form-group label="Regulation Number" horizontal :label-cols="2">
          <b-form-input type="text" v-model="regulationNumber" placeholder="Enter Regulation Number" readonly></b-form-input>
        </b-form-group>
        <b-form-group label="Regulation Date" horizontal :label-cols="2">
          <!-- <b-form-input type="text" v-model="publishedDate"></b-form-input> -->
          <b-row>
            <b-col sm="3">
              <v-date-picker v-model='regulationDate' :show-day-popover="false" popoverVisibility="focus" popoverDirection="top" @input="handleInput">
                <div slot-scope="props">
                    <input type="text" class="form-control"
                      placeholder="Pilih Tanggal Regulasi"
                      :value="props.inputValue"
                     readonly/>
                   </div>
              </v-date-picker>
            </b-col>
          </b-row>
        </b-form-group>
        <b-form-group label="Document Type" horizontal :label-cols="2">
          <b-row>
            <b-col sm="7">
              <v-select disabled v-model="selectedResearchType" :options="researchTypeOptions"></v-select>
            </b-col>
          </b-row>
          <!-- <b-form-select v-model="selectedFirstAuthor" :options="firstAuthorOptions" class="col-md-5" /> -->
        </b-form-group>
        <b-form-group label="SKS Equivalent" horizontal :label-cols="2">
          <b-form-input type="text" v-model="sksEquivalent" placeholder="Enter SKS Equivalent" readonly></b-form-input>
        </b-form-group>
        <b-form-group label="First Corresponding Author" horizontal :label-cols="2">
          <b-row>
            <b-col sm="7">
              <v-select disabled v-model="selectedAuthor" :options="authorOptions"></v-select>
            </b-col>
          </b-row>
          <!-- <b-form-select v-model="selectedFirstAuthor" :options="firstAuthorOptions" class="col-md-5" /> -->
        </b-form-group>
        <b-form-group label="Other Author" horizontal :label-cols="2">
          <v-select disabled multiple v-model="selectedOtherAuthor" :options="otherAuthorOptions"></v-select>
        </b-form-group>
        <b-form-group label="Status" horizontal :label-cols="2">
          <b-form-select v-model="status" :options="statusOptions" class="col-md-3"/>
        </b-form-group>
        <b-button type="submit" variant="success">Simpan</b-button>&nbsp;
        <b-button href="#/fte-calc" variant="outline-primary">Batal</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import vSelect from 'vue-select/src/components/Select.vue'
import { setupCalendar, DatePicker, Calendar} from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'

Vue.component('v-select', vSelect)
Vue.component('v-date-picker', DatePicker)

setupCalendar({
  firstDayOfWeek: 2
});

export default {
  name: 'FteVerifForm',
  props: {
    value: {
      type: Object
    },
  },

  watch: {
    value: function (value) {
      this.selectedDates = value;
    }
  },

  model: {
    prop: 'value',
    event: 'input'
  },

  data () {
    return {
      icon: '\uF002 Search For ...',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Et suas dolor possim eam, ea his nihil sanctus salutatus. At quo sonet tincidunt. An sea semper facilis singulis, ei aeque expetendis cum. Et vix molestie mediocritatem. Ad brute graece efficiendi vel, vix ei ignota quodsi vidisse. Id purto eripuit nec, te eum consul ornatus vituperatoribus, duis epicurei ea ius. Te qui posse officiis luptatum, eos conceptam liberavisse cu, reque euismod vix ut. At eos deleniti persecuti. Suas aeterno ad nam, vel te tale case. Sea cu integre appetere periculis, sed at alii phaedrum honestatis.',
      firstAuthorNip: '198910202001020001',
      firstAuthorName: 'Yoga Nasukha',
      sksEquivalent: '3',
      publisher: 'Fakultas Sains dan Teknik',
      regulationDate: new Date(2018, 11, 19),
      regulationNumber: 'JP/01.02/XII/2018',
      selectedAuthor: '198910202001020001 - Yoga Nasukha',
      authorOptions: null,
      status: null,
      statusOptions: [
        {value: null, text: 'Pilih Status'},
        {value: 'active', text: 'Active'},
        {value: 'non_active', text: 'Non Active'},
      ],
      selectedResearchType: 'Journal',
      researchTypeOptions: [
        {value: 'journal', label: 'Journal'},
        {value: 'book', label: 'Book'},
        {value: 'article', label: 'Article'},
        {value: 'essay', label: 'Essay'},
        {value: 'proceeding', label: 'Proceeding'},
      ],
      selectedOtherAuthor: [
        {value: '197011101996040002', label: '197011101996040002 - Dendi Rohandy'},
        {value: '199509142005010001', label: '199509142005010001 - Akbar Hariadi'},
      ],
      otherAuthorOptions: [
        {value: '198910202001020001', label: '198910202001020001 - Yoga Nasukha'},
        {value: '197011101996040002', label: '197011101996040002 - Dendi Rohandy'},
        {value: '199509142005010001', label: '199509142005010001 - Akbar Hariadi'},
      ],
    }
  },
  computed: {

  },
  methods: {
    handleInput(e) {
        this.$emit('input', this.myDate);
        this.$emit('changed');
    },
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