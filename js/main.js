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

    // FACCIO UNA RICHESTA AL SERVER 
    request(indirizzo, array) {
      axios.get(indirizzo)
        .then((response) => {
          array.push(response.data.response)
          this.showList()
        })
    },

    // FUNZIONE CHE VISUALIZZA LA LISTA 
    showList() {
      if (this.mailList.length === this.mailNumber) {
        this.visible = true;
      }
    },
    
    // ESTRAI DATI DA UN API X NUMERO DI VOLTE E INSERISCILI IN UN ARRAY
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
