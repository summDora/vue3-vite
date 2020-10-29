<template>
    <div id="app">
        <div id='nav'>
            <router-link to='/'> AppCompositonAPI</router-link>
            <router-link to='/reactive'>AppReactive </router-link>
            <router-link to='/ref'> AppRef</router-link>
            <router-link to='/setup'> AppSetup</router-link>
            <router-link to='/toraw'> AppToraw</router-link>
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

</script>
<script>
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
    #nav{
        width: 80vw;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        a{
            text-decoration: none;
            color:$themeColor;
            padding:8px 0px;
        }
    }
    .line{
        width: 100vw;
        height: 1px;
        border-top: 1px solid darken($themeColor,5%);
    }
</style>
