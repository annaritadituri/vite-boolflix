<script>

import SearchBar from './components/SearchBar.vue';
import MoviesList from './components/MoviesList.vue';

import { store } from './store';
import axios from 'axios';

export default {

    data() {
        return {
            store,
            showMoviesResults: false,
        }
    },

    components: {
        SearchBar,
        MoviesList,
    },

    methods: {

        searchMovies() {

            this.showMoviesResults = false;

            if(this.store.searchMovie) {
                this.apiCallMovies();
            }

        },

        apiCallMovies() {

            axios.get(this.store.apiInfo.url + this.store.apiInfo.endpoints.movies, {
                params: {
                    api_key: this.store.apiInfo.apiKey,
                    query: this.store.searchMovie,
                }
            }).then((response) => {

                this.store.info = response.data;
                this.store.movies = response.data.results;
                this.showMoviesResults = true;

            });

        }


    }

}

</script>

<template>

    <div
        class="search container d-flex align-items-center justify-content-center vh-100"
        v-if="showMoviesResults === false"
    >
        <SearchBar
            @searchMovies="searchMovies()"
        />
    </div>

    <div
        class="list container"
        v-else
    >

        <SearchBar
            @searchMovies="searchMovies()"
        />
        <MoviesList />

    </div>



</template>

<style scoped>
</style>
