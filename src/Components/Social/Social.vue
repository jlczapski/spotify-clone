<template>
	<div class="w-1/6 h-screen bg-black-900">
		<div class="px-4">
			<h2 class="font-bold text-l text-white mt-4 tracking-wide">
				{{ this.title }}
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

<style scoped>
.spacer {
	height: 0.5px;
	opacity: 0.15;
}
</style>
