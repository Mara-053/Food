var app = new Vue({ 
    el: '#app',
    data: {
        flag: 1
    },
    methods:{
        clic: function (flag){
            this.flag=flag
        }   
    }
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header-container").style.top = "0";
  } else {
    document.getElementById("header-container").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
};
