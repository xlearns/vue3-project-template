<template>
	<el-config-provider :locale="locale">
		<router-view />
	</el-config-provider>
</template>
>
<script lang="ts">
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { defineComponent } from "vue";

export default defineComponent({
	components: {
		[ElConfigProvider.name]: ElConfigProvider,
	},
	setup() {
		const locale = zhCn;
		return {
			locale,
		};
	},
});
</script>

<style lang="scss">
* {
	padding: 0;
	margin: 0;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100%;
	width: 100%;
}
html,
body {
	height: 100%;
	width: 100%;
}
.data-list {
	// overflow: hidden;
	box-sizing: border-box;
	height: calc(100vh - 162px);
}
.seleced {
	background: #e6f7ff;
	border: 1px solid #bae7ff;
	height: 40px;
	line-height: 40px;
	padding-left: 24px;
	margin: 0.83vw 0;
	display: flex;
	align-items: center;
	.seleced_logo {
		display: block;
		width: 14px;
		height: 14px;
		background: url(./assets/Shape.png) no-repeat left center/100%;
		margin-right: 4px;
	}
}
</style>
