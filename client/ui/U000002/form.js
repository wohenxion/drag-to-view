export default {
  name: "标题栏2",
  id: "",
  tabs: [
    {
      label: "数据配置",
      items: [
        {
          label: "标题文案",
          type: "list",
          items: [
            {
              label: "标题名字",
              name: "title",
              value: "我是标题"
            }
          ]
        }
      ]
    },
    {
      label: "样式设置",
      items: [
        {
          label: "字体设置",
          type: "list",
          items: [
            {
              label: "字体大小",
              name: "fontSize",
              value: 20,
              type: "num",
              range: [12, 150]
            },
            {
              label: "字体颜色",
              name: "color",
              value: "#11e223",
              type: "colorPick",
              col: 12
            }
          ]
        },
        {
          label: "其他设置",
          type: "list",
          items: [
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
  ] // 表单配置
};
