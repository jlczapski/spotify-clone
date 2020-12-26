<template>
    <Fragment>
        <div class="flex justify-center">
            <div class="flex justify-around items-center w-2/5 mb-1">
                <IconShuffle class="fill-current text-grey-500 text-opacity-50" />
                <IconSkipBackward class="fill-current text-grey-500" />
                <IconPlay class="fill-current text-white" />
                <IconSkipForward class="fill-current text-grey-500" />
                <IconRepeat class="fill-current text-grey-500 text-opacity-50" />
            </div>
        </div>
    </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import IconShuffle from '../../../public/img/icons/shuffle.svg';
import IconSkipBackward from '../../../public/img/icons/skip-backward.svg';
import IconPlay from '../../../public/img/icons/play.svg';
import IconSkipForward from '../../../public/img/icons/skip-forward.svg';
import IconRepeat from '../../../public/img/icons/repeat.svg';

export default {
    name: 'Playback',
    components: {
        Fragment,
        IconShuffle,
        IconSkipBackward,
        IconPlay,
        IconSkipForward,
        IconRepeat,
    },
    data() {
        return {
            hovered: false,
            currentTime: '2:15',
        };
    },
    methods: {
        showSlider() {
            this.hovered = true;
        },
        hideSlider() {
            this.hovered = false;
        },
    },
};
</script>
