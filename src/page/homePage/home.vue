<template>
    <div class="gui">
        <div class="gui-header">
            <h-component></h-component>
        </div>
        <div style="height: 1000px"></div>
        <div class="gui-footer">
            <f-component></f-component>
        </div>
    </div>
</template>

<script>
    import HComponent from './components/header.vue'
    import FComponent from './components/footer.vue'
  export default {
    name: "home",
    components: {
      HComponent,
      FComponent
    }
  }
</script>

<style lang="scss" scoped>
.gui {
    position: relative;
    .gui-header {
        height: 55px;
        width: 100%;
    }
    .gui-main {

    }
    .gui-footer {
        position: relative;
    }
}
</style>