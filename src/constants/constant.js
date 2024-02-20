const API_URL = process.env.APP_API;

export const ACTION_ROUTES = {
    HomeAPI:`${API_URL}/home`,
    BlogListAPI:`${API_URL}/blogs`,
    BlogDetailsAPI:`${API_URL}/blogs/details/`,
    BlogSearch:`${API_URL}/blogs/search`,
    FaqAPI:`${API_URL}/faqs`,
    FaqDetailsAPI:`${API_URL}/faqs_details`,
    HomeContactAPI:`${API_URL}/home/help`,
    GeneralAPI:`${API_URL}/home/general_data`,
    PricingAPI:`${API_URL}/plan`,
    PrivacyAPI:`${API_URL}/information/privacy`,
    TermsAPI:`${API_URL}/information/terms`,
};