/**
 * Boolzapp Vue
 */
var app = new Vue({
    el: '#app',
    data: {
        //variabile per messaggio scritto da noi
        messageWrite: '',
        // nostro account
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        // Elenco contatti
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        indiceContatti: 0,
    },
    methods: {
      presaIndice(index){
        this.indiceContatti = index;
      },
    //nuova funz milestone 3 per aggiunta new messaggio inviato nella conversazione
    //con data e ora del momento del invio
    newMex(index) {
      if (this.messageWrite !== '') {
        this.contacts[index].messages.push({
          date: dayjs().format('DD/MM/YY, HH:mm:ss'),
          message: this.messageWrite,
          status: 'sent'
        });
        this.messageWrite = ''
        //timeout di 2 secondi per la risposta automatica(ok)
        setTimeout(() => {
          this.rispAuto(index)
        }, 2000);
      }
    },
    //funzione per risposta automatica con orario e data live
    rispAuto(index) {
      this.contacts[index].messages.push({
        date: dayjs().format('DD/MM/YY, HH:mm:ss'),
        message: 'Si , No , Forse',
        status: 'received'
      });
    },
    //Implementare la sezione di ricerca del contatto.
    // Mentre digito nell'input di ricerca i contati vengono filtrati
    //in base al testo inserito nel campo input,come visto all'assegnazione.
    cercaConversazione(){
      this.contacts.forEach((item) => {
        if (!(item.name.toLowerCase()).includes(this.cerca.toLowerCase().trim())) ){
          
        } else {
        }

      })
    }
  }
});
