<template>
  <div>
    <div class="ulBox" ref="wrapper">
    <ul class="content">
      <button @click="btnClick">click</button>
      <li>测试滚动better-scroll1</li>
      <li>测试滚动better-scroll2</li>
      <li>测试滚动better-scroll3</li>
      <li>测试滚动better-scroll4</li>
      <li>测试滚动better-scroll5</li>
      <li>测试滚动better-scroll6</li>
      <li>测试滚动better-scroll7</li>
      <li>测试滚动better-scroll8</li>
      <li>测试滚动better-scroll9</li>
      <li>测试滚动better-scroll10</li>
      <li>测试滚动better-scroll11</li>
      <li>测试滚动better-scroll12</li>
      <li>测试滚动better-scroll13</li>
      <li>测试滚动better-scroll14</li>
      <li>测试滚动better-scroll15</li>
      <li>测试滚动better-scroll16</li>
      <li>测试滚动better-scroll17</li>
      <li>测试滚动better-scroll18</li>
      <li>测试滚动better-scroll19</li>
      <li>测试滚动better-scroll20</li>
      <li>测试滚动better-scroll21</li>
      <li>测试滚动better-scroll22</li>
      <li>测试滚动better-scroll23</li>
      <li>测试滚动better-scroll24</li>
      <li>测试滚动better-scroll25</li>
      <li>测试滚动better-scroll26</li>
      <li>测试滚动better-scroll27</li>
      <li>测试滚动better-scroll28</li>
      <li>测试滚动better-scroll29</li>
      <li>测试滚动better-scroll30</li>
      <li>测试滚动better-scroll31</li>
      <li>测试滚动better-scroll32</li>
      <li>测试滚动better-scroll33</li>
      <li>测试滚动better-scroll34</li>
      <li>测试滚动better-scroll35</li>
      <li>测试滚动better-scroll36</li>
      <li>测试滚动better-scroll37</li>
      <li>测试滚动better-scroll38</li>
      <li>测试滚动better-scroll39</li>
      <li>测试滚动better-scroll40</li>
      <li>测试滚动better-scroll41</li>
      <li>测试滚动better-scroll42</li>
      <li>测试滚动better-scroll43</li>
      <li>测试滚动better-scroll44</li>
      <li>测试滚动better-scroll45</li>
      <li>测试滚动better-scroll46</li>
      <li>测试滚动better-scroll47</li>
      <li>测试滚动better-scroll48</li>
      <li>测试滚动better-scroll49</li>
      <li>测试滚动better-scroll50</li>
      <li>测试滚动better-scroll51</li>
      <li>测试滚动better-scroll52</li>
      <li>测试滚动better-scroll53</li>
      <li>测试滚动better-scroll54</li>
      <li>测试滚动better-scroll55</li>
      <li>测试滚动better-scroll56</li>
      <li>测试滚动better-scroll57</li>
      <li>测试滚动better-scroll58</li>
      <li>测试滚动better-scroll59</li>
      <li>测试滚动better-scroll60</li>
      <li>测试滚动better-scroll61</li>
      <li>测试滚动better-scroll62</li>
      <li>测试滚动better-scroll63</li>
      <li>测试滚动better-scroll64</li>
      <li>测试滚动better-scroll65</li>
      <li>测试滚动better-scroll66</li>
      <li>测试滚动better-scroll67</li>
      <li>测试滚动better-scroll68</li>
      <li>测试滚动better-scroll69</li>
      <li>测试滚动better-scroll70</li>
      <li>测试滚动better-scroll71</li>
      <li>测试滚动better-scroll72</li>
      <li>测试滚动better-scroll73</li>
      <li>测试滚动better-scroll74</li>
      <li>测试滚动better-scroll75</li>
      <li>测试滚动better-scroll76</li>
      <li>测试滚动better-scroll77</li>
      <li>测试滚动better-scroll78</li>
      <li>测试滚动better-scroll79</li>
      <li>测试滚动better-scroll80</li>
      <li>测试滚动better-scroll81</li>
      <li>测试滚动better-scroll82</li>
      <li>测试滚动better-scroll83</li>
      <li>测试滚动better-scroll84</li>
      <li>测试滚动better-scroll85</li>
      <li>测试滚动better-scroll86</li>
      <li>测试滚动better-scroll87</li>
      <li>测试滚动better-scroll88</li>
      <li>测试滚动better-scroll89</li>
      <li>测试滚动better-scroll90</li>
      <li>测试滚动better-scroll91</li>
      <li>测试滚动better-scroll92</li>
      <li>测试滚动better-scroll93</li>
      <li>测试滚动better-scroll94</li>
      <li>测试滚动better-scroll95</li>
      <li>测试滚动better-scroll96</li>
      <li>测试滚动better-scroll97</li>
      <li>测试滚动better-scroll98</li>
      <li>测试滚动better-scroll99</li>
      <li>测试滚动better-scroll100</li>
    </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
// import BScroll from '@better-scroll/core'
// import Pullup from '@better-scroll/pull-up'
// BScroll.use(Pullup)
export default {
  name: 'Category',
  data(){
    return {
      scroll: null
    }
  },
  created(){
    
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      pullUpLoad: true,
    })
    this.scroll.on('scroll',pos => {
      //console.log(pos)
    })
    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多')
      setTimeout(() => {
        this.scroll.finish
      }, 2000);
    })
  },
  methods:{
    btnClick(){
      console.log('btnclick')
      
    }
  }
}
</script>
<style scoped>
.ulBox{
  height: 200px;
  width: 100%;
  background: wheat;

  overflow: hidden;
  /* overflow-y: scroll;  此属性包含了上面一条属性 */
}
</style>