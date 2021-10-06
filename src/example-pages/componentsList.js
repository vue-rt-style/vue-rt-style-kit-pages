// import {
//     Button,
//     Calendar,
//     Checkbox,
//     CheckboxContainer,
//     Input,
//     Price,
//     RadioButton,
//     RadioButtonContainer,
//     Ripple,
//     RippleWihoutJs,
//     Select,
//     SelectOption,
//     SelectV2,
//     SelectV2Option,
//     Switch,
//     SwitchV2,
//     SwitchContainer,
//     Textarea,
//     TextareaStatic,
//     Annotation,
//     AnnotationV2,
//     ColorLineText,
//     Ussd,
//     Spinner,
//     GridRow,
//     GridColumn,
//     Image,
//     Hint,
//     HintBody,
//     Line,
//     CircleNumber,
// } from '@vue-rt-style-kit-atoms-local/index-for-dynamic'
//
// import {
//   ScrollTabs,
//
//   Tabs,
//   CheckboxTabs,
//   TabsNavigationItem,
//   TabsContentItem,
//   Microtabs,
//   MicrotabsContent,
//   MicrotabsNavigation,
//   Card,
//   CardRounded,
//   CardB2o,
//   CardSkeleton,
//   ProductCard,
//   CardBanner,
//   CardBuy,
//   CardHelp,
//   CardImage,
//   Carousel,
//   CarouselSlide,
//   RowList,
//   OptionsList,
//   OptionsListInfoItem,
//   RowListItem,
//   Table,
//   TableHeadItem,
//   TableItem,
//   TableCol,
//   TableRow,
//   DownloadContent,
//   InlineDropdown,
//   InlineDropdownItem,
//   Tag,
//   TagsList,
//   Filter,
//   FilterWatcher,
//   FilterCaller,
//   FilterV2,
//   FilterItemV2,
//   FilterSetterV2,
//   Youtube,
//   Sticky,
//   ResizeContentHeight,
//   MessageBox,
//   SlideContent,
//   SlideContentDottedContent,
//   SlideContentDottedHeader,
//   Popup,
//   Popover,
//   TextImageBlock,
//   LinksBlock,
//   Pattern,
//   Swiper,
//   Slide,
//   UnWrapper,
//   RealPopup,
//   UseCase,
//   BenefitBlock,
//   BenefitItem,
//   ReplacementLink,
//   CardCarousel,
//   Banner,
//   BannerItem,
//   BannerPaginatorItem,
//   BannerV2,
//   BannerItemV2,
//   CountdownTimer,
//   StickyBottomLine,
//   StickyHeaderLine,
//   Slider,
//   SliderItem,
//   HelpBlock,
//   PhoneNumberInput,
//   Jumbotron,
//   CarouselV2,
//   CarouselSlideV2,
//   PreviewBanner,
//   ShowOn,
//   CardTileLayout,
//   CommentSlider,
//   CommentSliderItem,
//   VideoBanner,
//   CarouselV3,
//   CarouselV3Item,
//   Privilege,
//   Minibanner,
//   ArrowBlock,
//   TabsSlider,
//   TabsSliderItem,
// } from '@vue-rt-style-kit-molecules-local/components'
import {
  PopupTriggerDirective,
  ResizeContentHeightDirective,
} from '@vue-rt-style-kit-molecules-local'

// import {
//   Logo,
//
//   LogoCoBranding,
//   Icon,
//   ValidationIcon
// } from '@vue-rt-style-kit-icons-local/components'

import AppMenu from "./components/AppMenu.vue";
//
const componentsList = {};
const addToComponentList = (possibleComponent)=>{
  if(possibleComponent?.name){
    componentsList[possibleComponent.name] = possibleComponent
  }
}


export const getAllDynamic = (possibleComponentArray, AppVue)=>{
  Object.keys(possibleComponentArray).forEach((key)=>{
    if(key && possibleComponentArray[key]){
      const possibleComponent = possibleComponentArray[key];
      if(possibleComponent) {
        AppVue.component(key, possibleComponent)
        // AppVue.use(possibleComponent)
      }
    }
  })
  
}
export const getAllDirectivesDynamic = (possibleComponentArray, AppVue)=>{
  Object.keys(possibleComponentArray).forEach((key)=>{
    if(key && possibleComponentArray[key]){
      const possibleComponent = possibleComponentArray[key];
      if(possibleComponent) {
        AppVue.directive(possibleComponent.name, possibleComponent)
        // AppVue.use(possibleComponent)
      }
    }
  })
  
}


// getAllDynamic

