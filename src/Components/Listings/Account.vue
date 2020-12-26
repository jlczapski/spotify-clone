<template>
	<div class="flex items-center mx-4">
        <img src="../../../public/img/dp.png" class="w-7 h-7 mr-2" alt="Display Picture">
        <button class="flex items-center" @click="toggleModal">
            <p class="text-white tracking-wide text-sm mr-4 hover:underline">
                {{ name }}
            </p>
            <IconChevronDown />
        </button>
	</div>
</template>

<script>
import IconChevronDown from '../../../public/img/icons/chevron-down.svg';

export default {
    name: 'Account',
    components: {
        IconChevronDown,
    },
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
