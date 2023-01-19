<template>
  <div class="container mt-5 utama">
    <header>
      <h3 class="d-flex justify-content-center">Diari Jajan Februari 2021</h3>
      <p class="text-center">Pengeluaran Bulan ini Rp{{ sum }}</p>
      <div class="modal-button d-flex justify-content-center">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">TAMBAH ITEM</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Tambah Entri</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="PostApi">
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Nama :</label>
                    <input type="text" class="form-control" v-model.trim="newData.nama" />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Harga :</label>
                    <input type="number" class="form-control" v-model.trim="newData.pengeluaraan" />
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                    <button type="submit" class="btn btn-primary">Kirim</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-3">
        <div class="row">
          <div class="card todo col-3" v-for="(groups, date) in groupedUsers">
            <div class="card-body">
              <h3 class="card-title">{{ date }}</h3>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="group in groups">{{ group.jam }} {{ group.nama }} Rp.{{ group.pengeluaraan }}</li>
              </ul>
              <div class="card-footer">
                <div class="row">
                  <div class="col-6">Total =</div>
                  <div class="col-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <article class="container"></article>
  </div>
</template>

<script>
// import userData from './data.json';
import axios from 'axios';
import _ from 'lodash';
const baseUrl = 'http://localhost:3000/items';

export default {
  name: 'HelloWorld',

  data() {
    return {
      items: [],
      sortedData: [],
      newData: {
        jam: '10:42',
        tanggal: '19 Februari 2021',
        nama: '',
        pengeluaraan: '',
      },
      sum: 3222251,
      jsonData: [],
    };
  },
  methods: {
    async GetApi() {
      await axios
        .get(baseUrl)
        .then((response) => {
          this.items = response.data;
          this.sortData();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async PostApi() {
      await axios
        .post('http://localhost:3000/items', this.newData)
        .then((response) => {
          console.log(response.data);
          this.newData = '';
          this.GetApi();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    sortData() {
      this.sortedData = this.jsonData.sort((a, b) => (a.id > b.id ? 1 : -1));
    },
    getDataFromJSON() {
      this.jsonData = baseUrl;
      this.sum = this.calculateSum();
    },
    calculateSum() {
      let sum = 0;
      this.jsonData.forEach((items) => {
        return _.groupBy(this.items, 'pengeluaraan');
        {
          sum += items.value;
        }
      });
      return sum;
    },
  },
  computed: {
    groupedUsers() {
      return _.groupBy(this.items, 'tanggal');
    },
  },
  mounted() {
    this.GetApi();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.utama {
  background-color: aliceblue;
}
</style>
