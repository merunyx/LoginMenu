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
        setPage(page) {
            this.pageData = page;
        },
        onPlay() {
            mp.trigger("server.onLogin", this.dataLogin.Login, this.dataLogin.Password);
        },
        onRegister() {
            mp.trigger("server.onLogin", this.dataRegister.Login, this.dataRegister.Email, this.dataRegister.Password, this.dataRegister.repeatPassword);
        },
    }
});

// Данная верстка была сделана специально для конкурса от ragemp.pro