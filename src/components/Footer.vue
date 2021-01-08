<template>
    <b-container fluid class="footer">
        <b-row>
            <b-col cols="12" md="6" lg="4" class="operation">
                <b-container fluid>
                    <b-row>
                        <b-col cols="12">
                            <h4>Operaciones de cambio inmediatas a través de:</h4>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="6">
                            <div class="mt-3">
                                <img v-lazy="images.bcp" alt="bcp" class="w-100">
                            </div>
                            <p>Todos los días</p>
                        </b-col>
                        <b-col cols="6">
                            <div class="mt-3">
                                <img v-lazy="images.interbank" alt="interbank" class="w-100">
                            </div>
                            <p>de Lunes a Sábados</p>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
            <b-col cols="12" md="6" lg="8" class="d-flex align-items-center">
                <h5>Operaciones interbancarias <br> a todos los bancos de Lima</h5>
             </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            images: {
                bcp: require("../assets/images/im-bcp.svg"),
                interbank: require("../assets/images/im-interbank.svg")
            },
        };
    },
}
</script>

<style lang="scss" scoped>
    .footer {
        margin-top: 250px;
        margin-bottom: 50px;
        @media only screen and (max-width: 992px) {
            margin-top: 100px;
        }
        @media only screen and (max-width: 767px) {
            margin-top: 30px;
        }
        .operation {
            border-right: 1px solid #C4C4C4;
            @media only screen and (max-width: 767px) {
                border-right: none;
            }
        }
        h4 {
            font-family: "Argentum Sans Light";
            font-size: 13px;
            line-height: 13px;
            color: #000000;
            text-align: center;
        }
        h5 {
            font-family: "Argentum Sans Light";
            font-size: 16px;
            line-height: 22px;
            color: #000000;
            width: 100%;
            text-align: left;
            @media only screen and (max-width: 767px) {
                font-size: 14px;
                line-height: 20px;
                text-align: center;
                margin-top: 10px;
            }
        }
        p {
            font-size: 13px;
            line-height: 13px;
            text-align: center;
            margin-top: 10px;
            color: #A0A0A0;
            font-family: "Argentum Sans Light";
        }
    }
</style>