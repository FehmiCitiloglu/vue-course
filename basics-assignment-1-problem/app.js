const app = Vue.createApp({
    data (){
        return{
            name: 'fehmi',
            age: 26,
            randomNumber: Math.random(),
            imageLink: 'https://images.pexels.com/photos/9467294/pexels-photo-9467294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
    },
    methods: {
        getData(){
            return {
                name: this.name,
                age: this.age,
                randomNumber: this.randomNumber,
            }
        }
    }
})


app.mount('#assignment')
