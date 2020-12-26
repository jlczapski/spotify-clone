<template>
    <div class="menu-wrapper w-1/6 h-screen bg-black-900">
        <Links />
        <div class="overflow-scroll h-80">
            <Library />
            <Playlists />
        </div>
        <NewPlaylist />
    </div>
</template>

<script>
import Links from './Links.vue';
import Library from './Library.vue';
import Playlists from './Playlists.vue';
import NewPlaylist from './NewPlaylist.vue';

export default {
    name: 'Menu',
    components: {
        Links,
        Library,
        Playlists,
        NewPlaylist,
    },
};
</script>
