import { createStore, storeKey } from "vuex";


export default createStore({
  state: {
     people: [
      {
        name: "Anthony Mcneil",
        company: "Mauris Blandit Associates",
        region: "North Chungcheong",
        age: 23
      },
      {
        name: "Jada Holden",
        company: "Neque Incorporated",
        region: "Kaduna",
        age: 42
      },
      {
        name: "Liberty Nicholson",
        company: "Ac Turpis Industries",
        region: "Riau Islands",
        age: 19,
      },
      {
        name: "Jelani Sullivan",
        company: "Pede Cras Inc.",
        region: "Renfrewshire",
        age: 32
      },
      {
        name: "Bruce Campos",
        company: "Phasellus Nulla Corp.",
        region: "South Sumatra",
        age: 63
      }
    ]
    
  },
  getters: {
    lowercasePeople(state){
      const lowerPeople = state.people.map(
        person => {
          return{
            name: person.name.toLowerCase(),
            company: person.company,
            region: person.region
          }
        }
      )
      return lowerPeople
    }
  },
  mutations: {
    increaseAge(state,payload){
      state.people.forEach(person => {
        person.age += payload;
      })
    },
    decreaseAge(state,payload){
      state.people.forEach(person => {
        person.age -= payload;
      })
    }
  },
  actions: {
    increaseAgeAction(context,payload){
      setTimeout(()=>{context.commit('increaseAge',payload)},2000)
    },
    decreaseAgeAction(context,payload){
      setTimeout(() => {context.commit('decreaseAge',payload)},2000)
    }
  },
  modules: {},
});
