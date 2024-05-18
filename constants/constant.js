const API_URL = process.env.APP_API;

export const ACTION_ROUTES = {
    LoginAPI:`${API_URL}/auth/login`,
    RegisterAPI:`${API_URL}/auth/sign-up`,
    ForgotAPI:`${API_URL}/auth/forgot-password`,
    ChangePasswordAPI:`${API_URL}/auth/new-password`,
    UpdateProfileAPI:`${API_URL}/auth/update-profile`,
    GetProfileInfoAPI:`${API_URL}/profile`,
    ContactUsAPI:`${API_URL}/store/contact`,
    GetFaqAPI:`${API_URL}/home/faq-list`,
    WalletLoginAPI:`${API_URL}/auth/wallet-login`,
    SubScribeAPI:`${API_URL}/profile/subscribe`,
    TransectionAPI:`${API_URL}/profile/payment-transactions`,
    UserWalletAPI:`${API_URL}/profile/wallets`,
    TopCreatorsAPI:`${API_URL}/home/top-creators`,
    GetUserFollowingAPI:`${API_URL}/home/following`,
    GetUserFollowerAPI:`${API_URL}/home/followers`,
    AddwalletAPI:`${API_URL}/profile/add-wallet`,
    OtherProfileAPI:`${API_URL}/profile/other-profile`,
    FollowUserAPI:`${API_URL}/home/follow`,
    UnFollowUserAPI:`${API_URL}/home/unfollow`,
    NotificationAPI:`${API_URL}/profile/notifications`,
    NotificationUpdateAPI:`${API_URL}/profile/notification-update`,
    PricingAPI:`${API_URL}/home/plan-list`,
    FooterSocialAPI:`${API_URL}/home/social`,
    communitySocialAPI:`${API_URL}/home/community`,
    PrivacyAPI:`${API_URL}/home/privacy`,
    imprintAPI:`${API_URL}/home/imprint`,
    currencyAPI:`${API_URL}/home/currency`,
    PaymentOrderAPI:`${API_URL}/profile/add-transaction`,
    CheckActivePlanAPI:`${API_URL}/profile/get-active-plan`,
    TickersAPI:`${API_URL}/home/tickers`,
    clearNotificationAPI:`${API_URL}/profile/clear-notifications`,
    resetPasswordAPI:`${API_URL}/profile/reset-password`,
    activeAccountAPI:`${API_URL}/active-account-success`,
    cancelPlanAPI:`${API_URL}/profile/cancel-plan`,
    chainGuardianAPI:`${API_URL}/home/chainguardian`,
    LeaderboardAPI:`${API_URL}/dashboard/stats/leaderboard`,
    fearandgridAPI:`${API_URL}/dashboard/metrics/fear_and_greed`,
};