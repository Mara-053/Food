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