// addToComponentList(TextImageBlock)
// addToComponentList(ProductCard)
// addToComponentList(ArrowBlock)
// // addToComponentList(GridRow)
// // addToComponentList(Image)
// // addToComponentList(GridColumn)
// // addToComponentList(Button)
// // addToComponentList(Calendar)
// // addToComponentList(Checkbox)
// // addToComponentList(CheckboxContainer)
// // addToComponentList(Input)
// // addToComponentList(Price)
// // addToComponentList(RadioButton)
// // addToComponentList(RadioButtonContainer)
// // addToComponentList(Ripple)
// // addToComponentList(RippleWihoutJs)
// // addToComponentList(Select)
// // addToComponentList(SelectOption)
// // addToComponentList(SelectV2)
// // addToComponentList(SelectV2Option)
// // addToComponentList(Spinner)
// // addToComponentList(Switch)
// // addToComponentList(SwitchV2)
// // addToComponentList(SwitchContainer)
// // addToComponentList(Textarea)
// // addToComponentList(TextareaStatic)
// addToComponentList(ScrollTabs)
// addToComponentList(Tabs)
// addToComponentList(TabsSlider)
// addToComponentList(TabsSliderItem)
// addToComponentList(TabsNavigationItem)
// addToComponentList(TabsContentItem)
// addToComponentList(Microtabs)
// addToComponentList(MicrotabsNavigation)
// addToComponentList(MicrotabsContent)
// // addToComponentList(Annotation)
// // addToComponentList(AnnotationV2)
// // addToComponentList(ColorLineText)
// addToComponentList(OptionsList)
// addToComponentList(OptionsListInfoItem)
// addToComponentList(BannerV2)
// addToComponentList(BannerItemV2)
// addToComponentList(Banner)
// addToComponentList(BannerItem)
// addToComponentList(BannerPaginatorItem)
// addToComponentList(Carousel)
// addToComponentList(CarouselSlide)
// addToComponentList(Card)
// addToComponentList(CardRounded)
// addToComponentList(CardB2o)
// addToComponentList(CardBanner)
// addToComponentList(CardBuy)
// addToComponentList(CardHelp)
// addToComponentList(ResizeContentHeightDirective)
// addToComponentList(CardImage)
// addToComponentList(ShowOn)
// addToComponentList(CardSkeleton)
// addToComponentList(RowList)
// addToComponentList(RowListItem)
// addToComponentList(Table)
// addToComponentList(TableHeadItem)
// addToComponentList(TableRow)
// addToComponentList(TableItem)
// addToComponentList(TableCol)
// addToComponentList(DownloadContent)
// addToComponentList(HelpBlock)
// addToComponentList(Tag)
// addToComponentList(TagsList)
// addToComponentList(Filter)
// addToComponentList(FilterWatcher)
// addToComponentList(FilterCaller)
// addToComponentList(FilterV2)
// addToComponentList(Minibanner)
// addToComponentList(FilterItemV2)
// addToComponentList(FilterSetterV2)
// addToComponentList(Youtube)
// addToComponentList(Sticky)
// addToComponentList(ResizeContentHeight)
// addToComponentList(Privilege)
// addToComponentList(Popover)
// // addToComponentList(Line)
// addToComponentList(Popup)
// addToComponentList(PopupTriggerDirective)
// addToComponentList(SlideContent);
// addToComponentList(SlideContentDottedContent);
// addToComponentList(SlideContentDottedHeader);
addToComponentList(AppMenu);
// // addToComponentList(Icon);
// // addToComponentList(LogoCoBranding);
// // addToComponentList(ValidationIcon);
// addToComponentList(Pattern);
// // addToComponentList(Logo.component);
// addToComponentList(Swiper);
// addToComponentList(Slide);
// addToComponentList(UnWrapper);
// addToComponentList(RealPopup);
// addToComponentList(UseCase);
// addToComponentList(BenefitBlock);
// addToComponentList(BenefitItem);
// // addToComponentList(CircleNumber);
// addToComponentList(ReplacementLink);
// addToComponentList(CardCarousel);
// // addToComponentList(Ussd);
// addToComponentList(CheckboxTabs);
// addToComponentList(CountdownTimer);
// addToComponentList(StickyBottomLine);
// addToComponentList(StickyHeaderLine);
// addToComponentList(PhoneNumberInput);
// addToComponentList(CarouselV2);
// addToComponentList(CarouselSlideV2);
// addToComponentList(MessageBox);
// // addToComponentList(VideoPlayer);
// addToComponentList(Slider);
// addToComponentList(PreviewBanner);
// addToComponentList(SliderItem);
// addToComponentList(LinksBlock);
// addToComponentList(CommentSlider);
// addToComponentList(CommentSliderItem);
// addToComponentList(Jumbotron);
// addToComponentList(CardTileLayout);
// addToComponentList(VideoBanner);
// addToComponentList(CarouselV3);
// addToComponentList(CarouselV3Item);
// // componentsList[PreComponent.name] = PreComponent;
// // componentsList[PreComponentEditor.name] = PreComponentEditor;
// // componentsList[DocumentationBuilder.name] = DocumentationBuilder;

export default {...componentsList};
