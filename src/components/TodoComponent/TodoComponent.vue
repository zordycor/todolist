<template>
	<li
	:class="[
		'todo-list__item',
		`todo-list__item--${getPriorityClass(todo)}`
	]">
		<h4 class="todo-list__item-description" v-html="highlightDescription"></h4>
		<p class="todo-list__item-memo" v-html="highlightMemo"></p>
	</li>
</template>

<script>
	export default {
		props: {
			todo: {
				type: Object,
				required: true
			},
			highlightText: {
				type: String,
				default: ''
			},
		},
		computed: {
			highlightDescription() {
				return this.getHighlightText(this.todo.description);
			},
			highlightMemo() {
				return this.getHighlightText(this.todo.memo);
			}
		},
		methods: {
			getPriorityClass(todo) {
				const priorityTable = {
					1: 'high',
					2: 'medium',
					3: 'low',
				}

				return priorityTable[todo.priority];
			},
			getHighlightText(text) {
				const apperture = '<span class="todo-list__highlight">';
				const closure = '</span>';
				const indexToInsert = text.toLowerCase().indexOf(this.highlightText.toLowerCase());
				const indexToClose = indexToInsert + this.highlightText.length;

				if(indexToInsert < 0) return text;

				return `${text.substring(0, indexToInsert)}${apperture}${text.substring(indexToInsert, indexToClose)}${closure}${text.substring(indexToClose)}`;

    		},
		}
	}
</script>

<style src="./TodoComponent.scss" lang="scss">
</style>