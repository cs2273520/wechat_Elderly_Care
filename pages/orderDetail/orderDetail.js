Component({
    data: {
      cur: {},
      position: [
      ],
    },
    methods: {
      handlePopup(e) {
        const { item } = e.currentTarget.dataset;
  
        this.setData(
          {
            cur: item,
          },
          () => {
            this.setData({ visible: true });
          },
        );
      },
      onVisibleChange(e) {
        this.setData({
          visible: e.detail.visible,
        });
      },
    },
  });
  