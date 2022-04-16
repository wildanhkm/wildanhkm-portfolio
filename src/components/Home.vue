<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="pt-5 p-st">
    <div class="container" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
      <div class="row align-items-center">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center">
          <!-- <img :src="picture" /> -->
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5">
          <span class="home-title" :class="{ pgray: !nightMode, 'text-light': nightMode }">Welcome to my portfolio!</span>
          <div>
            <p v-html="description"></p>
          </div>
          <div class="text-center pb-4">
            <a class="btn btn-outline-secondary mx-2 " href="https://www.linkedin.com/in/wildan-hakim/" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'LinkedIn'">
              <i class="fab fa-linkedin"></i>
            </a>
            <a class="btn btn-outline-secondary mx-2" href="https://github.com/wildanhkm" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'GitHub'">
              <i class="fab fa-github"></i>
            </a>
            <a class="btn btn-outline-secondary mx-2" href="https://drive.google.com/file/d/1W0pzOo1Gb-W70BYKehOfZ4qaJt7m1_7O/view?usp=sharing" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'Resume'">
              <i class="fa fa-file"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Home",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      picture: info.flat_picture,
      description: info.description,
      name: info.name,
    };
  },
};
</script>

<style scoped>
.home-title {
  font-size: 32px;
  font-weight: 500;
}

img {
  max-width: 800px;
  max-height: 500px;
  margin-top: 80px;
  transform: rotateY(180deg);
}

@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205);
  }
}

.fa {
  font-size: 15px;
}

.btn {
  border-color: #759cc9;
  color: #759cc9;
}

.btn:hover {
  background-color: #759cc9;
  border-color: #759cc9;
  color: white;
}

.btn:focus {
  background-color: #759cc9;
  border-color: #759cc9;
  color: white;
}

.btn:focus {
  outline: none !important;
}

p {
  text-align: justify;
  font-weight: 400;
}

/* LEAVES */
</style>
