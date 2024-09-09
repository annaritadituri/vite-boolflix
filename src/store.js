import { reactive } from 'vue';

export const store = reactive({

    movies: [],
    infoMovies: [],
    tv: [],
    infoTv: [],
    flagLang: [],
    search: '',
    apiInfo: {

        url: 'https://api.themoviedb.org/3',
        urlImg: 'https://image.tmdb.org/t/p',
        apiKey: '681c694e534e045b0d219ace5440e76e',
        endpoints: {
            movies: '/search/movie',
            tv: '/search/tv',
            format: '/w342',
            path: '/',
        },
        
    }

});