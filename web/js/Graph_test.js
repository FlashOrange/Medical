function draw(data){//js 的图形互数据库


    // alert("this is test page"+name);
    var myChart = echarts.init(document.getElementById('main'));
    //节点和连接数据都为json格式
    //category（该节点类别），name（关系连接的关键字，可以理解为键值中的键，可为string也可为数字）value(节点的值，可以设置节点半径与该值的关系)，
    // var nodes=[
    //     {category:0, name: '东旭蓝天',"value":3,"size":30},
    //     {category:1, name: '国信证券经',"value":1,"size":10},
    //     {category:1, name: '海通证券研',"value":1,"size":10},
    //     {category:1, name: '招商证券',"value":1,"size":10},
    // ];
    var length = 0;
    var length_n = 0;
    for(var i in data["entitys"]) length++;
    for (var i in data["nodes"]) length_n++;

    var keyword = data["keyword"];

    var entitys_t = data["entitys"];
    var nodes_n = data["nodes"];
    var node_rel = data["node_rel"];
    var nodes = new Array(length_n);

    var entitys_h = data["entitys_h"];
    var rel = data["relationships"];
    var color={'药味':'red','主治':'green','贮藏':'Violet','部位':'black','功能':'orange','归经':'blue'}


    for(var i=0;i<length_n;i++){
        nodes[i] = {category:1,name:nodes_n[i],"size":20,itemStyle:{normal:{color:color[node_rel[i]]}}}
    }

    //source（起点，对应上面的name），target（终点，对应上面的name），value(起点到终点的距离，值越大，权重越大，距离越短)，label（显示该关系边标签，用来说明两节点之间的关系）。
    // var links=[
    //     {"source" : '东旭蓝天', "target" : '国信证券经',"flow":"2017-05-22"},
    //     {"source" : '东旭蓝天', "target" : '海通证券研',"flow":"2017-05-23"},
    //     {"source" : '东旭蓝天', "target" : '招商证券',"flow":"2017-05-24"},
    // ];
    var links = new Array(length);
    for(var i=0;i<length;i++){
        links[i] = {source:entitys_h[i], target:entitys_t[i],flow:rel[i],category:rel[i],itemStyle:{normal:{color:color[rel[i]]}}};
    }



    //定义节点格式
    nodes.forEach(function (node) {
        // node.itemStyle = null;//
        node.symbolSize = node.size;//强制指定节点的大小
        // node.draggable = true;//是否可拖拽
    });
    option = {
        // 图表标题
        title: {
            text: '关系图谱',//正标题
            subtext: '示例',//附标题
            top: 'bottom',//垂直位置
            left: 'middle'//水平位置
            //正标题样式
            // textStyle: {
            //     fontSize:24
            // },
            //副标题样式
            // subtextStyle: {
            //     fontSize:12,
            //     color:"red"
            // }
        },
        //数据提示框配置
        tooltip: {
            trigger: 'item',//触发方式，有'item'、'axis'。
            //'item':数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
            //'axis':坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
            //设置提示框格式
            //ormatter函数里面的params是整个数据,提示框在节点处要显示有关节点的数据，在关系边的时候显示关系边的数据，所以在这里要做个判断，判断好之后，就返回你先要显示的数据格式。
            formatter:function(params){
                if(params.data.flow){
                    return params.data.flow; //边上提示连接信息
                }
                else{
                    return params.data.name; //节点提示节点信息
                }
            }
        },
        // tooltip: {

        //formatter: function (x) {
        //return x.data.name;//节点和边都显示name属性
        //   }
        //},
        //自定义提示框
        // tooltip: {
        //     trigger: 'axis',
        //     formatter: function (datas) {
        //         var res = datas[0].name + '<br/>'
        //         for (var i = 0, length = datas.length; i < length; i++) {
        //            res += datas[i].seriesName + '：'
        //                + datas[i].data.originValue + '<br/>'
        //          }
        //         return res
        //     }
        // },
        //工具箱配置
        toolbox: {
            show : true,//是否显示工具箱
            feature : {
                // magicType: ['line', 'bar'], // 图表类型切换，当前仅支持直角系下的折线图、柱状图转换，上图icon左数6/7，分别是切换折线图，切换柱形图
                // restore: true, // 还原，复位原始图表，
                saveAsImage: true  // 保存为图片，
            }
        },
        //图例配置
        legend: [{
            // x: 'left',//图例位置
            data:['中药','实体']//关系图中需要与series中的categories的name保持一致
        }],
        //sereis的数据: 用于设置图表数据之用
        series: [{
            type: 'graph',
            layout: 'force', //layout为force，layout可以选择none、circular和force
            //'none' 不采用任何布局，使用节点中提供的 x， y 作为节点的位置。
            //'circular' 采用环形布局。
            //'force' 采用力引导布局。
            symbolSize: 20,
            edgeSymbol: ['circle', 'arrow'],///边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。默认不显示标记[ 'none', 'none' ]，常见的可以设置为箭头
            edgeSymbolSize: [4, 8],//边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。
            edgeLabel: {//线条的边缘标签
                        normal: {
                            show: true,
                            formatter: function (x) {
                                return x.data.category;
                            }
                        }
                    },
            // edgeLabel: {
            //     normal: {
            //         textStyle: {
            //             fontSize: 10
            //         }
            //     }
            // },

            animation: false,  //是否开启动画
            roam: true,//是否开启滚轮缩放和拖拽漫游，默认为false（关闭）
            label: {  //图形上的文本标签
                normal : {
                    show : true,//是否显示标签。
                    position : 'right',///标签相对于节点标签的位置
                    // textStyle : { //标签的字体样式
                    //     color : '#cde6c7', //字体颜色
                    //     fontStyle : 'normal',//文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                    //     fontWeight : 'bolder',//'normal'标准'bold'粗的'bolder'更粗的'lighter'更细的或100 | 200 | 300 | 400...
                    //     fontFamily : 'sans-serif', //文字的字体系列
                    //     fontSize : 12, //字体大小
                    //  }
                    //回调函数，你期望节点标签上显示什么
                    // formatter: function(params){
                    //     return params.data.label;
                    //  },
                    // }
                },
                emphasis : {//高亮状态

                }
            },
            draggable: true,  //指示节点是否可以拖动
            focusNodeAdjacency:true,//当鼠标移动到节点上，突出显示节点以及节点的边和邻接节点
            data: nodes,//节点数据
            edges: links,//边数据
            categories: [

                {
                    name: '中药'
                },
                {
                    name:'实体'
                }
            ],
            force : { //力引导图基本配置
                //initLayout: ,//力引导的初始化布局，默认使用xy轴的标点
                repulsion : 100,//节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
                // gravity : 0.03,//节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
                edgeLength :120,//边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
                // layoutAnimation : true
                //因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画，在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。
            },

            lineStyle: {//关系边的线条样式。
                normal: {
                    opacity: 0.8,// 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    // type : 'dotted', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                    width: 2,
                    // color: 'target',//决定边的颜色是与起点相同还是与终点相同
                    curveness: 0// //线条的曲线程度，从0到1

                }
            }
        }]
    };
    myChart.setOption(option);




}
