<template>
  <div id="app">
    <h1>MEMEGram</h1>
    <nav>
      <router-link :to="{name: 'cat'}">All</router-link>
      <router-link :to="{name: 'cat', params: {cat: 'funny'}}">Funny</router-link>
      <router-link :to="{name: 'cat', params: {cat: 'doggo'}}">Doggo</router-link>
      <router-link :to="{name: 'cat', params: {cat: 'jk'}}">Jk</router-link>
    </nav>
    <router-view name="container"></router-view>
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  margin: 10px;
}
</style>
