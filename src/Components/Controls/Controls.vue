<template>
    <div class="absolute bottom-0">
        <div class="flex items-center w-screen h-18 bg-grey-900 px-2 py-4">
            <div class="w-1/4">
                <Track />
            </div>
            <div class="w-2/4">
                <Playback />
            </div>
            <div class="w-1/4"></div>
        </div>
    </div>
</template>

<script>
import Track from './Track.vue';
import Playback from './Playback.vue';

export default {
    name: 'Controls',
    components: {
        Track,
        Playback,
    },
};
</script>
