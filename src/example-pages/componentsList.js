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
  PopupTrigger,
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
  AdBanner,
  PreviewBanner
  
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
const addToComponentList = (possibleComponent)=>{
  if(possibleComponent?.name){
    componentsList[possibleComponent.name] = possibleComponent
  }
}
addToComponentList(GridRow)
addToComponentList(Image)
addToComponentList(GridColumn)
addToComponentList(Button)
addToComponentList(Calendar)
addToComponentList(Checkbox)
addToComponentList(CheckboxContainer)
addToComponentList(Input)
addToComponentList(Price)
addToComponentList(RadioButton)
addToComponentList(RadioButtonContainer)
addToComponentList(Ripple)
addToComponentList(RippleWihoutJs)
addToComponentList(Select)
addToComponentList(SelectOption)
addToComponentList(SelectV2)
addToComponentList(SelectV2Option)
addToComponentList(Spinner)
addToComponentList(Switch)
addToComponentList(SwitchContainer)
addToComponentList(Textarea)
addToComponentList(TextareaStatic)
addToComponentList(ScrollTabs)
addToComponentList(Tabs)
addToComponentList(TabsSlider)
addToComponentList(TabsSliderItem)
addToComponentList(TabsNavigationItem)
addToComponentList(TabsContentItem)
addToComponentList(Microtabs)
addToComponentList(MicrotabsNavigation)
addToComponentList(MicrotabsContent)
addToComponentList(Annotation)
addToComponentList(ColorLineText)
addToComponentList(BannerV2)
addToComponentList(BannerItemV2)
addToComponentList(Banner)
addToComponentList(BannerItem)
addToComponentList(BannerPaginatorItem)
addToComponentList(Carousel)
addToComponentList(CarouselSlide)
addToComponentList(Card)
addToComponentList(CardRounded)
addToComponentList(CardB2o)
addToComponentList(CardBuy)
addToComponentList(CardImage)
addToComponentList(CardImageList)
addToComponentList(CardSkeleton)
addToComponentList(FullscreenImage)
addToComponentList(RowList)
addToComponentList(RowListItem)
addToComponentList(Table)
addToComponentList(TableHeadItem)
addToComponentList(TableRow)
addToComponentList(TableItem)
addToComponentList(TableCol)
addToComponentList(DownloadContent)
addToComponentList(HelpBlock)
addToComponentList(Tag)
addToComponentList(TagsList)
addToComponentList(Filter)
addToComponentList(FilterWatcher)
addToComponentList(FilterCaller)
addToComponentList(FilterV2)
addToComponentList(FilterItemV2)
addToComponentList(FilterSetterV2)
addToComponentList(Youtube)
addToComponentList(Sticky)
addToComponentList(ResizeContentHeight)
addToComponentList(Popup)
addToComponentList(PopupTrigger)
addToComponentList(SlideContent);
addToComponentList(SlideContentDottedContent);
addToComponentList(SlideContentDottedHeader);
addToComponentList(AppMenu);
addToComponentList(Icon);
addToComponentList(LogoCoBranding);
addToComponentList(ValidationIcon);
addToComponentList(Pattern);
addToComponentList(Logo.component);
addToComponentList(Swiper);
addToComponentList(Slide);
addToComponentList(Opportunity);
addToComponentList(OpportunityItem);
addToComponentList(UnWrapper);
addToComponentList(RealPopup);
addToComponentList(UseCase);
addToComponentList(BenefitBlock);
addToComponentList(BenefitItem);
addToComponentList(PortraitTile);
addToComponentList(PortraitTileItem);
addToComponentList(Timeline);
addToComponentList(TimelineItem);
addToComponentList(ScrollBar);
addToComponentList(VerticalScrollBar);
addToComponentList(ReplacementLink);
addToComponentList(CardCarousel);
addToComponentList(CardLayout);
addToComponentList(Ussd);
addToComponentList(GalleryCarousel);
addToComponentList(GalleryCarouselItem);
addToComponentList(CheckboxTabs);
addToComponentList(CountdownTimer);
addToComponentList(StickyBottomLine);
addToComponentList(StickyHeaderLine);
addToComponentList(PhoneNumberInput);
addToComponentList(CarouselV2);
addToComponentList(CarouselSlideV2);
// addToComponentList(VideoPlayer);

addToComponentList(Slider);
addToComponentList(AdBanner);
addToComponentList(PreviewBanner);
addToComponentList(SliderItem);

addToComponentList(Jumbotron);


if (ACArchiveComponent) {
  addToComponentList(ACArchiveComponent);
}
if (ACConfirmationPopup) {
  addToComponentList(ACConfirmationPopup);
}
if (ACCreationPopup) {
  addToComponentList(ACCreationPopup);
}
if (ACFooter) {
  addToComponentList(ACFooter);
}
if (ACHeader) {
  addToComponentList(ACHeader);
}
if (ACInvitationPopup) {
  addToComponentList(ACInvitationPopup);
}
if (ACListComponent) {
  addToComponentList(ACListComponent);
}
if (ACManagePopup) {
  addToComponentList(ACManagePopup);
}
if (ACPhonebookComponent) {
  addToComponentList(ACPhonebookComponent);
}
if (ACSettingsPopup) {
  addToComponentList(ACSettingsPopup);
}
if (ACEditPopup) {
  addToComponentList(ACEditPopup);
}
if (ACPaginator) {
  addToComponentList(ACPaginator);
}
if (ACDatePicker) {
  addToComponentList(ACDatePicker);
}


// componentsList[PreComponent.name] = PreComponent;
// componentsList[PreComponentEditor.name] = PreComponentEditor;
// componentsList[DocumentationBuilder.name] = DocumentationBuilder;
export default {...componentsList};
