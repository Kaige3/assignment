
export const DictConstants = {
    REFUND_STATUS: 1005,
    COUPON_TYPE: 1006,
    PAY_TYPE: 1004,
    MENU_TYPE: 1002,
    PRODUCT_ORDER_STATUS: 1003,
    GENDER: 1001,
    COUPON_SCOPE: 1007,
    COUPON_USE_STATUS: 1008,
    COUPON_RECEIVE_TYPE: 1009,
    WALLET_RECORD_TYPE: 1010,
    AGENT_LEVEL: 1011,
}
export const Dictionaries = {
    RefundStatus: {
        APPROVED: {
          keyId: 2,
          keyName: '已同意',
          keyEnName: 'APPROVED',
          dictId: 1005,
          dictName: '退款状态',
          dictEnName: 'REFUND_STATUS',
          orderNum: 0
        },
        TO_BE_APPROVE: {
          keyId: 1,
          keyName: '待审批',
          keyEnName: 'TO_BE_APPROVE',
          dictId: 1005,
          dictName: '退款状态',
          dictEnName: 'REFUND_STATUS',
          orderNum: 0
        },
        REJECTED: {
          keyId: 3,
          keyName: '已拒绝',
          keyEnName: 'REJECTED',
          dictId: 1005,
          dictName: '退款状态',
          dictEnName: 'REFUND_STATUS',
          orderNum: 0
        },
        TO_BE_CREATE: {
          keyId: 0,
          keyName: '待创建',
          keyEnName: 'TO_BE_CREATE',
          dictId: 1005,
          dictName: '退款状态',
          dictEnName: 'REFUND_STATUS',
          orderNum: 0
        },
      },
    CouponType: {
        DISCOUNT: {
          keyId: 0,
          keyName: '折扣券',
          keyEnName: 'DISCOUNT',
          dictId: 1006,
          dictName: '优惠券类型',
          dictEnName: 'COUPON_TYPE',
          orderNum: 0
        },
        REDUCE: {
          keyId: 1,
          keyName: '满减券',
          keyEnName: 'REDUCE',
          dictId: 1006,
          dictName: '优惠券类型',
          dictEnName: 'COUPON_TYPE',
          orderNum: 0
        },
      },
    PayType: {
        WE_CHAT_PAY: {
          keyId: 0,
          keyName: '微信支付',
          keyEnName: 'WE_CHAT_PAY',
          dictId: 1004,
          dictName: '支付类型',
          dictEnName: 'PAY_TYPE',
          orderNum: 0
        },
        ALI_PAY: {
          keyId: 1,
          keyName: '支付宝',
          keyEnName: 'ALI_PAY',
          dictId: 1004,
          dictName: '支付类型',
          dictEnName: 'PAY_TYPE',
          orderNum: 0
        },
      },
    MenuType: {
        BUTTON: {
          keyId: 2,
          keyName: '按钮',
          keyEnName: 'BUTTON',
          dictId: 1002,
          dictName: '菜单类型',
          dictEnName: 'MENU_TYPE',
          orderNum: 2
        },
        PAGE: {
          keyId: 0,
          keyName: '页面',
          keyEnName: 'PAGE',
          dictId: 1002,
          dictName: '菜单类型',
          dictEnName: 'MENU_TYPE',
          orderNum: 1
        },
        DIRECTORY: {
          keyId: 1,
          keyName: '目录',
          keyEnName: 'DIRECTORY',
          dictId: 1002,
          dictName: '菜单类型',
          dictEnName: 'MENU_TYPE',
          orderNum: 0
        },
      },
    ProductOrderStatus: {
        CLOSED: {
          keyId: 4,
          keyName: '已关闭',
          keyEnName: 'CLOSED',
          dictId: 1003,
          dictName: '商品订单状态',
          dictEnName: 'PRODUCT_ORDER_STATUS',
          orderNum: 0
        },
        REFUNDING: {
          keyId: 5,
          keyName: '退款中',
          keyEnName: 'REFUNDING',
          dictId: 1003,
          dictName: '商品订单状态',
          dictEnName: 'PRODUCT_ORDER_STATUS',
          orderNum: 0
        },
        TO_BE_RECEIVED: {
          keyId: 2,
          keyName: '待收货',
          keyEnName: 'TO_BE_RECEIVED',
          dictId: 1003,
          dictName: '商品订单状态',
          dictEnName: 'PRODUCT_ORDER_STATUS',
          orderNum: 0
        },
        TO_BE_PAID: {
          keyId: 0,
          keyName: '待付款',
          keyEnName: 'TO_BE_PAID',
          dictId: 1003,
          dictName: '商品订单状态',
          dictEnName: 'PRODUCT_ORDER_STATUS',
          orderNum: 0
        },
        TO_BE_EVALUATED: {
          keyId: 3,
          keyName: '待评价',
          keyEnName: 'TO_BE_EVALUATED',
          dictId: 1003,
          dictName: '商品订单状态',
          dictEnName: 'PRODUCT_ORDER_STATUS',
          orderNum: 0
        },
        TO_BE_CREATE: {
          keyId: 6,
          keyName: '待创建',
          keyEnName: 'TO_BE_CREATE',
          dictId: 1003,
          dictName: '商品订单状态',
          dictEnName: 'PRODUCT_ORDER_STATUS',
          orderNum: 0
        },
        TO_BE_DELIVERED: {
          keyId: 1,
          keyName: '待发货',
          keyEnName: 'TO_BE_DELIVERED',
          dictId: 1003,
          dictName: '商品订单状态	',
          dictEnName: 'PRODUCT_ORDER_STATUS',
          orderNum: 0
        },
      },
    Gender: {
        PRIVATE: {
          keyId: 2,
          keyName: '保密',
          keyEnName: 'PRIVATE',
          dictId: 1001,
          dictName: '性别',
          dictEnName: 'GENDER',
          orderNum: 0
        },
        MALE: {
          keyId: 0,
          keyName: '男',
          keyEnName: 'MALE',
          dictId: 1001,
          dictName: '性别',
          dictEnName: 'GENDER',
          orderNum: 0
        },
        FEMALE: {
          keyId: 1,
          keyName: '女',
          keyEnName: 'FEMALE',
          dictId: 1001,
          dictName: '性别',
          dictEnName: 'GENDER',
          orderNum: 1
        },
      },
    CouponScope: {
        CATEGORY: {
          keyId: 2,
          keyName: '品类券',
          keyEnName: 'CATEGORY',
          dictId: 1007,
          dictName: '优惠券使用范围',
          dictEnName: 'COUPON_SCOPE',
          orderNum: 0
        },
        PRODUCT: {
          keyId: 1,
          keyName: '商品券',
          keyEnName: 'PRODUCT',
          dictId: 1007,
          dictName: '优惠券使用范围',
          dictEnName: 'COUPON_SCOPE',
          orderNum: 0
        },
        GENERAL: {
          keyId: 0,
          keyName: '通用券',
          keyEnName: 'GENERAL',
          dictId: 1007,
          dictName: '优惠券使用范围',
          dictEnName: 'COUPON_SCOPE',
          orderNum: 0
        },
      },
    CouponUseStatus: {
        USED: {
          keyId: 1,
          keyName: '已使用',
          keyEnName: 'USED',
          dictId: 1008,
          dictName: '优惠券使用状态',
          dictEnName: 'COUPON_USE_STATUS',
          orderNum: 0
        },
        EXPIRED: {
          keyId: 2,
          keyName: '已过期',
          keyEnName: 'EXPIRED',
          dictId: 1008,
          dictName: '优惠券使用状态',
          dictEnName: 'COUPON_USE_STATUS',
          orderNum: 0
        },
        UNUSED: {
          keyId: 0,
          keyName: '未使用',
          keyEnName: 'UNUSED',
          dictId: 1008,
          dictName: '优惠券使用状态',
          dictEnName: 'COUPON_USE_STATUS',
          orderNum: 0
        },
      },
    CouponReceiveType: {
        GIFT: {
          keyId: 0,
          keyName: '系统赠送',
          keyEnName: 'GIFT',
          dictId: 1009,
          dictName: '优惠券获取方式',
          dictEnName: 'COUPON_RECEIVE_TYPE',
          orderNum: 0
        },
      },
    WalletRecordType: {
        REBATE: {
          keyId: 0,
          keyName: '返佣',
          keyEnName: 'REBATE',
          dictId: 1010,
          dictName: '钱包操作类型',
          dictEnName: 'WALLET_RECORD_TYPE',
          orderNum: 0
        },
        RECHARGE: {
          keyId: 1,
          keyName: '充值',
          keyEnName: 'RECHARGE',
          dictId: 1010,
          dictName: '钱包操作类型',
          dictEnName: 'WALLET_RECORD_TYPE',
          orderNum: 0
        },
        WITHDRAW: {
          keyId: 2,
          keyName: '提现',
          keyEnName: 'WITHDRAW',
          dictId: 1010,
          dictName: '钱包操作类型',
          dictEnName: 'WALLET_RECORD_TYPE',
          orderNum: 0
        },
      },
    AgentLevel: {
        FIRST: {
          keyId: 0,
          keyName: '1级',
          keyEnName: 'FIRST',
          dictId: 1011,
          dictName: '代理等级',
          dictEnName: 'AGENT_LEVEL',
          orderNum: 0
        },
        SECOND: {
          keyId: 1,
          keyName: '2级',
          keyEnName: 'SECOND',
          dictId: 1011,
          dictName: '代理等级',
          dictEnName: 'AGENT_LEVEL',
          orderNum: 0
        },
        THIRD: {
          keyId: 2,
          keyName: '3级',
          keyEnName: 'THIRD',
          dictId: 1011,
          dictName: '代理等级',
          dictEnName: 'AGENT_LEVEL',
          orderNum: 0
        },
      },
}