<script>

    export default {

        name: 'Movie Component',
        props: ['poster', 'title', 'originalTitle', 'lang', 'flag', 'ratings'],

        data() {
            return {
                cardVisibility: 'd-none'
            }
        },

        methods: {

            setFallbackImage(event) {
                event.target.src = 'https://timescineplex.com/times/img/no-poster.png';
            },

            setCardOn() {
                this.cardVisibility = 'd-block';
            },

            setCardOff() {
                this.cardVisibility = 'd-none';
            },

        },

        computed: {
            displayFlag() {
                if(this.flag === 'xx') return `unknown-flag`
                return `fi-${this.flag}`;
            }
        }

    }

</script>

<template>

    <div
        class="card w-100 h-100 text-bg-dark border-0"
        @mouseenter.self="setCardOn"
        @mouseleave.self="setCardOff"
    >

        <img :src="poster" class="card-img h-100" alt="poster" @error="setFallbackImage">

        <div class="card-img-overlay flex-column align-content-center text-center" :class="cardVisibility">

            <h2 class="card-title">{{ title }}</h2>
            <ul class="list-unstyled">

                <li><p class="card-text">Titolo originale: {{ originalTitle }}</p></li>
                <li>
                    Lingua: {{ lang }}
                    <p class="text-nowrap fi fis" :class="displayFlag"></p>
                </li>
                <li><p class="card-text">Recensioni: {{ ratings }}</p></li>

            </ul>

        </div>

    </div>

</template>

<style scoped>

    .card-img-overlay {
        background-color: rgba(0, 0, 0, 0.484);
    }
    .unknown-flag:after {
        background-color: red;
        content: "_";
        display: inline-block;
        width: fit-content;
    }

</style>