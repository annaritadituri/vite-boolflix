<script>

    import { store } from '../store';

    export default {
        name: 'Search Bar',
        emits: ['searchMovies'],

        data() {

            return {
                store,
            }

        },

    }

</script>

<template>

    <input
        type="text"
        v-model="store.searchMovie"
        @keyup.enter="$emit('searchMovies')"
    >
    <button
        @click="$emit('searchMovies')"
    >
        Cerca
    </button>

</template>