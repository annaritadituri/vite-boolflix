import { reactive } from 'vue';

export const store = reactive({

    movies: [],
    info: [],
    searchMovie: '',
    apiInfo: {

        url: 'https://api.themoviedb.org/3/search',
        apiKey: '681c694e534e045b0d219ace5440e76e',
        endpoints: {
            movies: '/movie',
            tv: '/tv',
        },
        
    }

});