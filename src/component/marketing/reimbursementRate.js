// 营销主页面回款率柱状图组件

const ReimbursementRate = Vue.extend({
	template: `<div ref="topBar" style="width:100%;height:100%">{{realtimeinfo}}</div>`,  //组件
	props: ['realtimeinfo', 'pie'], //传值
	mounted() {  //所有页面元素都加载到页面后执行
		this.initChart({
			id: this.$refs.topBar,
		})

	},
	updated() {   //有数据更新时触发执行
		this.updateChart();
	},
	methods: { //方法
		initChart: function (item) {
			this.BarChart = echarts.init(item.id);
			option = {
				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				title: {
					text: '2016年12月份',
					top: '2%',
					left: '2.2%',
					textStyle: {
						color: '#fff',
						fontSize:24,
					}
				},
				grid: {
					top:'9.3%',
					left: '3%',
					right: '1.7%',
					bottom: '2.6%',
					containLabel: true
				},
				tooltip: {
					trigger: 'item',
					formatter: "{b}: {c}"
				},
				xAxis: [{
					type: 'category',
					axisLabel: {
						show: true, //刻度名称
						color: '#fff', //字体颜色
						fontSize: 18,
						interval: 0,
						rotate: 0
					},

					axisTick: {
						show: false, //刻度线
					},
					axisLine: { //刻度颜色
						lineStyle: {
							color: '#0c2454',
						}
					},
				}],

				yAxis: [{
					type: 'value',
					offset: 10,
					min: 0,
					splitLine: {
						show: false //背景网格
					},
					height:50,
					axisLine: {
						show: true //y轴线
					},
					axisTick: {
						show: false, //刻度线
					},
					lineHeight: 34,
					axisLabel: {
						textStyle: {
							color: '#fff', //y轴字体颜色
							fontSize: 14
						},
					},
					axisLine: { //刻度颜色
						lineStyle: {
							color: '#0c2454',
						}
					},
				},],
				series: [
					{
						name: '2016年12月份',
						type: 'bar',
						zlevel: -1,
						barWidth: 76,
						// data: this.realtimeinfo.data,
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1, [
										{ offset: 0.3, color: 'rgb(51, 132, 250)' },
										{ offset: 0.7, color: 'rgb(2, 103, 253)' }
									]
								)
							}
						},
						label: {
							normal: {
								show:true,
								position:'top',
								textStyle: {
									color: '#fff',
									fontSize:16
								  }
							},

						},
					},
					{
						name:'面积模式',
						type: 'pie',
						zlevel: 999,
						radius: [54, 200],
						center: ['77%', '32.8%'],
						color: ['#304453', '#60a0a9', '#c23431', '#d38265', '#91c7af', '#749f83','#ca8623','#bda299'],
						roseType : 'area',
						label: {   //图形字体颜色
							normal: {
							  textStyle: {
								color: '#fff',
								fontSize:16
							  }
							}
						  },
						  labelLine: {  //线颜色
							normal: {
							  color: ['#304453', '#60a0a9', '#c23431', '#d38265', '#91c7af', '#749f83','#ca8623','#bda299'],
							  lineStyle: {
							  },
							  smooth: 0.2,
							  length: 10,
							  length2: 20
							}
						  },
						// data: this.realtimeinfo.pie,
					}
				]
			};

			this.BarChart.setOption(option);


		},
		updateChart() {
			const option = {
				xAxis: [{
					type: 'category',
					data: this.realtimeinfo.nameData,
				}],
				series: [{
					type: 'bar',
					data: this.realtimeinfo.data
				}, {
					type: 'pie', data: this.realtimeinfo.pie
				}]
			};
			this.BarChart.setOption(option);
		}
	}

})