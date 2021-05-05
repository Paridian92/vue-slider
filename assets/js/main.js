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

  method:{
    nextPhoto(){
      this.counterPhoto++;
      
    }
    
    
  }


});

