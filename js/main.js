// imports always go first at the top
import SplashPage from "./modules/SplashPage.js";
import AppPage from "./modules/AppPage.js";
import ErrorPage from "./modules/ErrorPage.js";

// route templates are for the stuff that you want to be dynamic, everything static can go in html
const router = new VueRouter({
    routes: [
        // listen for home route and render this component in our router-view tag in html - / is index.html
        // the order is important - * has to go last or you won't reach the other pages
        { path: '/', name: "splash", component: SplashPage },
        { path: '/app', name: "app", component: AppPage },
        { path: '*', name: "error", component: ErrorPage } // * means anything else that doesn't match
    ]
})

const vm = new Vue({
    data: {

    },

    created: function() {
        console.log('app is up and running')
    },

    methods: {

    },

    router // shorthand four router: router
}).$mount("#app");