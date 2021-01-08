<template>
    <b-container fluid>
        <b-row>
            <b-col cols="12" md="5" offset-md="1" offset-lg="0">
                <Information />
            </b-col>
            <b-col cols="12" md="5" lg="6">
                <Form />
             </b-col>
        </b-row>
        <img v-lazy="images.illustration" alt="logo" class="illustration" />
    </b-container>
</template>

<script>
import Form from "./Form.vue";
import Information from "./Information.vue";

export default {
    name: "Body",
    components: {
        Form,
        Information
    },
    data() {
        return {
            images: {
                illustration: require("../assets/images/im-illustration.svg")
            }
        }
    },
};
</script>

<style lang="scss" scoped>
    .container-fluid {
        position: relative;
        @media only screen and (min-width: 992px) {
            margin-top: 40px;
        }
        .illustration {
            position: absolute;
            right: 24px;
            bottom: -180px;
            @media only screen and (max-width: 992px) {
                display: none;
            }
        }
    }
</style>