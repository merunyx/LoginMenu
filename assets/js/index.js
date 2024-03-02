var loginUI = new Vue({
    el: "#app",
    data: {
        show: true,

        pageData: "auth",
        dataLogin: {
            Login: '',
            Password: '',
        },
        dataRegister: {
            Login: '',
            Email: '',
            Password: '',
            repeatPassword: '',
        }
    },
    methods: {
        open(isFirst){
            this.show = true;
            this.pageData = isFirst ? 'auth' : 'register';
        },
        disable(){
            this.show = false;
        },
        setPage(page) {
            this.pageData = page;
        },
        onPlay() {
            mp.trigger("client.onLogin", this.dataLogin.Login, this.dataLogin.Password);
        },
        onRegister() {
            mp.trigger("client.onLogin", this.dataRegister.Login, this.dataRegister.Email, this.dataRegister.Password, this.dataRegister.repeatPassword);
        },
    }
});

// Данная верстка была сделана специально для конкурса от ragemp.pro