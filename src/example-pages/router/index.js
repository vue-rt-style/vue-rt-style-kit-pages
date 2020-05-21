const index = [

  { path: "/typography", name: "app-typography", component: () => import("../components/main/Typography.vue") },
  { path: "/colors", name: "app-colors", component: () => import("../components/main/colors/ColorsList.vue") },
  { path: "/space", name: "app-grid", component: () => import("../components/main/SpaceClassElements.vue") },
  { path: "/grid", name: "app-grid", component: () => import("../components/main/Grid.vue") },
  { path: "/grid_component", name: "grid component", component: () => import("../components/main/GridComponent.vue") },

  // form
  { path: "/buttons", name: "app-buttons", component: () => import("../components/form/Buttons.vue") },
  { path: "/input", name: "app-input", component: () => import("../components/form/Input.vue") },
  { path: "/textarea", name: "app-textarea", component: () => import("../components/form/Textarea.vue") },
  { path: "/checkbox", name: "app-checkbox", component: () => import("../components/form/Checkbox.vue") },
  { path: "/radiobutton", name: "app-radiobutton", component: () => import("../components/form/Radiobutton.vue") },
  { path: "/switch", name: "app-switch", component: () => import("../components/form/Switch.vue") },
  { path: "/select", name: "app-select", component: () => import("../components/form/Select.vue") },
  { path: "/tags", name: "app-tags", component: () => import("../components/form/Tags.vue") },

  // simple
  { path: "/logo", name: "app-logo", component: () => import("../components/simple/Logo.vue") },
  { path: "/icons", name: "app-icons", component: () => import("../components/simple/Icons.vue") },
  { path: "/spinner", name: "app-spinner", component: () => import("../components/simple/Spinner.vue") },
  { path: "/popup", name: "realPopup", component: () => import("../components/simple/Popup.vue") },
  { path: "/opacity", name: "app-opacity", component: () => import("../components/simple/OpacityClassElements.vue") },
  { path: "/color-line-text", name: "app-color-line-text", component: () => import("../components/simple/ColorLineText.vue") },
  { path: "/sticky-header-line", name: "Sticky Header Line", component: () => import("../components/simple/StickyHeaderLine.vue") },
  { path: "/sticky-bottom-line", name: "Sticky Bottom Line", component: () => import("../components/simple/StickyBottomLine.vue") },
  { path: "/ussd", name: "app-ussd", component: () => import("../components/simple/Ussd.vue") },
  { path: "/inline-dropdown", name: "app-inline-dropdown", component: () => import("../components/simple/InlineDropdown.vue") },
  { path: "/price", name: "app-price", component: () => import("../components/simple/Price.vue") },
  { path: "/checkbox-tabs", name: "app-checkbox-tabs", component: () => import("../components/simple/CheckboxTabs.vue") },
  { path: "/fullscreen", name: "app-fullscreen", component: () => import("../components/simple/FullscreenImage.vue") },
  { path: "/download-content", name: "app-download-content", component: () => import("../components/simple/DownloadContent.vue") },
  { path: "/use-case", name: "useCase", component: () => import("../components/simple/UseCase.vue") },
  { path: "/slide-content", name: "app-slide-content", component: () => import("../components/simple/SlideContent.vue") },

  // group
  { path: "/list", name: "app-list", component: () => import("../components/group/List.vue") },
  { path: "/table", name: "app-table", component: () => import("../components/group/Table.vue") },
  { path: "/annotation", name: "app-annotation", component: () => import("../components/group/Annotation.vue") },
  { path: "/row-list", name: "app-row-list", component: () => import("../components/group/RowList.vue") },
  { path: "/options-list", name: "app-row-list", component: () => import("../components/group/OptionsList.vue") },
  { path: "/tabs", name: "app-banners", component: () => import("../components/group/Tabs.vue") },
  { path: "/scroll-tabs", name: "app-scrollTabs", component: () => import("../components/group/ScrollTabs.vue") },
  { path: "/benefit", name: "benefit", component: () => import("../components/group/BenefitBlock.vue") },

  // complex
  { path: "/cards", name: "app-cards", component: () => import("../components/complex/Cards.vue") },
  { path: "/product-cards", name: "app-product-card", component: () => import("../components/complex/ProductCard.vue") },
  { path: "/tariff-cards", name: "app-tariff-card", component: () => import("../components/complex/TariffCard.vue") },
  { path: "/cards-with-forms", name: "app-cards", component: () => import("../components/complex/CardsWithForms.vue") },
  { path: "/banners", name: "app-banners", component: () => import("../components/complex/Banners.vue") },
  { path: "/carousels", name: "app-carousels", component: () => import("../components/complex/Carousels.vue") },
  { path: "/gallery-carousel", name: "gallary-carousel", component: () => import("../components/complex/GallaryCarousel.vue") },
  { path: "/swiper", name: "swiper", component: () => import("../components/complex/Swiper.vue") },
  { path: "/youtube", name: "app-youtube", component: () => import("../components/complex/Youtube.vue") },
  { path: "/filter", name: "app-filter", component: () => import("../components/complex/Filter.vue") },

  // pages
  { path: "/game-arrows", name: "AppGameArrows", component: () => import("../components/pages/GameArrows.vue") },
  { path: "/promo/tv", name: "promoTv", component: () => import("../components/pages/promo/tv.vue") },
  // { path: '/promo/game', name: 'promoGame', component: PromoGame },
  { path: "/promo/vip", name: "vip", component: () => import("../components/pages/promo/vip.vue") },
  { path: "/promo/test-access", name: "testAccess", component: () => import("../components/pages/promo/test-access.vue") },
  { path: "/promo/vcod", name: "VCOD", component: () => import("../components/pages/promo/VCOD.vue") },
  { path: "/promo/business-drive", name: "business-drive", component: () => import("../components/pages/promo/business-drive.vue") },
  { path: "/opportunity", name: "opportunity", component: () => import("../components/pages/Opportunity.vue") },
  { path: "/help-main", name: "helpMain", component: () => import("../components/pages/HelpMain.vue") },
  { path: "/unwrapper", name: "unWrapper", component: () => import("../components/pages/UnWrapper.vue") },
  { path: "/tariff-cards2", name: "app-tariff-card", component: () => import("../components/complex/TariffCard2.vue") },
  { path: "/tariff-cards3", name: "app-tariff-card", component: () => import("../components/complex/TariffCard3.vue") },
  // { path: "/promo/tvtv", name: "promoTv", component: PromoTvTV },
  // { path: "/promo/mobile", name: "promoMobile", component: PromoMobile },
  // { path: "/promo/smart-house", name: "smartHouse", component: smartHouse },
  // // { path: '/promo/game-warface', name: 'warFace', component: WarFace },
  // { path: "/promo/kids", name: "kids", component: Kids },
  // { path: "/promo/lp", name: "lp", component: PromoLp },
  // // { path: '/promo/forgame', name: 'forGame', component: PromoForgame },
  // { path: "/pattern", name: "pattern", component: Pattern },

  { path: "", name: "default" }
];

export default {
  routes: index
};
