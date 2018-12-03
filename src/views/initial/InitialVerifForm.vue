<template>
  <div class="animated fadeIn">
    <div id="initial-verif-form">
      <b-form>
        <b-form-group label="Title" horizontal :label-cols="2">
          <b-form-input type="text" v-model="title" placeholder="Enter Title" readonly></b-form-input>
        </b-form-group>
        <b-form-group label="Description" horizontal :label-cols="2">
          <b-form-textarea v-model="description" rows="2" :max-rows="3" placeholder="Enter Description" readonly></b-form-textarea>
        </b-form-group>
        <b-form-group label="First Author" horizontal :label-cols="2">
          <b-row>
            <b-col sm="7">
              <v-select disabled v-model="selectedFirstAuthor" :options="firstAuthorOptions"></v-select>
            </b-col>
          </b-row>
          <!-- <b-form-select v-model="selectedFirstAuthor" :options="firstAuthorOptions" class="col-md-5" /> -->
        </b-form-group>
        <b-form-group label="Other Author" horizontal :label-cols="2">
          <v-select disabled multiple v-model="selectedOtherAuthor" :options="otherAuthorOptions"></v-select>
        </b-form-group>
        <b-form-group label="Publisher Institue" horizontal :label-cols="2">
          <b-row>
            <b-col sm="5">
              <b-form-input type="text" v-model="publisher" placeholder="Enter Publisher Institue" readonly></b-form-input>
            </b-col>
          </b-row>
        </b-form-group>
        <b-form-group label="Published Date" horizontal :label-cols="2">
          <!-- <b-form-input type="text" v-model="publishedDate"></b-form-input> -->
          <b-row>
            <b-col sm="3">
              <v-date-picker v-model='myDate' :show-day-popover="false" popoverVisibility="focus" popoverDirection="top" @input="handleInput">
                <div slot-scope="props">
                    <input type="text" class="form-control"
                      placeholder="Pilih Tanggal Publish"
                      :value="props.inputValue"
                     readonly/>
                   </div>
              </v-date-picker>
            </b-col>
          </b-row>
        </b-form-group>
        <b-form-group label="FTE Status" horizontal :label-cols="2">
          <b-form-checkbox v-model="fteStatus" value="Y" unchecked-value="T"></b-form-checkbox>
        </b-form-group>
        <b-form-group label="Verification Status" horizontal :label-cols="2">
          <b-row>
            <b-col sm="5">
              <b-form-input type="text" v-model="verifStatus" placeholder="Enter Verification Status" readonly></b-form-input>
            </b-col>
          </b-row>
        </b-form-group>
        <!-- <b-form-group label="Source" horizontal :label-cols="2">
          <b-row>
            <b-col sm="5">
              <b-form-input type="text" v-model="source" placeholder="Enter Source"></b-form-input>
            </b-col>
          </b-row>
        </b-form-group> -->
        <b-button type="submit" variant="success">Simpan</b-button>&nbsp;
        <b-button href="#/initial" variant="outline-primary">Batal</b-button>
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
  name: 'InitialVerifForm',
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
      authorNip1: '197011101996040002',
      authorName1: 'Dendi Rohandy',
      authorNip2: '199509142005010001',
      authorName2: 'Akbar Hariadi',
      publisher: 'Fakultas Sains dan Teknik',
      myDate: new Date(2018, 11, 2),
      fteStatus: 'T',
      verifStatus: 'Terverifikasi',
      selectedFirstAuthor: '198910202001020001 - Yoga Nasukha',
      selectedOtherAuthor: [
        {value: '197011101996040002', label: '197011101996040002 - Dendi Rohandy'},
        {value: '199509142005010001', label: '199509142005010001 - Akbar Hariadi'},
      ],
      firstAuthorOptions: [
        {value: '198910202001020001', label: '198910202001020001 - Yoga Nasukha'},
        {value: '197011101996040002', label: '197011101996040002 - Dendi Rohandy'},
        {value: '199509142005010001', label: '199509142005010001 - Akbar Hariadi'},
      ],
      otherAuthorOptions: [
        {value: '198910202001020001', label: '198910202001020001 - Yoga Nasukha'},
        {value: '197011101996040002', label: '197011101996040002 - Dendi Rohandy'},
        {value: '199509142005010001', label: '199509142005010001 - Akbar Hariadi'},
      ],
      myDate: null,
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