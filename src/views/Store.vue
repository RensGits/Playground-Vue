<template>
<div class = 'store'>
  <h1>This is the Store / Vuex page</h1>
  
  <section>
    <h3>Current store state</h3>
    <div class = "data">
        <div>
            <h4>Name</h4>
            <ul>
                <li v-for="person in people">
                    {{person.name}}
                </li>    
            </ul>
        </div>
        <div>
            <h4>Company</h4>
            <ul>
                <li v-for="person in people">
                    {{person.company}}
                </li>    
            </ul>
        </div>
        <div>
            <h4>Region</h4>
            <ul>
                <li v-for="person in people">
                    {{person.region}}
                </li>    
            </ul>
        </div>
        <div>
            <h4>Age</h4>
            <ul>
                <li v-for="person in people">
                    {{person.age}}
                </li>    
            </ul>
        </div>
    </div>
  </section>

  <section>
      <h3>Getters (firstname toLowercase)</h3>
      <div class = "data">
        <div>
            <h4>Name</h4>
            <ul>
                <li v-for="person in lowercasePeople">
                    {{person.name}}
                </li>    
            </ul>
        </div>
        <div>
            <h4>Company</h4>
            <ul>
                <li v-for="person in people">
                    {{person.company}}
                </li>    
            </ul>
        </div>
        <div>
            <h4>Region</h4>
            <ul>
                <li v-for="person in people">
                    {{person.region}}
                </li>    
            </ul>
        </div>
        <div>
            <h4>Age</h4>
            <ul>
                <li v-for="person in people">
                    {{person.age}}
                </li>    
            </ul>
        </div>
    </div>

  </section>
  <section>
      <h3>Mutations</h3>
      <p>The following buttons will mutate the current state of the store</p>
      <button @click='increaseAge(1)'>increase age</button><span><button @click='decreaseAge(1)'>decrease age</button></span>
  </section>
    <section>
      <h3>Actions</h3>
      <p>The following buttons will mutate the current state of the store, but via an action. This action has a build in timeout to simulate a server request.</p>
      <button @click='increaseAgeAction(2)'>increase age</button><span><button @click='decreaseAgeAction(2)'>decrease age</button></span>
  </section>
  </div>
</template>


<script>
export default {
    name: "Store",
    computed: {
        people(){
            return this.$store.state.people
        },
        lowercasePeople(){
            return this.$store.getters.lowercasePeople
        }
    },
    methods: {
        increaseAge(amount){
            this.$store.commit('increaseAge', amount)
        },
        decreaseAge(amount){
            this.$store.commit('decreaseAge', amount)
        },
        increaseAgeAction(amount){
            this.$store.dispatch('increaseAgeAction', amount)
        },
        decreaseAgeAction(amount){
            this.$store.dispatch('decreaseAgeAction', amount)
        }
    }
}
</script>


<style>
    .store{
        height: auto;
    }

    h1{
    padding: 3rem;
  }


  h1,h2,h3,h4,p,li,label{
    color:white;
    
  }

  h3{
    font-weight: 200;
    color: pink;
    padding-right: 3em;
  }

  section{
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    padding-left: 3rem;
  }

  .data{
      display: flex;
      justify-content: space-between;
      margin-right: 6em;
  }
</style>