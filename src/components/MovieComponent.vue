<script>

    export default {

        name: 'Movie Component',
        props: ['title', 'originalTitle', 'lang', 'flag', 'ratings'],

        computed: {
            displayFlag() {
                if(this.flag === 'xx') return `unknown-flag`
                return `fi-${this.flag}`;
            }
        }

    }

</script>

<template>

    <div class="card" style="width: 18rem;">

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

</template>

<style scoped>

.unknown-flag:after {
    background-color: red;
    content: "flag not found";
    display: inline-block;
    width: fit-content;
}

</style>