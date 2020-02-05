export default {
    template: `
    <section>
        <h1>{{ message }}</h1>
        <button @click="registerUser">Register for Awesome swag</button>
    </section>
    `,

    data: function() {
        return {
            message: "Welcome to my super awesome app!"
        }
    },

    methods: {
        registerUser() {
            console.log('clicked register button');
        }
    }
}