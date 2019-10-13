<template>
  <div>
    <ul class="movie-box">
      <li class="movieList" v-for="(obj,index) in movieList" :key="index" @click="goDetail(obj.id)">
        <img :src="obj.images.medium" alt="">
        <div>
          <h2>{{obj.original_title}}</h2>
          <p>{{obj.collect_count}}已收藏</p>
          <p>演员: <span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}}</span> </p>
          <p>上映时间 :{{obj.year}}</p>
          <p>剧情 :{{obj.genres}}</p>
        
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movieList: []
    };
  },
  created() {
    axios
      .get("https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10")
      .then(res => {
        console.log(res.data);
        this.movieList = res.data.subjects;
      })
      .catch(res => {
        console.log(res);
      });
  },
  methods:{
    goDetail(id){
      //query
      this.$router.push({path:'/movie/moviedetail',query:{id}});
      //params
      // this.$router.push({
      //    name:'moviedetail',
      //    params:{id}
      // }
       
      //   )
      // this.$router.push('/movie/moviedetail/'+id)

    }
  }
};
</script>

<style lang="scss" scoped>
.movie-box {
  padding: 0.2rem;

.movieList {
  display: flex;

  img {
    width: 3rem;
    margin-right: 0.2rem;
  }
  margin-bottom:0.2rem;
  border-bottom:1px solid #000;
  }
}
</style>