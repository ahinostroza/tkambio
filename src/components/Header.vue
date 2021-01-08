<template>
    <b-navbar toggleable="lg">
        <b-container fluid>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-navbar-brand href="/">
                <img v-lazy="images.logo" alt="logo" />
            </b-navbar-brand>
            <mq-layout mq="md+" style="order: 1">
                <b-button size="lg" variant="primary" class="ml-auto">Iniciar sesión</b-button>
            </mq-layout>
            <mq-layout mq="sm">
                <b-button size="lg" variant="secondary" v-lazy:background-image="images.login"></b-button>
            </mq-layout>
            <b-collapse id="nav-collapse" class="mr-5" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">Blog</b-nav-item>
                    <b-nav-item href="#">Promociones</b-nav-item>
                    <b-nav-item href="#">Preguntas frecuentes</b-nav-item>
                    <b-nav-item-dropdown>
                        <template #button-content>
                            Contáctanos <b-icon icon="chevron-down"></b-icon>
                        </template>
                        <b-dropdown-item href="https://web.whatsapp.com/send?phone=51914743988">+51 914 743 988</b-dropdown-item>
                        <b-dropdown-item href="https://web.whatsapp.com/send?phone=51932114027">+51 932 114 027</b-dropdown-item>
                        <b-dropdown-item href="https://web.whatsapp.com/send?phone=51996996573">+51 996 996 573</b-dropdown-item>
                        <b-dropdown-item href="mailto:contacto@tkambio.com">contacto@tkambio.com</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            images: {
                logo: require("../assets/images/im-logo.svg"),
                login: require("../assets/images/ic-login.svg"),
                menu: require("../assets/images/ic-menu.svg")
            },
        };
    },
};
</script>

<style lang="scss">
.navbar {
    padding: 3rem 1rem !important;
    @media only screen and (max-width: 767px) {
        padding: 1.5rem 1rem !important;
    }
    .navbar-toggler {
        border-color: transparent !important;
        &:focus {
            outline: none;
        }
        .navbar-toggler-icon {
            background-image: url("../assets/images/ic-menu.svg");
            height: 23px;
        }
    }
    .navbar-brand {
        img {
            width: 100%;
            @media only screen and (max-width: 767px) {
                width: 160px;
            }
        }
    }
    .nav-item {
        .nav-link {
            font-family: "Argentum Sans Light";
            font-size: 15px;
            line-height: 16px;
            color: #ffffff !important;
            margin-left: 28px;
            &::after {
                display: none;
            }
            .b-icon {
                font-size: 16px;
                margin-left: 5px;
            }
        }
    }
    .btn-primary {
        font-family: "Argentum Sans Light";
        border: 1px solid #f2f2f2 !important;
        box-sizing: border-box;
        border-radius: 50px !important;
        background-color: transparent !important;
        font-size: 14px !important;
        line-height: 15px !important;
        padding: 18px 25px !important;
    }
    .btn-secondary {
        background-repeat: no-repeat;
        height: 27px;
        background-color: transparent !important;
        border: none !important;
        &:hover {
            box-shadow: none;
        }
    }
}
</style>