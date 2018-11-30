<template>
  <div class="animated fadeIn">
    <div id="research-view">
      <b-form>
        <b-form-group label="Title" horizontal :label-cols="2">
          <b-form-input type="text" v-model="title" placeholder="Enter Title"></b-form-input>
        </b-form-group>
        <b-form-group label="Description" horizontal :label-cols="2">
          <b-form-textarea v-model="description" rows="2" :max-rows="3" placeholder="Enter Description"></b-form-textarea>
        </b-form-group>
        <b-form-group label="First Author" horizontal :label-cols="2">
          <b-row>
            <b-col sm="5">
              <v-select v-model="selectedFirstAuthor" :options="firstAuthorOptions"></v-select>
            </b-col>
          </b-row>
          <!-- <b-form-select v-model="selectedFirstAuthor" :options="firstAuthorOptions" class="col-md-5" /> -->
        </b-form-group>
        <b-form-group label="Other Author" horizontal :label-cols="2">
          <v-select multiple v-model="selectedOtherAuthor" :options="otherAuthorOptions"></v-select>
        </b-form-group>
        <b-form-group label="Publisher Institue" horizontal :label-cols="2">
          <b-row>
            <b-col sm="5">
              <b-form-input type="text" v-model="publisher" placeholder="Enter Publisher Institue"></b-form-input>
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
        <!-- <b-form-group label="Source" horizontal :label-cols="2">
          <b-row>
            <b-col sm="5">
              <b-form-input type="text" v-model="source" placeholder="Enter Source"></b-form-input>
            </b-col>
          </b-row>
        </b-form-group> -->
        <b-button type="submit" variant="primary">Submit</b-button>
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
Vue.component('v-date-picker', DatePicker);

setupCalendar({
  firstDayOfWeek: 2
});

export default {
  name: 'ResearchForm',
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
      title: '',
      description: '',
      firstAuthorNip: '',
      firstAuthorName: '',
      authorNip1: '',
      authorName1: '',
      authorNip2: '',
      authorName2: '',
      publisher: '',
      publishedDate: '',
      source: '',
      selectedFirstAuthor: null,
      selectedOtherAuthor: null,
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

<style type="text/css">
/*.popover-container input{
  display: block;
  width: 100%;
  height: calc(2.0625rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #5c6873;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e4e7ea;
  border-radius: 0.25rem;
  -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}*/
</style>