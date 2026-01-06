<script setup lang="ts">
defineProps<{ type: 'node' | 'client' | 'both' }>()

const typeLabels: Record<string, string> = {
  node: 'Node.js',
  client: '客户端',
  both: '两端',
}
</script>

<template>
  <details class="p4 mt-4 rounded-lg bg-gray-400 bg-opacity-10">
    <summary class="outline-none !m0 select-none">
      运行环境：
      <span class="capitalize font-bold" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ typeLabels[type] || type }}</span>
    </summary>

    <div class="pt2 opacity-75">
      <span v-if="type === 'both'">
        此 setup 函数将在 Node.js 和客户端<b>两端</b>运行。请避免使用 Node.js 或 DOM API 以防止运行时错误。
      </span>
      <span v-else-if="type === 'node'">
        此 setup 函数仅在 Node.js 环境中运行，你可以访问 Node 的 API。
      </span>
      <span v-else-if="type === 'client'">
        此 setup 函数仅在客户端运行。导入包时请确保浏览器兼容性。
      </span>
    </div>
  </details>
</template>
