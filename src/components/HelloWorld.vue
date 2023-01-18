<template>
  <div class="container mt-5 utama">
    <header>
      <h3>Diari Jajan Februari 2021</h3>
      <p class="text-center">Pengeluaran Bulan ini</p>
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
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Nama :</label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Harga :</label>
                    <input type="number" class="form-control" id="recipient-name" />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                <button type="button" class="btn btn-primary">Kirim</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-3">
        <div class="row">
          <div class="card todo col-3" v-for="(genderUsers, gender) in groupedUsers">
            <div class="card-body">
              <h3 class="card-title">{{ gender }}</h3>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="user in genderUsers">{{ user.jam }} {{ user.nama }} Rp.{{ user.pengeluaraan }}</li>
              </ul>
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
import _ from 'lodash';

export default {
  name: 'HelloWorld',

  data() {
    return {
      users: [],
    };
  },
  created() {
    // Import the JSON file
    import('./data.json').then((jsonData) => {
      this.users = jsonData.title;
    });
  },
  computed: {
    groupedUsers() {
      return _.groupBy(this.users, 'tanggal');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.utama {
  background-color: aliceblue;
}
</style>
