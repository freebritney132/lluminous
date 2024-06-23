<script>
	import { params } from './stores.js';

	export let knobsOpen = false;
</script>

<aside
	data-sidebar="knobs"
	class="{knobsOpen
		? ''
		: 'translate-x-full'} fixed right-0 top-0 z-[100] flex h-full w-[230px] flex-col gap-2 border-l border-slate-200 bg-white px-3 py-4 transition-transform ease-in-out"
>
	<label title="The most tokens you want from the API before cutting it off." class="mb-4 flex flex-col text-[10px] uppercase tracking-wide">
		<div class="mb-2 ml-[3px] flex items-baseline">
			<span>Max Tokens</span>
		</div>
		<input
			type="number"
			min={0}
			bind:value={$params.maxTokens}
			class="rounded-lg border border-slate-300 px-2 py-1.5 text-xs text-slate-800 transition-colors placeholder:text-gray-500 focus:border-slate-400 focus:outline-none"
		/>
	</label>

	<hr>
	<h1 class="text-2xl text-center font-semibold mb-4">Sampling</h1>
	<label title="How random you want the AI to be. Values above 1 forbidden for Claude." class="mb-4 flex flex-col text-[10px] uppercase tracking-wide">
		<div class="mb-2 ml-[3px] flex items-baseline">
			<span>Temperature</span>
			<span class="ml-auto">{$params.temperature}</span>
		</div>
		<input
			type="range"
			min={0}
			max={2}
			bind:value={$params.temperature}
			step={0.05}
			class="appearance-none overflow-hidden rounded-full border border-slate-300
				[&::-webkit-slider-runnable-track]:h-2.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-slate-100
				[&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
			[&::-webkit-slider-thumb]:bg-slate-700 [&::-webkit-slider-thumb]:shadow-[-407px_0_0_404px_theme('colors.slate.200')]"
		/>
	</label>
	<label class="mb-4 flex flex-col text-[10px] uppercase tracking-wide">
		<div class="mb-2 ml-[3px] flex items-baseline">
			<span>Top-P</span>
			<span class="ml-auto">{$params.top_p}</span>
		</div>
		<input
			type="range"
			min={-1}
			max={1}
			bind:value={$params.top_p}
			step={0.05}
			class="appearance-none overflow-hidden rounded-full border border-slate-300
				[&::-webkit-slider-runnable-track]:h-2.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-slate-100
				[&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
			[&::-webkit-slider-thumb]:bg-slate-700 [&::-webkit-slider-thumb]:shadow-[-407px_0_0_404px_theme('colors.slate.200')]"
		/>
	</label>
	<label class="mb-4 flex flex-col text-[10px] uppercase tracking-wide">
		<div class="mb-2 ml-[3px] flex items-baseline">
			<span>Top-K</span>
			<span class="ml-auto">{$params.top_k}</span>
		</div>
		<input
			type="range"
			min={-1}
			max={1}
			bind:value={$params.top_k}
			step={0.05}
			class="appearance-none overflow-hidden rounded-full border border-slate-300
				[&::-webkit-slider-runnable-track]:h-2.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-slate-100
				[&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
			[&::-webkit-slider-thumb]:bg-slate-700 [&::-webkit-slider-thumb]:shadow-[-407px_0_0_404px_theme('colors.slate.200')]"
		/>
	</label>
	<!-- FIXME: -->
	<!-- {#if convo.local}
		<select
			class="{autodetectedFormat
				? 'border-green-300/80 bg-green-50/75'
				: 'border-red-300 bg-red-50/75'} rounded-lg text-sm"
			value={convo.tmpl}
			on:change={(event) => {
				convo.tmpl = event.target.value;
			}}
		>
			<option value={null} disabled>Select a prompt format</option>
			{#each promptFormats as fmt}
				<option value={fmt}>{fmt}</option>
			{/each}
		</select>
	{/if} -->

	<!-- <select
		class="w-full rounded-lg border-slate-300 text-sm"
		value={conversationTemplate}
		on:change={async (event) => {
			loadConversationTemplate(event.target.value);
		}}
	>
		<option value={null} disabled>Load from template</option>
		{#each Object.keys(conversationTemplates) as name}
			<option value={name}>{name}</option>
		{/each}
	</select> -->
</aside>
