import {
    Button,
    ButtonRippleWithoutJs,
    ButtonWithoutRipple,
    Checkbox,
    CheckboxContainer,
    Input,
    InputWithoutJs,
    Price,
    RadioButton,
    RadioButtonContainer,
    Ripple,
    RippleWihoutJs,
    Select,
    SelectOption,
    SelectWithoutJs,
    Switch,
    SwitchContainer,
    Textarea,
    TextareaStatic,
    Annotation,
    ColorLineText,
    Ussd,
    Spinner
} from '../../../vue-rt-style-kit-atoms/src/index'

import {
    ScrollTabs,
    Tabs,
    CheckboxTabs,
    TabsNavigationItem,
    TabsContentItem,
    Card,
    CardB2o,
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
    Youtube,
    Sticky,
    ResizeContentHeight,
    SlideContent,
    SlideContentDottedContent,
    SlideContentDottedHeader,
    Popup,
    LinksBlock,
    Hint,
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
    GalleryCarousel,
    GalleryCarouselItem,
    CountdownTimer,
    StickyBottomLine
} from 'vue-rt-style-kit-molecules'


import {
    Logo,
    LogoCoBranding,
    Icon,
    ValidationIcon
} from 'vue-rt-style-kit-icons'
import AppMenu from "./components/AppMenu.vue";

const componentsList = {};
componentsList[Button.name] = Button;
componentsList[ButtonRippleWithoutJs.name] = ButtonRippleWithoutJs;
componentsList[ButtonWithoutRipple.name] = ButtonWithoutRipple;
componentsList[Checkbox.name] = Checkbox;
componentsList[CheckboxContainer.name] = CheckboxContainer;
componentsList[Input.name] = Input;
componentsList[InputWithoutJs.name] = InputWithoutJs;
componentsList[Price.name] = Price.component;
componentsList[RadioButton.name] = RadioButton;
componentsList[RadioButtonContainer.name] = RadioButtonContainer;
componentsList[Ripple.name] = Ripple;
componentsList[RippleWihoutJs.name] = RippleWihoutJs;
componentsList[Select.name] = Select;
componentsList[SelectOption.name] = SelectOption;
componentsList[SelectWithoutJs.name] = SelectWithoutJs;
componentsList[Spinner.name] = Spinner;
componentsList[Switch.name] = Switch;
componentsList[SwitchContainer.name] = SwitchContainer;
componentsList[Textarea.name] = Textarea;
componentsList[TextareaStatic.name] = TextareaStatic;
componentsList[ScrollTabs.name] = ScrollTabs.component;
componentsList[Tabs.name] = Tabs;
componentsList[TabsNavigationItem.name] = TabsNavigationItem;
componentsList[TabsContentItem.name] = TabsContentItem;
componentsList[Annotation.name] = Annotation;
componentsList[ColorLineText.name] = ColorLineText;
componentsList[Banner.name] = Banner;
componentsList[BannerItem.name] = BannerItem;
componentsList[BannerPaginatorItem.name] = BannerPaginatorItem;
componentsList[Carousel.name] = Carousel;
componentsList[CarouselSlide.name] = CarouselSlide;
componentsList[Card.name] = Card;
componentsList[CardB2o.name] = CardB2o;
componentsList[CardBuy.name] = CardBuy;
componentsList[CardImage.name] = CardImage;
componentsList[CardImageList.name] = CardImageList;
componentsList[FullscreenImage.name] = FullscreenImage;
componentsList[RowList.name] = RowList;
componentsList[RowListItem.name] = RowListItem;
componentsList[Table.name] = Table;
componentsList[TableHeadItem.name] = TableHeadItem;
componentsList[TableRow.name] = TableRow;
componentsList[TableItem.name] = TableItem;
componentsList[TableCol.name] = TableCol;
componentsList[DownloadContent.name] = DownloadContent;
componentsList[Tag.name] = Tag;
componentsList[TagsList.name] = TagsList;
componentsList[Filter.name] = Filter;
componentsList[FilterWatcher.name] = FilterWatcher;
componentsList[FilterCaller.name] = FilterCaller;
componentsList[Youtube.name] = Youtube;
componentsList[Sticky.name] = Sticky;
componentsList[ResizeContentHeight.name] = ResizeContentHeight;
componentsList[Popup.name] = Popup;
componentsList[SlideContent.name] = SlideContent.component;
componentsList[SlideContentDottedContent.name] = SlideContentDottedContent.component;
componentsList[SlideContentDottedHeader.name] = SlideContentDottedHeader.component;
componentsList[AppMenu.name] = AppMenu;
componentsList[Icon.name] = Icon;
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
componentsList[Ussd.name] = Ussd.component;
componentsList[GalleryCarousel.name] = GalleryCarousel.component;
componentsList[GalleryCarouselItem.name] = GalleryCarouselItem.component;

componentsList[CheckboxTabs.name] = CheckboxTabs;
componentsList[CountdownTimer.name] = CountdownTimer;
componentsList[StickyBottomLine.name] = StickyBottomLine;

export default {...componentsList};
