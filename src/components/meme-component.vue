<template>
  <div class="meme-item" :class="{ 'fullscreen': isFullscreen }" @click="onItemClick">
    <img :src="meme.url" :alt="meme.alt" @click="onClick" />
    <div class="full">
      <img :src="meme.url" :alt="meme.alt" />
    </div>
  </div>
</template>

<script>


export default {
  name: "MemeComponent",
  props: {
    isFullscreen: {
      type: Boolean,
      required: true
    },
    meme: {
      type: Object,
      required: true
    }
  },

  methods: {
    onItemClick(nativeEvent) {
      this.$emit("offscreen");
    },

    onClick(nativeEvent) {
      nativeEvent.stopPropagation();

      this.$router.push({
        name: 'pId',
        params: {
          id: this.meme.id,
          cat: this.$route.params.cat
        }
      })

      this.$emit("click");
    }
  }
};
</script>

<style lang="scss">
.meme-item {
  width: 100%;
  margin-top: 15px;
  padding: 15px;
  transition: background-color 0.2s ease-in-out;

  .full {
    height: 0;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    display: flex;
  }

  &.fullscreen {
    .full {
      padding: 15px;
      position: fixed;
      z-index: 10;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.5);
      margin: 0;
      height: auto;
      opacity: 1;
      cursor: pointer;
    }
  }

  img {
    transition: all 0.2s ease-in-out;
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 15px 0 rgba(0, 0, 0, 0.25);
    }
  }
}
</style>