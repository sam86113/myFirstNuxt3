<script lang="ts" setup>
const fakeImgUrl: (width: number, height: number, text: string) => string = function (
  width: number,
  height: number,
  text: string
): string {
  return 'https://fakeimg.pl/' + width + 'x' + height + '/?text=' + text
}
</script>

<template>
  <NuxtPage />
  <div class="container mt-10">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl font-black tracking-tighter lg:text-7xl">
        Welcome to <span class="wen_hung">劉玟宏's </span
        ><span class="nuxt_heading">Nuxt3</span> App
      </h1>
      <h2 class="mt-10 mb-4 text-2xl font-bold tracking-tight text-blue-300 lg:text-5xl">
        This is a waterfall written by
        <span class="font-mono text-red-400">tailwind</span>
      </h2>
    </div>
    <div class="mb-10 grid grid-cols-4 gap-5">
      <ul class="flex flex-col gap-5">
        <li><img src="~/assets/img/waterfall.jpg" /></li>
        <li><img :src="fakeImgUrl(1250, 500, 'ImFalling')" /></li>
        <li><img :src="fakeImgUrl(1250, 650, 'ImFalling')" /></li>
      </ul>
      <ul class="flex flex-col gap-5">
        <li><img :src="fakeImgUrl(1250, 650, 'ImFalling')" /></li>
        <li><img :src="fakeImgUrl(1250, 500, 'ImFalling')" /></li>
        <li><img data-aos="fade-up" :src="fakeImgUrl(1250, 1500, 'ImFalling')" /></li>
        <li><img data-aos="fade-up" :src="fakeImgUrl(1250, 1500, 'ImFalling')" /></li>
        <li><img data-aos="fade-up" :src="fakeImgUrl(1250, 1500, 'ImFalling')" /></li>
      </ul>
      <ul class="flex flex-col gap-5">
        <li><img data-aos="fade-up" :src="fakeImgUrl(1250, 1500, 'ImFalling')" /></li>
        <li><img :src="fakeImgUrl(1250, 500, 'ImFalling')" /></li>
        <li><img :src="fakeImgUrl(1250, 1250, 'ImFalling')" /></li>
      </ul>
      <ul class="flex flex-col gap-5">
        <li><img :src="fakeImgUrl(1250, 650, 'ImFalling')" /></li>
        <li><img :src="fakeImgUrl(1250, 500, 'ImFalling')" /></li>
        <li><img :src="fakeImgUrl(1250, 1250, 'ImFalling')" /></li>
      </ul>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.nuxt_heading
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff)
    color: transparent
    background-clip: text
    -webkit-background-clip: text

.wen_hung
    background: -webkit-linear-gradient(315deg, #eac100 25%, #ff9224)
    color: transparent
    background-clip: text
    -webkit-background-clip: text
</style>
