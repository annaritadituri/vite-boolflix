<script>

    import MovieComponent from './MovieComponent.vue';
    import TvComponent from './TvComponent.vue';
    import { store } from '../store';
    import country from 'flag-icons/country.json';

    export default {
        name: 'Movie List',

        data() {

            return {
                country,
                store,
            };

        },

        methods: {

            setLangMovies(index) {

                if(this.store.movies[index].original_language === 'en') {
                    this.store.flagLang[index] = 'gb';
                } else if(!this.country.some(country => country.code === this.store.movies[index].original_language)) {
                    this.store.flagLang[index] = 'xx';
                } else {
                    this.store.flagLang[index] = this.store.movies[index].original_language;
                }

                return this.store.flagLang[index];

            },

            setLangTv(index) {

                if(this.store.tv[index].original_language === 'en') {
                    this.store.flagLang[index] = 'gb';
                } else if(!this.country.some(country => country.code === this.store.tv[index].original_language)) {
                    this.store.flagLang[index] = 'xx';
                } else {
                    this.store.flagLang[index] = this.store.tv[index].original_language;
                }

                return this.store.flagLang[index];

            },

            

        },
        
        components: {
            MovieComponent,
            TvComponent,
        },

    }

</script>

<template>

    <div class="list" v-for="(movie, index) in store.movies">

        <MovieComponent
            :title="movie.title"
            :originalTitle="movie.original_title"
            :lang="movie.original_language"
            :flag="setLangMovies(index)"
            :ratings="movie.vote_average"
        />

    </div>

    <div class="list" v-for="(tv, index) in store.tv">

        <TvComponent
            :title="tv.name"
            :originalTitle="tv.original_name"
            :lang="tv.original_language"
            :flag="setLangTv(index)"
            :ratings="tv.vote_average"
        />

    </div>

</template>