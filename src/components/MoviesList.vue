<script>

    import MovieComponent from './MovieComponent.vue'
    import { store } from '../store';
    import country from 'flag-icons/country.json';

    export default {
        name: 'Movie List',

        data() {

            return {
                country,
                store,
                flagLang: [],
            };

        },

        methods: {

            setLang(index) {

                if(this.store.movies[index].original_language === 'en') {
                    this.flagLang.push('gb');
                } else if(!this.country.some(country => country.code === this.store.movies[index].original_language)) {
                    this.flagLang.push('xx');
                } else {
                    this.flagLang.push(this.store.movies[index].original_language)
                }

                return this.flagLang[index];

            },

        },
        
        components: {
            MovieComponent,
        },

    }

</script>

<template>

    <div class="list" v-for="(movie, index) in store.movies">

        <MovieComponent
            :title="movie.title"
            :originalTitle="movie.original_title"
            :lang="movie.original_language"
            :flag="setLang(index)"
            :ratings="movie.vote_average"
        />

    </div>

</template>