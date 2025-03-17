<template>
  <DashboardNav />
  <router-view />
</template>
<script>
import DashboardNav from "@/components/TopNav.vue";
export default {
  name: "App",
  components: {
    DashboardNav,
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Gilroy';
  src: url('https://your-cdn-link-to-gilroy/Gilroy-Regular.woff2') format('woff2'),
    url('https://your-cdn-link-to-gilroy/Gilroy-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Gilroy';
  src: url('https://your-cdn-link-to-gilroy/Gilroy-Bold.woff2') format('woff2'),
    url('https://your-cdn-link-to-gilroy/Gilroy-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --bg-background: #f3f8f3 !important;
  --bg-secondary: #274185 !important;
  --bg-primary: #1c75bc !important;
  --bg-third: #1C8452 !important;
  --bg-forth: #FEC111 !important;
  --bg-light: #ebfbff !important;
  --bg-grey: #546670 !important;
  --bg-lightgrey: #BACAD3 !important;
  // --bg-third: #1B9600 !important;
}

@keyframes slideRight {

  0%,
  100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(5px);
  }
}

.visit {
  display: inline-block;
  animation: slideRight 1.5s ease-in-out infinite;
}
</style>
