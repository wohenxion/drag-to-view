export default {
  label: "标题栏",
  config: {
    label: "样式",
    tabs: [
      {
        label: "标题配置",
        type: "list",
        items: [
          {
            label: "标题名字",
            name: "title",
            value: "我是标题qqqqq2"
          }
        ]
      },
      {
        label: "常用设置",
        type: "list",
        items: [
          {
            label: "字体大小",
            name: "fontSize",
            value: 18,
            type: "num",
            range: [12, 150]
          },
          {
            label: "字体颜色",
            name: "color",
            value: "#70ffa7",
            type: "colorPick",
            col: 12
          },
          {
            label: "背景颜色",
            name: "bg_color",
            value: "#E39417",
            type: "colorPick",
            col: 12
          }
        ]
      }
    ]
  }
};
