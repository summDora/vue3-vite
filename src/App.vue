<template>
    <div id="app">
        <h1>VUE 3.0 新特性</h1>
        <div class='nav'>
            <router-link to='/'> AppCompositonAPI</router-link>
            <router-link to='/reactive'>AppReactive </router-link>
            <router-link to='/ref'> AppRef</router-link>
            <router-link to='/setup'> AppSetup</router-link>
            <router-link to='/toraw'> AppToraw</router-link>
            <router-link to='/markraw'> AppMarkraw</router-link>
        </div>
        <div class="nav">
            <router-link to='/toref'> AppToref</router-link>
            <router-link to='/customref'> AppCustomRef</router-link>
            <!-- <router-link to='/'> AppCompositonAPI</router-link> -->
        </div>
        <div class="line"></div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
}
/*
    vue3.x 中如果要是用sass 除了install sass-loader , node-sass之外
    还需另外install sass
    yarn 默认安装是--save package.json (dependencies)
    yarn 如果需要安装到 package.json (devDependencies) 就得使用 --dev
    与npm和cnpm不同
    npm和cnpm要安装到 package.json (devDependencies) 就得使用 --save-dev
*/
</script>
<style lang='scss'>
$themeColor:#0a7a34;
    .nav{
        width: 70vw;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        a{
            text-decoration: none;
            color:$themeColor;
            padding:8px 15px;
        }
        .route_active{
            background:$themeColor ;
            color: white;
        }
    }
    .line{
        width: 100vw;
        height: 1px;
        border-top: 1px solid darken($themeColor,5%);
        margin-bottom: 20px;
    }
</style>
