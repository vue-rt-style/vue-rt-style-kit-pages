import {
  Button,
  Calendar,
  Checkbox,
  CheckboxContainer,
  Input,
  Price,
  RadioButton,
  RadioButtonContainer,
  Ripple,
  RippleWihoutJs,
  Select,
  SelectOption,
  SelectV2,
  SelectV2Option,
  Switch,
  SwitchContainer,
  Textarea,
  TextareaStatic,
  Annotation,
  ColorLineText,
  Ussd,
  Spinner,
  GridRow,
  GridColumn,
  Image,
  Hint,
  HintBody,
} from '@vue-rt-style-kit-atoms-local'


import {
  ScrollTabs,
  TabsSlider,
  TabsSliderItem,
  Tabs,
  CheckboxTabs,
  TabsNavigationItem,
  TabsContentItem,
  Microtabs,
  MicrotabsContent,
  MicrotabsNavigation,
  Card,
  CardRounded,
  CardB2o,
  CardSkeleton,
  ProductCard,
  TariffCard,
  CardBuy,
  CardImage,
  CardImageList,
  Carousel,
  CarouselSlide,
  FullscreenImage,
  RowList,
  OptionsList,
  OptionsListInfoItem,
  RowListItem,
  Table,
  TableHeadItem,
  TableItem,
  TableCol,
  TableRow,
  DownloadContent,
  InlineDropdown,
  InlineDropdownItem,
  Tag,
  TagsList,
  Filter,
  FilterWatcher,
  FilterCaller,
  FilterV2,
  FilterItemV2,
  FilterSetterV2,
  Youtube,
  Sticky,
  ResizeContentHeight,
  SlideContent,
  SlideContentDottedContent,
  SlideContentDottedHeader,
  Popup,
  LinksBlock,
  Pattern,
  Swiper,
  Slide,
  Opportunity,
  OpportunityItem,
  UnWrapper,
  RealPopup,
  UseCase,
  BenefitBlock,
  BenefitItem,
  PortraitTile,
  Timeline,
  ScrollBar,
  VerticalScrollBar,
  TimelineItem,
  PortraitTileItem,
  ReplacementLink,
  CardCarousel,
  CardLayout,
  GameArrow,
  Banner,
  BannerItem,
  BannerVideoGameControl,
  BannerPaginatorItem,
  BannerV2,
  BannerItemV2,
  GalleryCarousel,
  GalleryCarouselItem,
  CountdownTimer,
  StickyBottomLine,
  StickyHeaderLine,
  Slider,
  SliderItem,
  HelpBlock,
  PhoneNumberInput,
  Jumbotron,
  CarouselV2,
  CarouselSlideV2,
  AdBanner
  
} from '@vue-rt-style-kit-molecules-local'


import {
  ACArchiveComponent,
  ACConfirmationPopup,
  ACCreationPopup,
  ACFooter,
  ACHeader,
  ACInvitationPopup,
  ACListComponent,
  ACManagePopup,
  ACPhonebookComponent,
  ACSettingsPopup,
  ACEditPopup,
  ACPaginator,
  ACDatePicker
} from '@vue-rt-style-kit-aks-local'


import {
  Logo,
  LogoCoBranding,
  Icon,
  ValidationIcon
} from '@vue-rt-style-kit-icons-local'

import AppMenu from "./components/AppMenu.vue";

