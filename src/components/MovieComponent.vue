<script>

    export default {

        name: 'Movie Component',
        props: ['title', 'originalTitle', 'lang', 'ratings'],

    }

</script>

<template>

    <div class="card" style="width: 18rem;">

        <div class="card-header">
            <p>{{ title }}</p>
        </div>
        <ul class="list-group list-group-flush">

            <li class="list-group-item">{{ originalTitle }}</li>
            <li class="list-group-item">{{ lang }}</li>
            <li class="list-group-item">{{ ratings }}</li>

        </ul>

    </div>

</template>