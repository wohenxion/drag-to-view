export default {
  name: "标题栏222",
  config: [
    {
      label: "样式",
      items: [
        {
          label: "标题名字",
          name: "title",
          value: "我是标题2"
        },
        {
          label: "字体大小",
          name: "fontSize",
          value: 26,
          type: "num",
          range: [12, 150]
        },
        {
          label: "字体颜色",
          name: "color",
          value: "#76d9f7",
          type: "colorPick",
          col: 12
        },
        {
          label: "背景颜色",
          name: "bg_color",
          value: "#7962B8",
          type: "colorPick",
          col: 12
        }
      ]
    }
  ]
};
