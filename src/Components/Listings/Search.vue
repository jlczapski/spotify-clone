<template>
	<div class="flex items-center">
		<div class="input-prepend flex items-center justify-center w-9 h-7 bg-white">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-search"
				width="44"
				height="44"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="#9e9e9e"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<circle cx="10" cy="10" r="7" />
				<line x1="21" y1="21" x2="15" y2="15" />
			</svg>
		</div>
		<input
			type="text"
			name="search"
			id="search"
			class="mx-0 my-4 text-sm py-1 tracking-wide flex-1"
			placeholder="Search"
		/>
	</div>
</template>

<script>
export default {
    name: 'Search',
};
</script>

<style scoped>
.input-prepend {
    border-radius: 20px 0 0 20px;
}

input {
    border-radius: 0 20px 20px 0;
}

input::placeholder {
	color: #000000;
}

svg {
    width: 1.2rem;
    height: 1.2rem;
}

</style>
