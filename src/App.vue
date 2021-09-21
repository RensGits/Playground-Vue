

<template>
  <div id="nav">
    <div class = 'navItems'>
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
    <router-link   to="/components">Components</router-link>
    </div>
  </div>
  <router-view @emitFromComponentsToApp = 'handleStyling' class = 'routerView' :class = "{dark: darkMode}"  />
  <Footer class = 'footer'/>
  
</template>



<script>
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {Footer},
  data(){
    return{
      darkMode: false
    }
  },

  methods: {
    handleStyling(){
      console.log('event recieved by App')
      this.darkMode = !this.darkMode
    },
   
  }
}
</script>



<style>

body,html{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll; 
}
body::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}

#app {

  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: 5em 5em auto auto;
  gap: 0.1em;
  background-color:whitesmoke;
  min-height: 100vh;
  width: 100%;

} 

.routerView{
  grid-column: 3/11;
  grid-row-start: 3;
  min-height: 70em;
  background-color: lightcoral;
}

.dark{
  background-color: black;
}

#nav{
  display: grid;
  position: sticky;
  grid-template-columns: repeat(8,1fr);
  grid-row: 2;
  grid-column: 3/11;
  top: 0;
  background-color: whitesmoke;
}

.navItems {
  align-self: start;
  grid-column: 5/9;
  grid-row: 2;
  display: flex;
  justify-content: space-between;
  background-color: whitesmoke;
}

.footer{
  grid-row-start: 4;
  grid-column: 3/11;
  height: auto;
  margin-top: 2em;
}

#nav a {
  color: black
}

#nav a.router-link-exact-active {
  color: burlywood
}

</style>
