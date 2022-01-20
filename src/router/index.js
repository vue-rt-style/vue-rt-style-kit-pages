const index = [
  {
    path: "/typography",
    name: "app-typography",
    component: () => import("../components/main/Typography.vue"),
  },
  {
    path: "/font",
    name: "app-font",
    component: () => import("../components/main/TypographyNew.vue"),
  },
  {
    path: "/rt-img",
    name: "app-rt-img",
    component: () => import("../components/main/RtImg.vue"),
  },
  {
    path: "/colors",
    name: "app-colors",
    component: () => import("../components/main/colors/ColorsList.vue"),
  },
  {
    path: "/space",
    name: "app-grid",
    component: () => import("../components/main/SpaceClassElements.vue"),
  },
  {
    path: "/space-colorized",
    name: "app-grid",
    component: () => import("../components/main/SpaceColorized.vue"),
  },
  {
    path: "/grid",
    name: "app-grid",
    component: () => import("../components/main/Grid.vue"),
  },
  {
    path: "/grid_component",
    name: "grid component",
    component: () => import("../components/main/GridComponent.vue"),
  },
  {
    path: "/info_icons",
    name: "info icons",
    component: () => import("../components/simple/InfoIcons.vue"),
  },
  {
    path: "/system_icons",
    name: "system icons",
    component: () => import("../components/simple/SystemIcons.vue"),
  },
  {
    path: "/info_icons",
    name: "info icons",
    component: () => import("../components/simple/InfoIcons.vue"),
  },

  // form
  {
    path: "/buttons",
    name: "app-buttons",
    component: () => import("../components/form/Buttons.vue"),
  },
  {
    path: "/input",
    name: "app-input",
    component: () => import("../components/form/Input.vue"),
  },
  {
    path: "/textarea",
    name: "app-textarea",
    component: () => import("../components/form/Textarea.vue"),
  },
  {
    path: "/checkbox",
    name: "app-checkbox",
    component: () => import("../components/form/Checkbox.vue"),
  },
  {
    path: "/radiobutton",
    name: "app-radiobutton",
    component: () => import("../components/form/Radiobutton.vue"),
  },
  {
    path: "/switch",
    name: "app-switch",
    component: () => import("../components/form/Switch.vue"),
  },
  {
    path: "/select",
    name: "app-select",
    component: () => import("../components/form/Select.vue"),
  },
  {
    path: "/calendar",
    name: "app-calendar",
    component: () => import("../components/form/Calendar.vue"),
  },
  {
    path: "/tags",
    name: "app-tags",
    component: () => import("../components/form/Tags.vue"),
  },

  // simple
  {
    path: "/tooltip",
    name: "app-tooltip",
    component: () => import("../components/simple/Tooltip.vue"),
  },
  {
    path: "/logo",
    name: "app-logo",
    component: () => import("../components/simple/Logo.vue"),
  },
  // { path: "/icons", name: "app-icons", component: () => import("../components/simple/Icons.vue") },
  {
    path: "/spinner",
    name: "app-spinner",
    component: () => import("../components/simple/Spinner.vue"),
  },
  {
    path: "/popup",
    name: "realPopup",
    component: () => import("../components/simple/Popup.vue"),
  },
  {
    path: "/popover",
    name: "popover",
    component: () => import("../components/group/Popover.vue"),
  },
  {
    path: "/message-box",
    name: "message-box",
    component: () => import("../components/simple/MessageBox.vue"),
  },
  {
    path: "/opacity",
    name: "app-opacity",
    component: () => import("../components/simple/OpacityClassElements.vue"),
  },
  {
    path: "/color-line-text",
    name: "app-color-line-text",
    component: () => import("../components/simple/ColorLineText.vue"),
  },
  {
    path: "/lines",
    name: "app-lines",
    component: () => import("../components/simple/Lines.vue"),
  },
  {
    path: "/circle_number",
    name: "app-circle-number",
    component: () => import("../components/simple/CircleNumber.vue"),
  },
  {
    path: "/privilege",
    name: "app-privilege",
    component: () => import("../components/complex/Privilege.vue"),
  },
  {
    path: "/sticky-header-line",
    name: "Sticky Header Line",
    component: () => import("../components/simple/StickyHeaderLine.vue"),
  },
  {
    path: "/sticky-bottom-line",
    name: "Sticky Bottom Line",
    component: () => import("../components/simple/StickyBottomLine.vue"),
  },
  {
    path: "/ussd",
    name: "app-ussd",
    component: () => import("../components/simple/Ussd.vue"),
  },
  {
    path: "/price",
    name: "app-price",
    component: () => import("../components/simple/Price.vue"),
  },
  {
    path: "/checkbox-tabs",
    name: "app-checkbox-tabs",
    component: () => import("../components/simple/CheckboxTabs.vue"),
  },
  {
    path: "/download-content",
    name: "app-download-content",
    component: () => import("../components/simple/DownloadContent.vue"),
  },
  {
    path: "/use-case",
    name: "useCase",
    component: () => import("../components/simple/UseCase.vue"),
  },
  {
    path: "/slide-content",
    name: "app-slide-content",
    component: () => import("../components/simple/SlideContent.vue"),
  },

  // group
  {
    path: "/arrow-block",
    name: "arrow-block",
    component: () => import("../components/group/ArrowBlock.vue"),
  },
  {
    path: "/list",
    name: "app-list",
    component: () => import("../components/group/List.vue"),
  },
  {
    path: "/table",
    name: "app-table",
    component: () => import("../components/group/Table.vue"),
  },
  {
    path: "/annotation",
    name: "app-annotation",
    component: () => import("../components/group/Annotation.vue"),
  },
  {
    path: "/carousels",
    name: "app-carousels",
    component: () => import("../components/group/Carousels.vue"),
  },
  {
    path: "/carouselV2",
    name: "app-carousel-v2",
    component: () => import("../components/group/CarouselV2--demo.vue"),
  },
  {
    path: "/row-list",
    name: "app-row-list",
    component: () => import("../components/group/RowList.vue"),
  },
  {
    path: "/options-list",
    name: "app-options-list",
    component: () => import("../components/group/OptionsList.vue"),
  },
  {
    path: "/tabs",
    name: "app-tabs",
    component: () => import("../components/group/Tabs.vue"),
  },
  {
    path: "/tabs-slider",
    name: "app-tabs-slider",
    component: () => import("../components/group/TabsSlider.vue"),
  },
  {
    path: "/scroll-tabs",
    name: "app-scrollTabs",
    component: () => import("../components/group/ScrollTabs.vue"),
  },
  {
    path: "/microtabs",
    name: "app-microtabs",
    component: () => import("../components/group/Microtabs--demo.vue"),
  },
  {
    path: "/benefit",
    name: "benefit",
    component: () => import("../components/group/BenefitBlock.vue"),
  },

  // complex
  {
    path: "/comment-slider",
    name: "app-comment-slider",
    component: () => import("../components/complex/CommentSlider.vue"),
  },
  {
    path: "/help-block",
    name: "app-help-block",
    component: () => import("../components/complex/HelpBlock.vue"),
  },
  {
    path: "/slider",
    name: "app-slider",
    component: () => import("../components/complex/Slider.vue"),
  },
  {
    path: "/cards",
    name: "app-cards",
    component: () => import("../components/complex/Cards.vue"),
  },
  {
    path: "/product-cards",
    name: "app-product-card",
    component: () => import("../components/complex/ProductCard.vue"),
  },
  {
    path: "/tariff-cards",
    name: "tariff-cards",
    component: () => import("../components/complex/TariffCard--demo.vue"),
  },

  {
    path: "/banners",
    name: "app-banners",
    component: () => import("../components/complex/Banners.vue"),
  },
  {
    path: "/ad-banner",
    name: "app-add-banner",
    component: () => import("../components/complex/AdBanners.vue"),
  },
  {
    path: "/preview-banner",
    name: "app-preview-banner",
    component: () => import("../components/complex/PreviewBanners.vue"),
  },
  {
    path: "/jumbotron",
    name: "app-jumbotron",
    component: () => import("../components/complex/Jumbotron.vue"),
  },
  {
    path: "/gallery-carousel",
    name: "gallary-carousel",
    component: () => import("../components/complex/GallaryCarousel.vue"),
  },
  {
    path: "/swiper",
    name: "swiper",
    component: () => import("../components/complex/Swiper.vue"),
  },
  {
    path: "/youtube",
    name: "app-youtube",
    component: () => import("../components/complex/Youtube.vue"),
  },
  {
    path: "/text_image",
    name: "textImage",
    component: () => import("../components/complex/TextImageBlock.vue"),
  },
  {
    path: "/phonenumber__input",
    name: "phoneNumberInput",
    component: () => import("../components/complex/PhoneNumberInput.vue"),
  },

  // pages
  {
    path: "/unwrapper",
    name: "unWrapper",
    component: () => import("../components/pages/UnWrapper.vue"),
  },
  {
    path: "/tariff-cards2",
    name: "app-tariff-card",
    component: () => import("../components/complex/TariffCard2.vue"),
  },
  {
    path: "/tariff-cards3",
    name: "app-tariff-card",
    component: () => import("../components/complex/TariffCard3.vue"),
  },
  {
    path: "/video-banner",
    name: "app-video-banner",
    component: () => import("../components/complex/VideoBanners.vue"),
  },
  {
    path: "/minibanner",
    name: "app-minibanner",
    component: () => import("../components/complex/Minibanner.vue"),
  },

  {
    path: "/tv",
    name: "promoTv",
    component: () => import("../components/pages/tv.vue"),
  },
  {
    path: "/vcod",
    name: "VCOD",
    component: () => import("../components/pages/VCOD.vue"),
  },

  { path: "", name: "default" },
];

export default {
  routes: index
};
