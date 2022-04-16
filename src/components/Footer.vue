<template>
  <div class="bg-secondary">
    <div class="container py-3">
      <div class="row pt-1 align-items-center">
        <div
          class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow"
          style="color: white;"
        >
          <span>Copyright © {{ year }} Wildan Hakim</span>
        </div>

        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <div class="text-center">
            <a class="btn btn-outline-secondary mx-2 " href="https://www.linkedin.com/in/wildan-hakim/" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'LinkedIn'">
              <i class="fab fa-linkedin"></i>
            </a>
            <a class="btn btn-outline-secondary mx-2" href="https://github.com/wildanhkm" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'GitHub'">
              <i class="fab fa-github"></i>
            </a>
            <a class="btn btn-outline-secondary mx-2" href="https://drive.google.com/file/d/1t1Z1qpcP8-LCLE-JWWAgjwZNcGrt5DZ6/view?usp=sharing" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'Resume'">
              <i class="fa fa-file"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
span {
  font-weight: 500;
}

.btn {
  border-color: white;
  color: white;
}

.btn:hover {
  background-color: white;
  border-color: white;
  color: gray;
}

.btn:focus {
  background-color: white;
  border-color: white;
  color: gray;
}

@media screen and (max-width: 580px) {
  .pbelow {
    padding-bottom: 20px;
    text-align: center;
  }
}
</style>
