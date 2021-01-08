import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: false,
    state: {
        sendMoney: 0,
        getMoney: 0,
        isPurchase: true,
        compra: 0,
        venta: 0
    },
    mutations: {
        changePurchase(state) {
            state.isPurchase = !state.isPurchase
            state.sendMoney = state.getMoney
            if (state.isPurchase) {
                state.getMoney = (state.sendMoney * state.compra).toFixed(2)
            } else {
                state.getMoney = (state.sendMoney / state.venta).toFixed(2)
            }
        },
        loadDivisas(state, data) {
            const { cambio_actual } = data
            state.compra = parseFloat(cambio_actual.compra)
            state.venta = parseFloat(cambio_actual.venta)
            state.sendMoney = (Math.random() * 100).toFixed(2)
            state.getMoney = (state.compra * state.sendMoney).toFixed(2)
        },
        changeSend(state, value) {
            state.sendMoney = value
            if (state.isPurchase) {
                state.getMoney = (state.sendMoney * state.compra).toFixed(2)
            } else {
                state.getMoney = (state.sendMoney / state.venta).toFixed(2)
            }
        },
        changeGet(state, message) {
            state.getMoney = message
            if (state.isPurchase) {
                state.sendMoney = (state.getMoney / state.compra).toFixed(2)
            } else {
                state.sendMoney = (state.getMoney * state.venta).toFixed(2)
            }
        }
    },
    actions: {
        async loadDivisas({ commit }) {
            try {
                const data = await fetch(`https://dni.optimizeperu.com/api/tipo-cambio`)
                const res = await data.json()
                commit('loadDivisas', res)
            } catch (error) {
                throw new Error(`API ${error}`);
            }
        },
        changePurchase({ commit }) {
            commit('changePurchase')
        }
    },
    modules: {},
})