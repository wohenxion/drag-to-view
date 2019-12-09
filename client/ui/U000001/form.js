export default {
  name: "标题栏",
  config: [
    {
      label: "数据",
      items: [
        {
          label: "标题名字",
          name: "title",
          value: "我是标题"
        }
      ]
    },
    {
      label: "样式",
      items: [
        {
          label: "字体大小",
          name: "fontSize",
          value: 16,
          type: "num",
          range: [12, 150]
        },
        {
          label: "字体颜色",
          name: "color",
          value: "#FF0000",
          type: "colorPick"
        }
      ]
    }
  ]
};
