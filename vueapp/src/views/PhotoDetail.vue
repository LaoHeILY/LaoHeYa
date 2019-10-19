<template>
    <div class='photo-detail' :style="">
 
        {{$route.query.index}}
   
    </div>
</template>

<script>
    import {mapState} from "vuex";
    export default {
        created(){

        console.log(this.photoList)
    },
    computed:{
        ...mapState(['photoList'])
    } 
    }
</script>

<style lang="scss" scoped>
    .photo-detail{
        background: #000 url("LaoHeYa\vueapp\public\img\01.jpg") no-repeat center center;
        background-size: contain;
        position: absolute;
        top:1rem;
        left:0;
        right:0;
        bottom:1rem;
    }
</style>