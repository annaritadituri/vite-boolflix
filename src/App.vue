<script>

import SearchBar from './components/SearchBar.vue';
import List from './components/List.vue';

import { store } from './store';
import axios from 'axios';

export default {

    data() {
        return {
            store,
            showResults: false,
        }
    },

    components: {
        SearchBar,
        List,
    },

    methods: {

        searchMovies() {

            this.showResults = false;

            if(this.store.search) {

                this.apiCallMovies();
                this.store.flagLang = [];
                this.apiCallTV();

            }

        },

        apiCallMovies() {

            axios.get(this.store.apiInfo.url + this.store.apiInfo.endpoints.movies, {
                params: {
                    api_key: this.store.apiInfo.apiKey,
                    query: this.store.search,
                }
            }).then((response) => {

                this.store.infoMovies = response.data;
                this.store.movies = response.data.results;
                this.showResults = true;

            });

        },

        apiCallTV() {

            axios.get(this.store.apiInfo.url + this.store.apiInfo.endpoints.tv, {
                params: {
                    api_key: this.store.apiInfo.apiKey,
                    query: this.store.search,
                }
            }).then((response) => {

                this.store.infoTv = response.data;
                this.store.tv = response.data.results;
                this.showResults = true;
    
            });

        },

    }

}

</script>

<template>

    <div
        class="search container d-flex align-items-center justify-content-center vh-100"
        v-if="showResults === false"
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

        <div v-if="showResults === true" class="container">
            <List />
        </div>
        <div v-else class="container">
            Caricamento in corso...
        </div>

    </div>



</template>

<style scoped>
</style>
