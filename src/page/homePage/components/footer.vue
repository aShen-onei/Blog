<template>
    <div class="footer">
        <div class="footer-container">
            <div class="footer-link col-2">
                <h4>前端团队链接</h4>
                <div class="link">
                    <a v-for="team in footerTeamItem" :key="team.name" :href="team.path" target="_blank">{{team.name}}</a>
                </div>
            </div>
            <div class="footer-link col-3">
                <h4>友情链接</h4>
                <div class="link">
                    <a v-for="game in footerGameWeb" :key="game.name" :href="game.path" target="_blank">{{game.name}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "footerComponent",
    data() {
      return {
        footerTeamItem: [
          {
            path: 'http://www.alloyteam.com/',
            name: '腾讯AlloyTeam',
          },
          {
            path: 'http://fex.baidu.com/',
            name: '百度FEX',
          },
          {
            path: 'https://75team.com/',
            name: '奇舞团'
          },
          {
            path: 'http://feg.netease.com/',
            name: '网易游戏FEG'
          },
          {
            path: 'https://fed.taobao.org/',
            name: '阿里巴巴FED'
          },
          {
            path: 'https://aotu.io/',
            name: '凹凸实验室'
          }
        ],
        footerGameWeb: [
          {
            path: 'http://www.monsterhunterworld.com/hk/',
            name: '怪物猎人:世界'
          },
          {
            path: 'https://www.warframe.com/',
            name: 'Warframe'
          },
          {
            path: 'https://docs.mhw-db.com/',
            name: '怪物猎人:世界API'
          },
          {
            path: 'https://warframestat.us/',
            name: 'warframe API'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.footer {
    background-color: #26282c;
    padding: 30px;
    .footer-container {
        display: flex;
        width: 100%;
        .footer-link {
            margin: 0px;
            padding: 0px;
            h4 {
                font-size: 20px;
                color: #666666;
            }
            .link {
                text-align: left;
                a {
                    display: block;
                    line-height: 24px;
                    font-size: 14px;
                    color: #dddddd;
                    &:hover {
                        color: #ff9900;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>