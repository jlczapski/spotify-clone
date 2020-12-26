<template>
	<div class="flex items-center">
		<div class="input-prepend flex items-center justify-center w-7 h-7 bg-white rounded-3xl rounded-r-none">
            <IconSearch class="w-4 h-4" />
		</div>
		<input
			type="text"
			name="search"
			id="search"
			class="mx-0 my-4 text-sm py-1 tracking-wide flex-1 rounded-3xl rounded-l-none placeholder-black-900"
			placeholder="Search"
		/>
	</div>
</template>

<script>
import IconSearch from '../../../public/img/icons/search.svg';

export default {
    name: 'Search',
    components: {
        IconSearch,
    },
};
</script>
