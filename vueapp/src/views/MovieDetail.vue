<template>
    <div>
     djjadja;
     {{$route.query.id}}
     <!-- {{$route.params.id}} -->
     <!-- {{$route.params.id}} -->
    </div>
</template>

<script>
    export default {
        create(){
            this.$route.query.id;
            axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/subject/?id='+this.$route.query.id)

        }
        
    }
</script>

<style lang="scss" scoped>

</style>