const componentsList = {};
componentsList[GridRow.name] = GridRow;
componentsList[Image.name] = Image;
componentsList[GridColumn.name] = GridColumn;
componentsList[Button.name] = Button;
componentsList[Calendar.name] = Calendar;
componentsList[Checkbox.name] = Checkbox;
componentsList[CheckboxContainer.name] = CheckboxContainer;
componentsList[Input.name] = Input;
componentsList[Price.name] = Price;
componentsList[RadioButton.name] = RadioButton;
componentsList[RadioButtonContainer.name] = RadioButtonContainer;
componentsList[Ripple.name] = Ripple;
componentsList[RippleWihoutJs.name] = RippleWihoutJs;
componentsList[Select.name] = Select;
componentsList[SelectOption.name] = SelectOption;
componentsList[SelectV2.name] = SelectV2;
componentsList[SelectV2Option.name] = SelectV2Option;
componentsList[Spinner.name] = Spinner;
componentsList[Switch.name] = Switch;
componentsList[SwitchContainer.name] = SwitchContainer;
componentsList[Textarea.name] = Textarea;
componentsList[TextareaStatic.name] = TextareaStatic;
componentsList[ScrollTabs.name] = ScrollTabs;
componentsList[Tabs.name] = Tabs;
componentsList[TabsSlider.name] = TabsSlider;
componentsList[TabsSliderItem.name] = TabsSliderItem;
componentsList[TabsNavigationItem.name] = TabsNavigationItem;
componentsList[TabsContentItem.name] = TabsContentItem;
componentsList[Microtabs.name] = Microtabs
componentsList[MicrotabsNavigation.name] = MicrotabsNavigation
componentsList[MicrotabsContent.name] = MicrotabsContent
componentsList[Annotation.name] = Annotation;
componentsList[ColorLineText.name] = ColorLineText;
componentsList[BannerV2.name] = BannerV2;
componentsList[BannerItemV2.name] = BannerItemV2;
componentsList[Banner.name] = Banner;
componentsList[BannerItem.name] = BannerItem;
componentsList[BannerPaginatorItem.name] = BannerPaginatorItem;
componentsList[Carousel.name] = Carousel;
componentsList[CarouselSlide.name] = CarouselSlide;
componentsList[Card.name] = Card;
componentsList[CardRounded.name] = CardRounded;
componentsList[CardB2o.name] = CardB2o;
componentsList[CardBuy.name] = CardBuy;
componentsList[CardImage.name] = CardImage;
componentsList[CardImageList.name] = CardImageList;
componentsList[CardSkeleton.name] = CardSkeleton;
componentsList[FullscreenImage.name] = FullscreenImage;
componentsList[RowList.name] = RowList;
componentsList[RowListItem.name] = RowListItem;
componentsList[Table.name] = Table;
componentsList[TableHeadItem.name] = TableHeadItem;
componentsList[TableRow.name] = TableRow;
componentsList[TableItem.name] = TableItem;
componentsList[TableCol.name] = TableCol;
componentsList[DownloadContent.name] = DownloadContent;
componentsList[HelpBlock.name] = HelpBlock;
componentsList[Tag.name] = Tag;
componentsList[TagsList.name] = TagsList;
componentsList[Filter.name] = Filter;
componentsList[FilterWatcher.name] = FilterWatcher;
componentsList[FilterCaller.name] = FilterCaller;
componentsList[FilterV2.name] = FilterV2;
componentsList[FilterItemV2.name] = FilterItemV2;
componentsList[FilterSetterV2.name] = FilterSetterV2;
componentsList[Youtube.name] = Youtube;
componentsList[Sticky.name] = Sticky;
componentsList[ResizeContentHeight.name] = ResizeContentHeight;
componentsList[Popup.name] = Popup;
componentsList[SlideContent.name] = SlideContent;
componentsList[SlideContentDottedContent.name] = SlideContentDottedContent;
componentsList[SlideContentDottedHeader.name] = SlideContentDottedHeader;
componentsList[AppMenu.name] = AppMenu;
componentsList[Icon.name] = Icon;
componentsList[LogoCoBranding.name] = LogoCoBranding;
componentsList[ValidationIcon.name] = ValidationIcon;
componentsList[Pattern.name] = Pattern;
componentsList[Logo.name] = Logo.component;
componentsList[Swiper.name] = Swiper;
componentsList[Slide.name] = Slide;
componentsList[Opportunity.name] = Opportunity;
componentsList[OpportunityItem.name] = OpportunityItem;
componentsList[UnWrapper.name] = UnWrapper;
componentsList[RealPopup.name] = RealPopup;
componentsList[UseCase.name] = UseCase;
componentsList[BenefitBlock.name] = BenefitBlock;
componentsList[BenefitItem.name] = BenefitItem;
componentsList[PortraitTile.name] = PortraitTile;
componentsList[PortraitTileItem.name] = PortraitTileItem;
componentsList[Timeline.name] = Timeline;
componentsList[TimelineItem.name] = TimelineItem;
componentsList[ScrollBar.name] = ScrollBar;
componentsList[VerticalScrollBar.name] = VerticalScrollBar;
componentsList[ReplacementLink.name] = ReplacementLink;
componentsList[CardCarousel.name] = CardCarousel;
componentsList[CardLayout.name] = CardLayout;
componentsList[Ussd.name] = Ussd;
componentsList[GalleryCarousel.name] = GalleryCarousel;
componentsList[GalleryCarouselItem.name] = GalleryCarouselItem;

componentsList[CheckboxTabs.name] = CheckboxTabs;
componentsList[CountdownTimer.name] = CountdownTimer;
componentsList[StickyBottomLine.name] = StickyBottomLine;
componentsList[StickyHeaderLine.name] = StickyHeaderLine;
componentsList[PhoneNumberInput.name] = PhoneNumberInput;
componentsList[CarouselV2.name] = CarouselV2;
componentsList[CarouselSlideV2.name] = CarouselSlideV2;
// componentsList[VideoPlayer.name] = VideoPlayer;

componentsList[Slider.name] = Slider;
componentsList[AdBanner.name] = AdBanner;
componentsList[SliderItem.name] = SliderItem;

componentsList[Jumbotron.name] = Jumbotron;


if (ACArchiveComponent) {
  componentsList[ACArchiveComponent.name] = ACArchiveComponent;
}
if (ACConfirmationPopup) {
  componentsList[ACConfirmationPopup.name] = ACConfirmationPopup;
}
if (ACCreationPopup) {
  componentsList[ACCreationPopup.name] = ACCreationPopup;
}
if (ACFooter) {
  componentsList[ACFooter.name] = ACFooter;
}
if (ACHeader) {
  componentsList[ACHeader.name] = ACHeader;
}
if (ACInvitationPopup) {
  componentsList[ACInvitationPopup.name] = ACInvitationPopup;
}
if (ACListComponent) {
  componentsList[ACListComponent.name] = ACListComponent;
}
if (ACManagePopup) {
  componentsList[ACManagePopup.name] = ACManagePopup;
}
if (ACPhonebookComponent) {
  componentsList[ACPhonebookComponent.name] = ACPhonebookComponent;
}
if (ACSettingsPopup) {
  componentsList[ACSettingsPopup.name] = ACSettingsPopup;
}
if (ACEditPopup) {
  componentsList[ACEditPopup.name] = ACEditPopup;
}
if (ACPaginator) {
  componentsList[ACPaginator.name] = ACPaginator;
}
if (ACDatePicker) {
  componentsList[ACDatePicker.name] = ACDatePicker;
}


// componentsList[PreComponent.name] = PreComponent;
// componentsList[PreComponentEditor.name] = PreComponentEditor;
// componentsList[DocumentationBuilder.name] = DocumentationBuilder;
export default {...componentsList};
