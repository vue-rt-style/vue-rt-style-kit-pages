<script type="text/jsx">

    import componentsList from "../componentsList";
    import variables from "@vue-rt-style-kit-atoms-local/variables.json";


    export default {
        name: "App",
        components: componentsList,
        data: () => ({
            options: ['showGrid', 'isDarkTheme', 'codeViewer', 'siteStatus'],
            showMenu: false,
            isPromo: false,
            showGrid: false,
            isDarkTheme: false,
            codeViewer: false,
            siteStatus: "joint",
            menuIsHover: false
        }),
        watch: {
            $route(to, from) {
                document.querySelector('body').scroll(0, 0)
                if (window.innerWidth <= parseInt(variables['mobile-upper-limit'])) {
                    this.showMenu = false
                }
            }
        },
        created() {
            if (this.$route.path.search("promo") >= 0) {
                this.isPromo = true;
            }
        },
        mounted() {
            this.getOptions();
        },
        computed: {
            appClasses() {
                const classes = ['app'];
                if (this.showMenu) {
                    classes.push('app--hide-scroll');
                    classes.push('app--has-open-menu');
                }

                return classes.join(' ')
            },
            appWrapperClasses() {
                const classes = ['app-wrapper'];
                switch (true) {

                    case this.siteStatus === 'b2c':
                        classes.push('show-b2c');
                        break;
                    case this.siteStatus === 'b2b':
                        classes.push('show-b2b');
                        break;
                    case this.siteStatus === 'joint':
                        classes.push('show-b2c');
                        classes.push('show-b2b');
                        break;
                }
                return classes.join(' ')
            },
            gridClasses() {
                const classes = ["grid", "app-container", "rt-container"];
                if (this.showGrid) {
                    classes.push('grid--active');
                }
                return classes.join(' ')

            }
        },
        methods: {
            saveOptions() {
                const options = {};
                this.options.forEach((key) => {
                    options[key] = this[key]
                });
                localStorage.setItem('appOption', JSON.stringify(options));
            },
            getOptions() {
                let options = localStorage.getItem('appOption');
                if (options) {
                    options = JSON.parse(options);

                    this.options.forEach((key) => {
                        this[key] = options[key]
                    });
                    this.switchTheme(null, true);
                    this.codeViewerToggle(null,true)
                }
            },
            toggleMenu() {
                if (this.showMenu) {
                    this.closeMenu()
                } else {
                    this.openMenu()
                }
            },
            onMenuMouseEnter() {
                this.menuIsHover = true
            },
            onMenuMouseLeave() {
                this.menuIsHover = false
            },
            checkClick() {
                setTimeout(() => {
                    if (this.showMenu && !this.menuIsHover) {
                        this.closeMenu()
                    }
                }, 100)
            },
            openMenu() {
                this.showMenu = true;
                this.$refs.menu.$refs.input.$refs.input.focus();
            },
            closeMenu() {
                this.showMenu = false;
            },
            gridToggle() {
                this.showGrid = !this.showGrid;
                this.saveOptions();
            },
            codeViewerToggle(event, isInit) {
                let isChecked;
                if(isInit) {
                    isChecked = this.codeViewer;
                }else{
                    isChecked = !this.codeViewer;
                }
                if (isChecked) {
                    localStorage.setItem("rt-code-viewer", 1);
                    document.body.classList.add("rt-code-viewer");
                } else {
                    localStorage.setItem("rt-code-viewer", 0);
                    document.body.classList.remove("rt-code-viewer");
                }
                this.codeViewer = isChecked;
                this.saveOptions();
            },

            switchTheme(event, isInit) {
                let isChecked;
                if (isInit) {
                    isChecked = this.isDarkTheme
                } else {
                    isChecked = !this.isDarkTheme
                }

                const bodyClassList = document.body.classList.value.split(" ");
                if (isChecked) {
                    bodyClassList.push("rt-dark-theme");
                    localStorage.setItem("rt-dark", 1);
                    this.isDarkTheme = true;
                } else {
                    bodyClassList.splice(bodyClassList.indexOf("rt-dark-theme"), 1);
                    localStorage.setItem("rt-dark", 0);
                    this.isDarkTheme = false;
                }
                document.body.classList = bodyClassList.join(" ");
                this.saveOptions();
            },
            setStatusView(typeView) {
                this.siteStatus = typeView;
                this.saveOptions();
            }

        },
        render(h) {
            const renderTabsItem = (type) => {
                let classes = 'rt-tabs-navigation__item';
                if (this.siteStatus === type) {
                    classes += ' rt-tabs-navigation__item--is-active'
                }
                const setStatunsFn = () => {
                    this.setStatusView(type);
                }
                return <div class="rt-tabs-navigation__item" class={classes}>
                    <button onClick={setStatunsFn} class="rt-tabs-navigation__item-name">{type}</button>
                </div>
            }
            const renderTabsNav = () => {
                const types = ['b2c', 'b2b', 'joint']
                return <div class="rt-tabs-navigation">
                    {types.map((type) => {
                        return renderTabsItem(type)
                    })}
                </div>
            }
            return <div class={this.appClasses} onClick={this.checkClick}>

                <div class="app-wrapper" class={this.appWrapperClasses}>
                    <div onMouseenter={this.onMenuMouseEnter}
                         onMouseleave={this.onMenuMouseLeave}>
                        <app-menu
                            ref="menu"
                            show-menu={this.showMenu}
                            code-viewer-toggle={this.codeViewerToggle}
                            code-viewer={this.codeViewer}
                            show-grid={this.showGrid}
                            grid-toggle={this.gridToggle}
                        >

                            <div class="rt-space-left">
                                <rt-logo
                                    width="30px"
                                    english-theme="true"
                                    show-text="true"
                                    color="#ffffff"
                                    height="42px"
                                />
                            </div>
                        </app-menu>
                    </div>
                    <div class="test">
                        1
                    </div>
                    <div class="app__content">
                        <div class={this.gridClasses}>
                            <div class="rt-col-12">
                                <div class="row">
                                    <div class="rt-col-1 rt-col-td-1 rt-col-md-1 demo-col test"/>
                                    <div class="rt-col-1 rt-col-td-1 rt-col-md-1 demo-col"/>
                                    <div class="rt-col-1 rt-col-td-1 rt-col-md-1 demo-col"/>
                                    <div class="rt-col-1 rt-col-td-1 demo-col md-d-none"/>
                                    <div class="rt-col-1 rt-col-td-1 demo-col md-d-none"/>
                                    <div class="rt-col-1 rt-col-td-1 demo-col md-d-none"/>
                                    <div class="rt-col-1 demo-col md-d-none td-d-none"/>
                                    <div class="rt-col-1 demo-col md-d-none td-d-none"/>
                                    <div class="rt-col-1 demo-col md-d-none td-d-none"/>
                                    <div class="rt-col-1 demo-col md-d-none td-d-none"/>
                                    <div class="rt-col-1 demo-col md-d-none td-d-none"/>
                                    <div class="rt-col-1 demo-col md-d-none td-d-none"/>
                                </div>
                            </div>
                        </div>
                        <header class="app-header">
                            <div class="app-header__left-panel">
                                <div class="app-menu-trigger" onMouseenter={this.onMenuMouseEnter}
                                     onMouseleave={this.onMenuMouseLeave} onClick={this.toggleMenu}>
                                    <div class="app-menu-trigger__line"></div>
                                </div>

                                {renderTabsNav()}

                            </div>
                            <div class="app-header__right-panel d-flex rt-dark-theme">
                                <div class={'rt-tag' + (this.showGrid ? ' rt-tag--is-active' : '')}
                                     onClick={this.gridToggle}>Grid
                                </div>
                                <div class={'rt-tag' + (this.isDarkTheme ? ' rt-tag--is-active' : '')}
                                     onClick={this.switchTheme}>Dark mode
                                </div>
                                <div class={'rt-tag' + (this.codeViewer ? ' rt-tag--is-active' : '')}
                                     onClick={this.codeViewerToggle}>Edit on
                                </div>
                            </div>
                        </header>
                        <router-view/>
                    </div>
                </div>
            </div>

        }
    };

</script>


