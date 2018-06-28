/**
 * Created by Administrator on 2017/8/30.
 */
module.exports = {

    //登录
    LOGIN:'/login',
    /********************首页********************/
    MAIN:'/',
    /********************注册********************/
    //注册
    REGISTER_MAIN_ACCOUNT:'/register/main/account',

    //注册状态
    REGISTER_VERIFY_STATE:'/register/main/state',

    //认证类型
    REGISTER_VERIFY_TYPE:'/register/main/verify_type',
    //个人认证
    REGISTER_VERIFY_PERSONAL:'/register/main/verify_personal',
    //企业认证
    REGISTER_VERIFY_COMPANY:'/register/main/verify_company',

    //查看个人认证状态
    REGISTER_VERIFY_INFO:'/register/main/verify_info',

    //申请卖家
    REGISTER_SELLER_APPLY_ADD:'/register/main/seller_apply/add',
    //申请卖家状态
    REGISTER_SELLER_APPLY_STATE:'/register/main/seller_apply/state',
    //申请个人卖家
    REGISTER_SELLER_APPLY_PERSONAL:'/register/main/seller_apply/personal',
    //申请企业卖家
    REGISTER_SELLER_APPLY_COMPANY:'/register/main/seller_apply/company',

    //忘记密码
    REGISTER_FORGOT_PASSWORD:'/register/main/forget_password',
    //纱行者申请流程页
    REGISTER_FINANCE_PROCESS: '/register/main/finance_process',
    //订单状态提交展示
    REGISTER_ORDER_STATE: '/register/main/order_state',
    //支付信息展示
    REGISTER_WXPAY_STATE: '/register/main/wxpay_state',
    //小样
    REGISTER_SAMPLE_STATE: '/register/main/sample_state',

    /********************商品********************/
    //买好e纱
    GOODS_LIST:'/main/goods',
    //商品详情
    GOODS_DETAILS: '/main/goods/details',

    /********************新闻公告********************/
    //新闻公告
    NES_LIST:'/news/main/list',
    //新闻详情
    NES_DETAIL:'/news/main/detail',

    /********************买家-个人中心********************/
    //个人中心
    PERSONAL_CENTER:'/main/purchaser_center',
    //我的个人中心
    PERSONAL_CENTER_MINE:'/main/purchaser_center/mine',
    //账户信息
    PERSONAL_CENTER_ACCOUNT_INFO:'/main/purchaser_center/account_info',
    //修改密码
    PERSONAL_CENTER_CHANGE_PASSWORD:'/main/purchaser_center/change_password',
    //实名认证-认证状态
    PERSONAL_CENTER_VERIFY:'/main/purchaser_center/verify_state',
    //实名验证-打款验证
    PERSONAL_CENTER_CASH_VERIFY: '/main/purchaser_center/cash_verify',
    //实名认证（企业）-重新认证
    PERSONAL_CENTER_RESET_ACCOUNT: '/main/purchaser_center/reset_account',
    //买家中心-买入订单
    PERSONAL_CENTER_PURCHASE_ORDER: '/main/purchaser_center/purchase_order',
    //买家中心-收货地址
    PERSONAL_CENTER_SHIPPING_ADDR: '/main/purchaser_center/shipping_address',
    //买家-大货版毛-订单详情页
    ORDER_PURCHASE: '/main/order_purchase',
    //买家中心-小样
    PERSONAL_CENTER_MY_SAMPLE: '/main/purchaser_center/my_sample',


    /********************纱行金融********************/
    FINANCE_MAIN: '/main/finance',

    /********************卖家-个人中心********************/
    //卖家中心
    SELLER_CENTER: '/main/seller_center',
    SELLER_CENTER_MINE: '/main/seller_center/my_center',
    //卖出订单
    SELLER_CENTER_ORDER: '/main/seller_center/order',
    //发布管理
    SELLER_CENTER_RELEASE: '/main/seller_center/release',
    //发布管理
    SELLER_CENTER_RELEASE_ADD: '/main/seller_center/release/add',
    //发布编辑
    SELLER_CENTER_RELEASE_EDITOR: '/main/seller_center/release/editor',
    //小样供应
    SELLER_CENTER_SAMPLE_SUPPLY: '/main/seller_center/sample_supply',
    //仓库管理
    SELLER_CENTER_WAREHOUSE_MANAGEMENT: '/main/seller_center/address',
    //账户信息
    SELLER_CENTER_ACCOUNT_INFO: '/main/seller_center/account_info',
    //实名认证
    SELLER_CENTER_AUTH: '/main/seller_center/authentication',
    //卖家信息
    SELLER_CENTER_SELLER_VERIFY: '/main/seller_center/info',
    //卖家-大货版毛-订单详情页
    ORDER_SELL: '/main/order_sell',

    /********************品牌入驻********************/
    //列表
    BRAND_LIST: '/main/brand',
    //详情
    BRAND_DETAIL: '/main/brand/detail',
     /********************关于我们********************/
    ABOUT_US:'/main/about_us',

    /********************e签宝********************/
    ESIGN: '/main/e_sign',

    /*******************新手引导*******************/
    NOVICE_BOOT: '/main/novice_boot',
    //账户注册
    NOVICE_BOOT_REGISTER: '/main/novice_boot/register',
    //账户登录
    NOVICE_BOOT_LOGIN: '/main/novice_boot/login',
    //个人实名认证
    NOVICE_BOOT_VERIFY_PERSONAL: '/main/novice_boot/verify_personal',
    //企业实名认证
    NOVICE_BOOT_VERIFY_COMPANY: '/main/novice_boot/verify_company',
    //申请成为卖家
    NOVICE_BOOT_TO_SELLER: '/main/novice_boot/to_seller',
    //发布供货
    NOVICE_BOOT_RELEASE_SUPPLY: '/main/novice_boot/release_supply',
    //全额支付
    NOVICE_BOOT_FULL_PAYMENT: '/main/novice_boot/full_payment',
    //签单支付
    NOVICE_BOOT_INSTALLMENT: '/main/novice_boot/installment',
    //购买版毛
    NOVICE_BOOT_PURCHASE_WOOL: '/main/novice_boot/purchase_wool',
    //领取小样
    NOVICE_BOOT_SAMPLE_COLLECTION: '/main/novice_boot/sample_collection',

    /********************推广活动********************/
    ACT_LIST: '/act/main/list',
}
