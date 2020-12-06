<template>
	<div class="flex items-center mx-4">
		<div class="profile w-7 h-7 rounded-full bg-gray-300 mr-2"></div>
        <button class="flex items-center" @click="toggleModal">
            <p class="text-white tracking-wide text-sm mr-4 hover:underline">
                {{ name }}
            </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down w-7 h-7"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="6 9 12 15 18 9" />
            </svg>
        </button>
	</div>
</template>

<script>
export default {
    name: 'Account',
    data() {
        return {
            name: 'Janusz',
        };
    },
    methods: {
        toggleModal() {
            this.$emit('onToggleModal');
        },
    },
};
</script>
