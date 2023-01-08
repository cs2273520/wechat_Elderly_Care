
Component({
  data: {
    citys: [
      { label: '原因1', value: '原因1' },
      { label: '原因1', value: '原因1' },
      { label: '原因1', value: '原因1' },
      { label: '原因1', value: '原因1' },
    ],
    years: [
      { label: '2021年', value: '2021' },
      { label: '2020年', value: '2020' },
      { label: '2019年', value: '2019' },
    ],
    seasons: [
      { label: '春', value: '春' },
      { label: '夏', value: '夏' },
      { label: '秋', value: '秋' },
      { label: '冬', value: '冬' },
    ],
  },

  methods: {
    onColumnChange(e) {
      console.log('picker pick:', e);
    },

    onPickerChange(e) {
      const { key } = e.currentTarget.dataset;
      const { value } = e.detail;

      console.log('picker change:', e.detail);
      this.setData({
        [`${key}Visible`]: false,
        [`${key}Value`]: value,
        [`${key}Text`]: value.join(' '),
      });
    },

    onPickerCancel(e) {
      const { key } = e.currentTarget.dataset;
      console.log(e, '取消');
      console.log('picker1 cancel:');
      this.setData({
        [`${key}Visible`]: false,
      });
    },

    onCityPicker() {
      this.setData({ cityVisible: true });
    },

    onSeasonPicker() {
      this.setData({ dateVisible: true });
    },
  },
});