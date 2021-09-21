<template>
    <div class = 'components'>
        <h1>This is the components page</h1>
        <section>
          <h3 ref = 'h3ref'>Class changer</h3>
          <button @click="handleClassChange">click me</button>
        </section>

        <section>
            <h3 ref = 'h3ref2'>Conditional rendering</h3>
            <button @click="handleConditionalRendering">
              <span v-if = "showComponent">i'll take my chances</span>
              <span v-if = "!showComponent">Get it out of my face</span>
            </button>
            <div>
            <div v-if = "showComponent">
              <p>nothing to see here...</p>
            </div>
            <div v-else>
              <p>A wild paragraph appeared</p>
              <img src = '/pikachu.png' alt=""/>
            </div>
          </div>  
        </section>

        <section>
          <h3>Mouse event</h3>
          <div class = 'mouseArea' @mousemove="handleMousePosition"></div>
          <p>
            <span>mouse position X: {{mousePositionX}} </span>
            <span> mouse position Y: {{mousePositionY}}  </span>
          </p>
        </section>

        <section>
          <h3>v:for / rendering lists</h3>
            <button @click = 'handleShowSeaCreatures'>
              <span v-if = '!showSeaCreatures'>show pictures</span>
              <span v-else>hide pictures</span>
            </button>
            <div class = "seaContainer">
            
              <div class = "seaItem">
                <div v-if: = "showSeaCreatures" v-for: = "seaCreature in seaCreatures" @click = 'setFavorite(seaCreature)'  >
                  <p>{{seaCreature.name}}</p>
                  <img v-bind:src = seaCreature.img alt="" :class = "{seaAnimalPictures: true, favorite: seaCreature.favorite}"  >
                </div>
                <div v-else: v-for: = "seaCreature in seaCreatures" >
                  <p>{{seaCreature.name}}</p>
                </div>
              </div>

              <div class = "seaItem">
                <div v-if: = "showSeaCreatures" >
                  <h3>My favorite sea creatures are: </h3>
                  <p>click on any to set as favorite</p>
                    <p v-for: = "seaCreature in seaCreatures">
                      <span v-if="seaCreature.favorite">- {{seaCreature.name}}</span>
                    </p>
                </div>
              </div>
            </div>
        </section>

        <section>
            <h3>Event emitting</h3>
            <Child @emitFromChildToComponents = 'emitFromComponentsToApp' >
              <h3>I am a child component</h3>
            </Child>
        </section>

        <section>
            <h3>Form / Two-way data-binding</h3>
            <div class = 'seaContainer'>
              <div>
                <form @submit="handleSubmit">
                  <label for="name">Name</label>
                  <input id = 'name' type="text" required v-model='formName'>
                  <label for="age">Age</label>
                  <input id = 'age' type="text" required v-model='formAge'>
                  <label for="food"></label>
                  <select id="food" required v-model='formFood'>
                    <option value="hamburger">hamburger</option>
                    <option value="fries">fries</option>
                    <option value="pizza">pizza</option>
                    <option value="burrito">burrito</option>
                  </select>
                  
                  
                  <div class = 'terms'>
                    <label for="checkbox">accept terms and conditions</label>
                  <input id = "checkbox" type = "checkbox" required>
                  
                  </div>
                  <label>Add extra ingredients:</label>
                  <div class ='seaContainer'>
                    <input type="text" @keyup="handleIngredients" v-model='ingredient'>
                  </div>
                  <div class = 'ingredientPicker' v-for="i in ingredients" :key = i >
                    <div class = 'ingredientPicker'>
                        <p>{{i}}</p>
                       <i @click="handleDeleteIngredient(i)" class = 'material-icons'>delete</i>
                    </div>
                  </div>
                  
                  <input type="submit">
                </form>
              </div>
              <div>
                <h3>form inputs selected by user:</h3>
                <ul>
                  <li>name: {{formName}}</li>
                  <li>age: {{formAge}}</li>
                  <li>favorite food:{{formFood}}</li>
                </ul>
              </div>
            </div>
        </section>

      </div>
</template>

<script>

import {ref} from 'vue'
import Child from '../components/Child.vue'

export default {
    name: 'Components',
    components: {
      Child
    },
   
    setup(){

      const h3ref = ref(null)
      const handleClassChange = () => {
        h3ref.value.classList.toggle('h3toggle');
      }
      return { h3ref, handleClassChange}

    },

    data(){
      return{
         showComponent: true,
         showSeaCreatures: false,
         mousePositionX: 0,
         mousePositionY: 0,
         seaCreatures: [{
           name: 'Jellyfish',
           img: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Jelly_cc11.jpg',
           favorite: false
           
         },{
           name: 'Braincoral',
           img: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Brain_coral.jpg',
           favorite: false
         },{
           name: 'Starfish',
           img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Fromia_monilis_%28Seastar%29.jpg/1280px-Fromia_monilis_%28Seastar%29.jpg',
           favorite: false

         },{
           name: "Bedford's Flatworm",
           img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Bedford%27s_Flatworm.jpg',
           favorite: false
         }],
        formName: '',
        formAge: '',
        formFood: '',
        ingredient: '',
        ingredients: []
      }
    },


    methods: {
      handleConditionalRendering(){
          this.showComponent = !this.showComponent
          
      },
      handleMousePosition(e){
        this.mousePositionX = e.offsetX;
        this.mousePositionY = e.offsetY;
      },
      handleShowSeaCreatures(){
        this.showSeaCreatures = !this.showSeaCreatures
      },
      setFavorite(seaCreature){
        seaCreature.favorite = !seaCreature.favorite

      },
      emitFromComponentsToApp(){
        this.$emit('emitFromComponentsToApp')
        console.log('emit recieved from Child to Component')
       
      },
      handleIngredients(e){
        if(e.key === ',' && this.ingredient.length > 2){
          
          if(this.ingredients.includes(this.ingredient)){
            alert('that ingredient is already added');
            this.ingredient = ''}
          else{
            
          this.ingredients.push(this.ingredient.replace(',', ''));
          this.ingredient = '';
          console.log(this.ingredients)
        }}},
      handleDeleteIngredient(i){
       this.ingredients = this.ingredients.filter(x => {return x !== i})
       console.log(i)
      },
      handleSubmit(){
        
      }

    
}
}
</script>

<style scoped>


  .components{
    height: auto;
  }

  h1{
    padding: 3rem;
  }

  .h3toggle{
    color: black;
    font-weight: 500;
  }

  h1,h2,h3,p,li,label{
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

  .mouseArea{
    height: 15em;
    width: 15em;
    background-color: whitesmoke
  }

  .seaAnimalPictures{
    width: 30em;
    height: auto;
  }

  .favorite{
    border: 20px solid rgb(240, 224, 103)

  }

  .seaContainer{
    display:flex;
    justify-content: space-between;
  }

  form{
    display: grid;
    gap: 1em;
    width: 15em;
  }

  .terms{
    display: flex;
    justify-content: space-between;
  }
  
  input[type = 'checkbox']{
    display: inline-block;
  }
  
  .ingredientPicker{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
</style>