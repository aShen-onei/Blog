<template>
    <div class="header">
        <div class="text">Welcome</div>
        <ul>
           <li v-for="item in headerItem" :key="item.index">
               <i :class="item.icon"></i>
               <div class="link">{{item.item}}</div>
           </li>
        </ul>
        <div class="header-right">登录</div>
    </div>
</template>

<script>
  export default {
    name: "headerComponent",
    data() {
      return {
        headerItem: [
          {
            item: 'Blog',
            icon: '',
            index: 1
          },
          {
            item: 'Monster Hunter',
            icon: '',
            index: 2
          },
          {
            item: 'Warframe',
            icon: '',
            index: 3
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
    .header {
        position: fixed;
        height: 55px;
        line-height: 55px;
        width: 100%;
        top: 0px;
        z-index: 1000;
        background-color: #f9f9f9;
        border-bottom: 1px solid #ddd;
        padding: 0 20px;
        display: flex;
        .text {
            i {
                font-size: 16px;
            }
            font-size: 20px;
        }
        ul {
            margin: 0 0 0 10px;
            display: flex;
            li {
                position: relative;
                margin: 0 5px;
                i {
                    font-size: 16px;
                }
                .link {
                    display: inline;
                    padding: 8px 3px;
                    font-size: 16px;
                    color: #666;
                }
                &:hover{
                    color: indianred;
                    cursor: pointer;
                    border-bottom: 2px solid #5a5a5a;
                }
            }
        }
        .header-right {
            font-size: 14px;
            padding: 0 8px;
            right: 50px;
            position: absolute;
            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
</style>