<template>
  <div>
    <div>
      Cat: {{$route.params.cat}}
      <br />
      Id: {{$route.params.id}}
      <br />
      <button @click="randomize">RANDOMIZE</button>
    </div>
    <div class="memes-container">
      <div v-for="(col, i) in initMemes" :key="i" class="col">
        <MemeComponent
          v-for="(meme, i) in col.memes"
          :key="i"
          :meme="meme"
          :is-fullscreen="toggled === meme.id"
          @click="fullscreen"
          @offscreen="offScreen"
        />
      </div>
    </div>
    <div :class="{'wrong-cat' : isMemesEmpty}">
      <p>Wrong category!</p>
    </div>
  </div>
</template>

<script>

import MemeComponent from "./meme-component";
import api from "./api";

export default {
  name: "MemesContainerComponent",
  components: {
    MemeComponent
  },
  props: {
    memes: {
      type: Array,
      required: false,
      default: () => api.memes 
    }
  },

  data() {
    return {
      toggled: null,
      computedMemes: {
        type: Array,
        required: false
      },
      wrongCat: {
        type: Boolean,
        required: false
      }
    };
  },

  mounted(){
    this.fullscreen()
  },

  updated(){
    this.fullscreen()
  },

  computed: {
    initMemes() {
      this.filterMemesByCat()
      this.cols()
      return this.computedMemes
    },

    isMemesEmpty() {
      // Sposób z api.category
      //
      // for (let prop in api.category) {
      //   if (this.$route.params.cat === undefined || api.category[prop].toLowerCase() === this.$route.params.cat.toLowerCase()) {
      //     return true
      //   }
      // }
      // return false

      if (this.computedMemes[0].memes.length === 0){
        return false
      }else {
        return true
      }
    }
  },

  methods: {
    randomize() {
      this.computedMemes = this.memes.sort((a, b) => {
        return Math.round(Math.random()) === 1 ? -1 : 1;
      });
    },

    fullscreen(postId = this.$route.params.id){
      if (this.$route.name === "pId") {
        this.toggled = Number(postId)
      }else{
        this.toggled = null
      }
    },

    offScreen(){
      this.toggled = null
      this.$router.push({
        name: 'cat',
        params: {
          cat: this.$route.params.cat
          }
        }).catch(err => {})
    },

    filterMemesByCat() {
      let ret = [];

      if (this.$route.params.cat === undefined) {
        ret.push(...this.memes);
      } else {
        for (let prop in this.memes) {
          if (this.memes[prop].cat.toLowerCase() === this.$route.params.cat.toLowerCase()) {
            ret.push(this.memes[prop]);
          }
        }
      }

      this.computedMemes = ret;
    },

    cols() {
      const memes = this.computedMemes;

      const cols = 4;
      const every = Math.ceil(memes.length / cols);
      const last = every * cols - memes.length;

      const ret = [];

      for (let i = 0; i < cols; i++) {
        if (i === cols - 1) {
          ret.push({
            memes: [...memes].slice(every * i, every * i + last)
          });
        } else {
          ret.push({
            memes: [...memes].slice(every * i, every * i + every)
          });
        }
      }

      this.computedMemes = ret;
    }
  }
};
</script>

<style lang="scss">
.memes-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;

  .col {
    display: flex;
    flex-wrap: wrap;
    width: 25%;
    height: auto;
    flex-basis: 25%;

    @media (max-width: 768px) {
      width: 100%;
      flex-basis: 100%;
    }
  }
}
.wrong-cat{
  display: none;
}
</style>