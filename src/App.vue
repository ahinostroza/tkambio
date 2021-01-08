<template>
    <div id="app" ref="container">
        <div v-lazy:background-image="background">
            <Header />
            <Body />
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";

import { mapActions } from 'vuex'

export default {
    name: "App",
    components: {
        Header,
        Body,
        Footer
    },
    created () {
        this.$store.dispatch('loadDivisas')
    },
    computed: {
        background() {
            return this.$mq === 'sm' ? require("./assets/images/im-background-mb.svg") : this.$mq === 'md' ? require("./assets/images/im-background-tb.svg") : require("./assets/images/im-background.svg")
        }
    }
};
</script>

<style lang="scss">
div[lazy="loaded"] {
    background-repeat: no-repeat;
    background-size: 100%;
}
.container-fluid {
    @media only screen and (min-width: 992px) {
        max-width: 1200px;
    }
}
</style>
