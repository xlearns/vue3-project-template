<template>

</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import "@/css/main.scss";
export default defineComponent({
	components: {
	
	},
	setup() {
		const { proxy }: any = getCurrentInstance();
		const router = useRouter();
		const state = reactive({
			
		});
		return {

		};
	},
});
</script>
