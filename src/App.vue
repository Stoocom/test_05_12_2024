<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
    common: {
      fontFamily: "Inter-Regular",
    },
    Select: {
      peers: {
        InternalSelection: {
          textColor: 'black',
          border: '1px solid black',
          placeholderColor: 'black',
          caretColor: 'black',
          loadingColor: 'black',
          borderActive: '1px solid black',
          borderFocus: '1px solid black',
          borderHover: '1px solid black',
          boxShadowHover: '',
          boxShadowActive: '',
          boxShadowFocus: '',
          arrowColor: 'black',
          fontSizeTiny: '12px',
          fontSizeSmall: '12px',
          fontSizeMedium: '12px',
          fontSizeLarge: '12px',
        },
        InternalSelectMenu: {
          actionTextColor: 'black',
          borderRadius: '6px',
          optionTextColor: 'black',
          optionTextColorPressed: 'black',
          optionTextColorActive: 'black',
          optionCheckColor: 'black',
          optionFontSizeTiny: '12px',
          optionFontSizeSmall: '12px',
          optionFontSizeMedium: '12px',
          optionFontSizeLarge: '12px',
          optionFontSizeHuge: '12px',
        },
      }
    },
  }
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view />
  </n-config-provider>
</template>

<style scoped lang="scss">
  .parent {
    position: relative;
  }
  .child {
    position: absolute;
  }
  .input {
    height: 40px;
    min-width: 250px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 20px;
    border-radius: 6px;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
