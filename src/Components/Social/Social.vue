<template>
	<div class="w-1/6 h-screen bg-black-900">
		<div class="px-4">
			<h2 class="font-bold text-larger text-white mt-4 tracking-wide">
				{{ title }}
			</h2>
			<div class="spacer w-full bg-white mt-2"></div>
		</div>
	</div>
</template>

<script>
export default {
    name: 'Social',
    data() {
        return {
            title: 'Friend Activity',
        };
    },
};
</script>
