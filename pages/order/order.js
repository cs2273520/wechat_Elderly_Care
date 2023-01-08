Component({
    data: {
      confirmBtn: { content: '签订包月服务', variant: 'base' },
      dialogKey: '',
      showText: false,
      showMultiText: false,
      showTextAndTitle: false,
      showMultiTextAndTitle: false,
      content:"金额:3888元 服务不满意->"
    },
    methods: {
      showDialog(e) {
        const { key } = e.currentTarget.dataset;
        this.setData({ [key]: true, dialogKey: key });
      },
  
      closeDialog() {
        const { dialogKey } = this.data;
        this.setData({ [dialogKey]: false });
      },
    },
  });
  