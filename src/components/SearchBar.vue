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

    <div class="search-bar">

        <div class="input-group">
            <input
                type="text"
                class="form-control border-0"
                placeholder="Search"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
                v-model="store.search"
                @keyup.enter="$emit('searchMovies')"
            >
            <div
                class="input-group-text bg-white border-0"
                id="btnGroupAddon"
                role="button"
                @click="$emit('searchMovies')"
            >
                <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
            </div>
        </div>

        

    </div>

</template>

<style scoped>

    .form-control:focus {
        box-shadow: none;
    }

</style>