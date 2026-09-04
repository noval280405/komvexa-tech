<script setup lang="ts">
const props = withDefaults(defineProps<{ name: string; size?: number }>(), { size: 24 })
const paths: Record<string, string[]> = {
  windows:['M3 5.5l7-1v7H3v-6z','M12 4.2l9-1.2v8.5h-9V4.2z','M3 13h7v7l-7-1v-6z','M12 13h9v8.5l-9-1.3V13z'], app:['M4 4h6v6H4z','M14 4h6v6h-6z','M4 14h6v6H4z','M14 14h6v6h-6z'], spark:['M12 3l1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3z','M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14z'], temp:['M14 14.8V5a2 2 0 00-4 0v9.8a4 4 0 104 0z','M12 7v9'], drive:['M4 5h16v14H4z','M7 15h.01','M11 15h6'], chip:['M7 7h10v10H7z','M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4'], tool:['M14.7 6.3a4 4 0 01-5 5L4 17l3 3 5.7-5.7a4 4 0 005-5L15 12l-3-3 2.7-2.7z'], recover:['M4 12a8 8 0 101.8-5.1L3 9','M3 4v5h5'], pc:['M5 4h14v11H5z','M9 20h6M12 15v5'], home:['M3 11l9-8 9 8','M5 10v10h14V10','M9 20v-6h6v6'], check:['M5 12l4 4L19 6'], shield:['M12 3l8 3v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3z'], chat:['M4 5h16v11H8l-4 4V5z'], clock:['M12 3a9 9 0 110 18 9 9 0 010-18z','M12 7v5l3 2'], arrow:['M5 12h14M15 8l4 4-4 4'], pin:['M12 21s6-5.3 6-11a6 6 0 10-12 0c0 5.7 6 11 6 11z','M12 8v4'], menu:['M4 7h16M4 12h16M4 17h16'], close:['M6 6l12 12M18 6L6 18']
}
const iconPath = computed(() => (paths[props.name] ?? paths.tool).join(' '))
</script>

<template>
  <svg class="base-icon" :width="props.size" :height="props.size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <path :d="iconPath" vector-effect="non-scaling-stroke" />
  </svg>
</template>
