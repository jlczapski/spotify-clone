<template>
    <div id="app">
        <div class="flex flex-wrap font-proxima">
            <Menu />
            <Listings />
            <Social />
        </div>
    </div>
</template>

<script>
import Menu from './Components/Menu/Menu.vue';
import Listings from './Components/Listings/Listings.vue';
import Social from './Components/Social/Social.vue';

export default {
    name: 'App',
    components: {
        Menu,
        Listings,
        Social,
    },
    created() {
        document.title = 'Spotify UI Clone';
    },
};
</script>
