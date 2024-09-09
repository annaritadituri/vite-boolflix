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
                starRating: 0,
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

            calculateRatings(index) {

                this.starRating = (5 * this.store.movies[index].vote_average) / 10;
                let less = this.starRating - parseInt(this.starRating);
                let more = Math.ceil(this.starRating) - this.starRating;
                if(more <= less) {
                    this.starRating = Math.ceil(this.starRating);
                } else {
                    this.starRating = parseInt(this.starRating);
                }

                return this.starRating;

            },


        },
        
        components: {
            MovieComponent,
            TvComponent,
        },

    }

</script>

<template>

    <div class="container">
        
        <h2>Film</h2>

        <div class="row">

            <div class="list col" v-for="(movie, index) in store.movies">

                <MovieComponent
                    :poster="this.store.apiInfo.urlImg + this.store.apiInfo.endpoints.format + this.store.apiInfo.endpoints.path + movie.poster_path"
                    :title="movie.title"
                    :originalTitle="movie.original_title"
                    :lang="movie.original_language"
                    :flag="setLangMovies(index)"
                    :ratings="calculateRatings(index)"
                />

            </div>

        </div>

    </div>

    <div class="container">

        <h2>Serie tv</h2>

        <div class="row">

            <div class="list col" v-for="(tv, index) in store.tv">

                <TvComponent
                    :poster="this.store.apiInfo.urlImg + this.store.apiInfo.endpoints.format + this.store.apiInfo.endpoints.path + tv.poster_path"
                    :title="tv.name"
                    :originalTitle="tv.original_name"
                    :lang="tv.original_language"
                    :flag="setLangTv(index)"
                    :ratings="tv.vote_average"
                />

            </div>

        </div>

    </div>
    
</template>

<style scoped>

.col {
    width: 20%;
    flex: 0 1 auto;
}

</style>