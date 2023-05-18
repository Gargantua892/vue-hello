const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Ready for the summer?",
            image: 'https://images.unsplash.com/photo-1682289570915-5d6e41ade8bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80'
        }
    },
}).mount("#app");