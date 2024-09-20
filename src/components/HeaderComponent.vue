<script>

    export default {
        name: 'Header Component'
    }

</script>

<template>

    <nav class="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
        <div class="container-fluid">
            <img class="mx-4" src="../assets/img/netflix-logo.png.webp" alt="logo-netflix">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Serie TV</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Film</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">La mia lista</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>

</template>

<style scoped>

    .navbar * {
        font-size: 0.7rem;
    }

    img {
        height: 50px;
    }

</style>