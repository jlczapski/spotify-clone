<template>
	<div class="flex">
		<div class="icon">
			<img
				src="../../../public/img/gambino.png"
				alt=""
				class="h-12 w-auto object-cover object-center"
			/>
		</div>
		<div class="text">
            <div class="flex items-center">
                <p class="text-white text-sm ml-3 tracking-wide">
                    {{ title }}
                </p>
                <div class="ml-2">
                    <IconHeart />
                </div>
            </div>
			<p class="text-grey-600 text-xs ml-3 mt-2 tracking-wide">
                {{ artist }}
            </p>
		</div>
	</div>
</template>

<script>
import IconHeart from '../../../public/img/icons/heart.svg';

export default {
    name: 'Track',
    components: {
        IconHeart,
    },
    data() {
        return {
            title: 'Redbone',
            artist: 'Childish Gambino',
        };
    },
};
</script>
