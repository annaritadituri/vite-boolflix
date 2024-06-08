<script>

    import MovieComponent from './MovieComponent.vue'
    import { store } from '../store';

    export default {
        name: 'Movie List',

        data() {

            return {
                store,
            };

        },
        
        components: {
            MovieComponent,
        },

    }

</script>

<template>

    <div class="list" v-for="movie in store.movies">

        <MovieComponent
            :title="movie.title"
            :originalTitle="movie.original_title"
            :lang="movie.original_language"
            :ratings="movie.vote_average"
        />

    </div>

</template>