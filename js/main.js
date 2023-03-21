'use strict';

// INIZIALIZZIAMO VUE 
const { createApp } = Vue

// STRUTTURA DI VUE 
createApp({
  data() {
    return {
      visible: false,
      apiRandomMail: 'https://flynn.boolean.careers/exercises/api/random/mail',
      mailNumber: 10,
      mailList: []
    }
  },
  methods: {

    // FUNZIONE CHE VISUALIZZA LA LISTA 
    showList() {
      if (this.mailList.length === this.mailNumber) {
        this.visible = true;
      }
    },

    // FACCIO UNA RICHESTA AL SERVER E LA INSERISCO IN UN ARRAY
    request(indirizzo, array) {
      axios.get(indirizzo)
        .then((response) => {
          array.push(response.data.response)
          // MOSTRA LA LISTA DEI CONTATTI SOLO QUANDO LI CARICA TUTTI 
          this.showList()
        })
    },

    // ESTRAI DATI DA UN API X NUMERO DI VOLTE
    repeatRequest(number) {
      for (let i = 0; i < number; i++) {
        this.request(this.apiRandomMail, this.mailList)
      }
    },

  },
  beforeMount() {
    // PRIMA CHE IL PROGRAMMA VENGA MONTATO ESEGUI QUESTO METODO 
    this.repeatRequest(this.mailNumber)

  }
}).mount('#app');
