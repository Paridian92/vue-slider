const app = new Vue({

  el: '#app',

  data:{
    attivaImmagine:'active',
    counterPhoto: 0,
    images:[
      'assets/img/agricoltore.jpg',
      'assets/img/autospurgo.jpg',
      'assets/img/muratore.jpg',
      'assets/img/spaccio.jpg',]
  },
  mounted: function(){
    setInterval(this.nextPhoto, 3000);

  },

  methods:{
    nextPhoto(){
      this.counterPhoto++;
      if(this.counterPhoto === this.images.length) this.counterPhoto = 0; 
    },
    prevPhoto(){
      this.counterPhoto--;
      if(this.counterPhoto < 0 ) this.counterPhoto = this.images.length -1; 
    },
    
  }


});

