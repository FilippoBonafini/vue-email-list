'use strict';

// INIZIALIZZIAMO VUE 
const { createApp } = Vue

// STRUTTURA DI VUE 
createApp({
  data() {
    return {
      apiRandomMail: 'https://flynn.boolean.careers/exercises/api/random/mail',
      mailNumber: 10,
      mailList: []
    }
  },
  methods: {
    // ESTRAI DATI DA UN API X NUMERO DI VOLTE E INSERISCILI IN UN ARRAY
    repeatOperation(number, indirizzo, array) {
      for (let i = 0; i < number; i++) {
        axios.get(indirizzo)
          .then((response) => {
            array.push(response.data.response)
          });
      }
    }
  },
  beforeMount() {
    // PRIMA CHE IL PROGRAMMA VENGA MONTATO ESEGUI QUESTO METODO 
    this.repeatOperation(this.mailNumber, this.apiRandomMail,this.mailList)
  }
}).mount('#app');
