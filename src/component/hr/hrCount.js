// 产量完成率

var HRCount = Vue.extend({
  // template: template,
  template: `
    <div style="width:470px;height:1022px;background:rgba(52, 143, 237, 0.15)">
      <div  ref="producbar" style="width:100%; height:100%"></div>
      <div style="display: flex;flex-direction: column;align-items: center;justify-content:center;margin-top:-230px;" >
        <div>
          <span style="color:white;font-size:20px;">总人数<span>
          <span style="color:rgba(247,208,55,1);font-size:75px;">2000<span>
        </div>
        <div style="color:white;font-size:20px;">
          打卡人数
          <span style="color:rgba(247,208,55,1);">1100</span>人,未打卡人数
          <span style="color:rgba(247,208,55,1);">900</span>人
        </div>
      </div>
    </div>
  `,
  props: ['data'],
  mounted() {
    var data = this.data ? this.data : {};
    var myChart = echarts.init(this.$refs.producbar);
    var option = {
      title: {
        text: "人力资源 (人)",
        left: '7.8%',
        top:'6.4%',
        textStyle: { color: 'white', fontSize: 20 },
      },
      legend: {
        orient:'horizontal',
        top:"15.8%",
        left:"11.7%",
        itemWidth:44,
        itemGap:80,
        textStyle:{
          fontSize:16,
          color:"#fff",
        },
        borderRadius:5,
        data: ['打卡人数','未打卡人数']
    },
      tooltip: { trigger: 'item', formatter: "{b} : {c}", show: true },
      series:
        {
          type: 'pie',
          selectedMode: 'single',
          label: {
            normal: {
                position: 'inner',
                formatter: ["{a|{c}}", "{b|{b}}"].join("\n"),
                rich: {
                  a: {
                    color: "#FFF",
                    fontSize: "16",
                  },
                  b: {
                    color: "#FFF",
                    fontSize: "24"
                  }
                }
            }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          backgroundStyle: { color: 'rgba(52, 143, 237, 0.15)' },
          color:["#86d363","#ac88ce"],
          radius:"80%",
          center:["50%","50%"],
          data: [
            { value: 75, name: '打卡人数' },
            { value: 25, name: '未打卡人数', selected:true },
          ],
        }
    };
    myChart.setOption(option);
  },
});

