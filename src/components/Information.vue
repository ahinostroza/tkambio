<template>
    <b-jumbotron>
        <template #header>Sé tu propio cambista.</template>
        <template #lead>Seguro, rápido y al mejor cambio.</template>
        <mq-layout mq="md+">
            <p class="baseline">Inscritos en la Superintendencia de Banca, Seguro y AFP.</p>
        </mq-layout>
        <mq-layout mq="md+">
            <b-button size="lg" class="ml-auto btn-principal">Crear cuenta</b-button>
        </mq-layout>
        <mq-layout mq="md+" class="mt-1">
            <b-link href="#">¿Cómo funciona?</b-link>
        </mq-layout>
    </b-jumbotron>
</template>

<script>
export default {
    name: "Information",
};
</script>

<style lang="scss" scoped>
.jumbotron {
    background-color: transparent;
    text-align: left;
    padding: 0rem;
    border-radius: 0px;
    @media only screen and (max-width: 767px) {
        text-align: center;
    }
    h1 {
        font-weight: bold;
        color: #ffffff;
        font-size: 50px;
        line-height: 60px;
        @media only screen and (max-width: 992px) {
            font-size: 38px;
            line-height: 40px;
        }
        @media only screen and (max-width: 768px) {
            font-size: 30px;
            line-height: 36px;
        }
    }
    p {
        font-family: "Argentum Sans Light";
        font-weight: 300;
        font-size: 20px;
        line-height: 21px;
        color: #ffffff;
        margin-top: 25px;
        margin-bottom: 0px;
        @media only screen and (max-width: 992px) {
            font-size: 16px;
            line-height: 20px;
        }
        @media only screen and (max-width: 768px) {
            margin-top: 0px;
        }
        &.baseline {
            font-size: 11px;
            line-height: 11px;
            margin-bottom: 30px;
            @media only screen and (max-width: 992px) {
                font-size: 9px;
                line-height: 13px;
            }
        }
    }
    button {
        font-family: "Argentum Sans Light";
        border: 1px solid #f2f2f2 !important;
        box-sizing: border-box;
        border-radius: 50px !important;
        background-color: transparent !important;
        font-size: 14px !important;
        line-height: 15px !important;
        padding: 18px 25px !important;
    }
    a {
        font-family: "Argentum Sans Light";
        font-weight: 300;
        font-size: 12px;
        line-height: 12px;
        color: #ffffff;
        text-decoration-line: underline;
        margin-left: 12px;
    }
}
</style>