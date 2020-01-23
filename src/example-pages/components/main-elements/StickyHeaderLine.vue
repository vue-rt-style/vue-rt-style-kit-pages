<template>
    <div class="rt-container">
        <div class="app-content rt-col-12 rt-col-md-3">
            <div class="app-title">
                <div class="row">
                    <h1 class="rt-font-hero rt-col">
                        Sticky Header Line
                    </h1>
                </div>
            </div>
            <div class="app-body">
                <div class="row">
                    <div class="rt-col-12">
                        <div class="flex-end-center">
                            <div class="d-inline-block">

                                <rt-sticky-header-line :is-invisible="true"
                                                       :right-content="true"
                                                       top-offset-height-elemement-selector=".app-header"
                                                       :start-stop-points="['one2','two2','tree2','four2']"
                                                       :delta-between-blocks="50">
                                    <div class="rt-space-top nowrap">
                                        <rt-button class="rt-button-orange rt-button-small">Оставить заявку</rt-button>
                                    </div>
                                </rt-sticky-header-line>
                            </div>
                        </div>


                        <div id="one" class="color-block--red" style="height: 100vh; margin-top: 100vh"></div>
                        <div id="two" class="color-block--pink" style="height: 100vh;"></div>
                        <div id="tree" class="color-block--black" style="height: 100vh; margin-top: 1000px"></div>
                        <div id="four" class="color-block--black" style="height: 50vh; margin-top: 1000px"></div>
                        <div id="one2" class="color-block--red" style="height: 100vh; margin-top: 100vh"></div>
                        <div id="two2" class="color-block--pink" style="height: 100vh;">
                            <div class="rt-space-horizontal rt-space-vertical">
                                <p class="rt-space-horizontal"> Кстати, я не случайно упомянул Ихтиозавров — ведь они
                                    ископаемые, а всевозможные ископаемые в этой сказке встречаются на каждом шагу:
                                    например. Короли и Герцогини, Графы и ЭРЛЫ (в сущности, это одно и то же). Лакеи и,
                                    наконец, вымершая птица Додо, она же ископаемый Дронт. Это и не удивительно — вы
                                    ведь не забыли, что, как я уже сказал, книжка была написана целых СТО лет назад!</p>
                                <p class="rt-space-horizontal">Конечно, знать ВСЕ эти вещи, по-моему, никто не может —
                                    даже Малый Энциклопедический Словарь.</p>
                                <p class="rt-space-horizontal">Советую внимательно прочитать примечания (они напечатаны
                                    мелким шрифтом) — это может кое в чём помочь.</p>
                                <p class="rt-space-horizontal">Поэтому, если вам что-нибудь покажется очень уж
                                    непонятным (а главное, не смешным!), не стесняйтесь спрашивать у старших. Вдруг да
                                    они это знают?</p>
                            </div>
                        </div>
                        <div id="tree2" class="color-block--black" style="height: 100vh; margin-top: 1000px">
                            <div class="rt-space-horizontal rt-space-vertical">
                                <rt-button class="rt-button-orange rt-button-small">Оставить заявку</rt-button>
                                <p class="color-purple-high05 rt-space-top2 ">— Ой, всё чудесится и чудесится! — закричала Алиса. (Она
                                    была в таком изумлении, что ей уже не хватало обыкновенных слов, и она начала
                                    придумывать свои.) — Теперь из меня получается не то что подзорная труба, а целый
                                    телескоп! Прощайте, пяточки! (Это она взглянула на свои ноги, а они были уже где-то
                                    далеко-далеко внизу, того и гляди, совсем пропадут.) Бедные вы мои ножки, кто же
                                    теперь будет надевать на вас чулочки и туфли... Я-то уж сама никак не сумею
                                    обуваться! Ну это как раз неплохо! С глаз долой — из сердца вон! Раз вы так далеко
                                    ушли, заботьтесь о себе сами!.. Нет, — перебила она себя, — не надо с ними
                                    ссориться, а то они ещё не станут меня слушаться! Я вас всё равно буду любить, —
                                    крикнула она, — а на ёлку буду вам всегда дарить новые ботиночки!</p>
                            </div>
                        </div>
                        <div id="four2" class="color-block--black" style="height: 50vh; margin-top: 1000px"></div>

                        <rt-sticky-header-line top-offset-height-elemement-selector=".app-header"
                                               :start-stop-points="['one','two','tree','four']"
                                               :delta-between-blocks="50">
                            <div class="d-flex flex-center-center">
                                <rt-button class="rt-button-orange rt-button-small">Оставить заявку</rt-button>
                            </div>
                        </rt-sticky-header-line>
                    </div>
                </div>
                <div class="app-content rt-col-12 rt-col-md-3 rt-space-top3">
                    <pre style="color:#a9b7c6;font-family:'Menlo'"><span style="color:#e8bf6a;">&lt;rt-sticky-bottom-line </span><span
                            style="color:#bababa;">:start-stop-points</span><span style="color:#a5c261;">="</span>['one','two','tree','tree2']<span
                            style="color:#a5c261;">" </span><span
                            style="color:#bababa;">:delta-between-blocks</span><span
                            style="color:#a5c261;">="</span>50<span style="color:#a5c261;">"</span><span
                            style="color:#e8bf6a;">&gt;<br></span><span style="color:#e8bf6a;">  &lt;div </span><span
                            style="color:#bababa;">class</span><span
                            style="color:#a5c261;">="d-flex flex-center-center"</span><span
                            style="color:#e8bf6a;">&gt;<br></span><span style="color:#e8bf6a;">    &lt;rt-button </span><span
                            style="color:#bababa;">class</span><span style="color:#a5c261;">="rt-button-orange rt-button-small"</span><span
                            style="color:#e8bf6a;">&gt;</span>Оставить заявку<span style="color:#e8bf6a;">&lt;/rt-button&gt;<br></span><span
                            style="color:#e8bf6a;">  &lt;/div&gt;<br></span><span style="color:#e8bf6a;">&lt;/rt-sticky-bottom-line&gt;</span></pre>
                    <documentation-builder :json="documentation" type="components"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import documentation from "vue-rt-style-kit-molecules/src/components/StickyBottomLine/docs/index.json";

    import componentsList from "../../componentsList";

    export default {
        name: "AppTags",
        components: componentsList,
        data: () => ({
            documentation: {}
        }),
        mounted() {
            this.documentation = documentation;
        },
        created() {
        },
        methods: {}
    };
</script>
