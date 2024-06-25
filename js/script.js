const {createApp}= Vue;


createApp ({
    data(){
        return{
            // Tiene traccia dell'indice della Slides corrente.
            activeImage:0,
            // prendiamo il dato delle img che ci servono e lo inseriamo nel data object
            slides: 
            [
                {
                    image: 'img/01.webp',
                    title: "Marvel's Spiderman Miles Morale",
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
        
    },

    methods:{
        // nextSlides e prevSlides: Aggiornano activeImage per mostrare la Slide successiva o precedente. Gestiscono anche i casi limite per ciclare attraverso le diapositive.

        // metodo per il next
        nextSlides(){
            // logica per il funzionamento
                    // incrementiamo aggiornando e partendo da 0 
            this.activeImage ++;
                // gestiamo il caso limite del next
                // condizione per iterare per tutta la lunghezza dell array e visualizzare tutte le path
            if(this.activeImage > this.slides.length -1) {
                // tornare all indice inizale 0
                this.activeImage=0;
            }
        },

        prevSlides(){
             // logica per il funzionamento
             // decrementiamo il valore dell indice
             this.activeImage --;
            //  gestiamo il caso limite del prev

            if(this.activeImage < 0) {
                this.activeImage = this.slides.length -1;
            }
        },

        // Bonus Impostato activeImage all'indice della slide cliccata.
        setActiveSlide(index) {
            this.activeImage = index;
        }
    }
}).mount('#app');


//  [
// {
//         image: 'img/01.webp',
//         title: 'Marvel\'s Spiderman Miles Morale',
//         text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//     }, {
//         image: 'img/02.webp',
//         title: 'Ratchet & Clank: Rift Apart',
//         text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//     }, {
//         image: 'img/03.webp',
//         title: 'Fortnite',
//         text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//     }, {
//         image: 'img/04.webp',
//         title: 'Stray',
//         text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//     }, {
//         image: 'img/05.webp',
//         title: "Marvel's Avengers",
//         text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//     }
// ];

// console.log(slides);