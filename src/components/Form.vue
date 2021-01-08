<template>
    <b-jumbotron>
        <b-form>
            <b-container fluid>
                <b-row>
                    <b-col cols="12" lg="6" class="p-0">
                        <b-row class="m-0">
                            <b-col cols="5" lg="12" class="col-divisa">
                                <div class="align-items-center p-0" :class="{'d-none': isPurchase, 'd-flex': !isPurchase}">
                                    <span class="mr-2">SOLES</span>
                                    <img v-lazy="images.peru" alt="peru">
                                </div>
                                <div class="align-items-center p-0" :class="{'d-none': !isPurchase, 'd-flex': isPurchase}">
                                    <span class="mr-2">DÓLARES</span>
                                    <img v-lazy="images.usa" alt="peru">
                                </div>
                            </b-col>
                            <b-col cols="7" lg="12" class="col-money">
                                <label for="send">Envias</label>
                                <b-form-input id="send" :value="sendMoney" type="number" @input="changeSend" min="0" step="0.01"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <mq-layout :mq="['sm', 'md']" class="w-100">
                        <hr>
                    </mq-layout>
                    <b-col cols="12" lg="6" class="p-0">
                        <b-row class="m-0">
                            <b-col cols="5" lg="12" class="col-divisa pl-5">
                                <div class="align-items-center" :class="{'d-none': isPurchase, 'd-flex': !isPurchase}">
                                    <span class="mr-2">DÓLARES</span>
                                    <img v-lazy="images.usa" alt="peru">
                                </div>
                                <div class="align-items-center p-0" :class="{'d-none': !isPurchase, 'd-flex': isPurchase}">
                                    <span class="mr-2 d-none">SOL PERUANO</span>
                                    <span class="mr-2">SOLES</span>
                                    <img v-lazy="images.peru" alt="peru">
                                </div>
                            </b-col>
                            <b-col cols="7" lg="12" class="col-money pl-5">
                                <label for="get">Recibes</label>
                                <b-form-input id="get" :value="getMoney" type="number" @input="changeGet" min="0" step="0.01"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <button type="button" @click="changePurchase">
                        <img v-lazy="images.change" alt="logo" />
                    </button>
                </b-row>
            </b-container>
        </b-form>
        <div class="type-change mt-3 mb-4">
            <div>Tipo de cambio:</div> 
            <span :class="{active: isPurchase}">Compra: {{ compra }}</span> | <span :class="{active: !isPurchase}">Venta: {{ venta }}</span>
        </div>
        <p class="mb-5">¿Tienes un código promocional? Ingrésalo acá <b-icon icon="chevron-down"></b-icon></p>
        <button type="button" class="btn-change">¡A cambiar!</button>
    </b-jumbotron>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
    name: "Form",
    data() {
        return {
            images: {
                change: require("../assets/images/ic-change.svg"),
                peru: require("../assets/images/ic-peru.svg"),
                usa: require("../assets/images/ic-usa.svg"),
            },
        }
    },
    computed: {
        ...mapState(['sendMoney', 'getMoney', 'isPurchase', 'compra', 'venta'])
    },
    methods: {
        changeGet (e) {
            this.$store.commit('changeGet', e)
        },
        changeSend (e) {
            this.$store.commit('changeSend', e)
        },
        changePurchase() {
            this.$store.commit('changePurchase')
        }
    },
};
</script>

<style lang="scss" scoped>
.jumbotron {
    padding: 10px;
    border-radius: 15px;
    background-color: #eeeeee;
    position: relative;
    form {
        position: relative;
        border-radius: 10px;
        background-color: #ffffff;
        padding: 15px 20px;
        .col-divisa {
            display: flex;
            border-bottom: 1px solid rgba(0, 0, 0, 0.15);
            padding: 0px 0px 10px 0px;
            margin-bottom: 10px;
            @media only screen and (max-width: 992px) {
                order: 1;
                justify-content: center;
                border-bottom: none;
                padding: 0px !important;
            }
        }
        .col-money {
            padding: 0px;
            @media only screen and (max-width: 992px) {
                padding-left: 0px !important;
            }
        }
        label {
            font-family: 'Argentum Sans Light';
            color: #000000;
            font-size: 15px;
            line-height: 16px;
            margin-bottom: 0px;
            @media only screen and (max-width: 992px) {
                font-size: 14px;
                line-height: 15px;
            }
        }
        input {
            font-family: "Argentum Sans Light";
            font-weight: 300;
            font-size: 35px;
            line-height: 36px;
            text-decoration-line: underline;
            color: #000000;
            border: none;
            padding: 0px;
            &:focus {
                outline: none;
                box-shadow: none;
            }
            @media only screen and (max-width: 992px) {
                font-size: 28px;
                line-height: 29px;
            }
        }
        button {
            background-color: transparent;
            border: none;
            padding: 0px;
            position: absolute;
            left: calc(50% - 35px);
            bottom: 25px;
            &:focus {
                outline: none;
            }
            @media only screen and (max-width: 992px) {
                left: 68%;
                bottom: calc(50% - 22px);
            }
        }
    }
    .type-change {
        font-family: "Argentum Sans Light";
        font-size: 13px;
        line-height: 13px;
        color: #000000;
        text-align: center;
        @media only screen and (max-width: 992px) {
            font-size: 12px;
            line-height: 18px;
        }
        div {
            display: inline-block;
            margin-right: 5px;
            @media only screen and (max-width: 992px) {
                display: block;
                margin-bottom: 5px;
            }
        }
        & .active {
            text-decoration: underline;
            font-weight: 600;
        }
    }
    p {
        font-family: "Argentum Sans Light";
        font-size: 10px;
        line-height: 18px;
        text-decoration: underline;
        text-align: center;
    }
    & > button {
        font-size: 16px;
        line-height: 17px;
        background-color: #ffbd12;
        border: none;
        width: 200px;
        height: 45px;
        border-radius: 50px;
        position: absolute;
        bottom: -22.5px;
        right: calc(50% - 100px);
        &:focus {
            outline: none;
        }
        @media only screen and (max-width: 992px) {
            height: 55px;
        }
    }
}
</style>