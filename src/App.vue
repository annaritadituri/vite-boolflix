<script>

import HeaderComponent from './components/HeaderComponent.vue';
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
        HeaderComponent,
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
        class="search page d-flex flex-column align-items-center vh-100 vw-100 m-0"
        v-if="showResults === false"
    >

        <div class="content">

            <img src="./assets/img/netflix-logo.png.webp" alt="logo-netflix">
            <SearchBar
                class="position-absolute bottom-50 start-50 translate-middle"
                @searchMovies="searchMovies()"
            />

        </div>

    </div>

    <div
        class="list page"
        v-else
    >

        <HeaderComponent/>
        <div class="container-fluid ms-2">

            <!--
            <SearchBar
                @searchMovies="searchMovies()"
            />
            -->

            <div v-if="showResults === true" class="container-fluid">
                <List />
            </div>
            <div v-else class="container-fluid">
                Caricamento in corso...
            </div>

        </div>

    </div>



</template>

<style scoped>

    .page {

        background-color: black;

        img {
            width: 40vw;
        }
    }

</style>
