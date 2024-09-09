<script>

    export default {

        name: 'Tv Component',
        props: ['poster', 'title', 'originalTitle', 'lang', 'flag', 'ratings'],

        computed: {
            displayFlag() {
                if(this.flag === 'xx') return `unknown-flag`
                return `fi-${this.flag.toLowerCase()}`;
            }
        }

    }

</script>

<template>

    <div class="card">

        <img :src="poster" class="card-img-top" alt="">

        <div class="card-body">

            <div class="card-header">
                <p>{{ title }}</p>
            </div>
            <ul class="list-group list-group-flush">

                <li class="list-group-item">{{ originalTitle }}</li>
                <li class="list-group-item">
                    {{ lang }}
                    <p class=" text-nowrap fi fis" :class="displayFlag"></p>
                </li>
                <li class="list-group-item">{{ ratings }}</li>

            </ul>

        </div>

    </div>

</template>

<style scoped>

.card {
    width: 100%;
    height: 100%;
}

.unknown-flag:after {
    background-color: red;
    content: "flag not found";
    display: inline-block;
    width: fit-content;
}

</style>