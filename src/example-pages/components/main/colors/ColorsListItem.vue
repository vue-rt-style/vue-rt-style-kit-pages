<script type="text/jsx">
    import Vue, {CreateElement, VNode} from "vue";
    import {Component, Prop} from "vue-property-decorator";

    const componentsList = {};

    export default {
        name: "AppColorsItem",
        components: componentsList,

        props: {
            color: {
                type: Object,
                default: {}
            },
            colorsIndexArray: {
                type: Array,
                default: []
            },
            settings: {
                type: Object,
                default: {}
            },
        },


        render(h) {

            const renderItems = this.colorsIndexArray.map((key) => {
                switch (key) {
                    case 'hex':
                        return <rt-table-item>
                            <p>#{this.color.hex}</p>
                        </rt-table-item>;
                        break
                    case 'rgba':
                        return <rt-table-item>{this.color.rgba.red} {this.color.rgba.blue} {this.color.rgba.green} {this.color.rgba.alpha * 100}</rt-table-item>;
                        break
                    case 'icon':
                      let color = '#'+this.color.hex
                        if(color.length%2 == 0){
                          color += '0'
                        }
                        const style = {backgroundColor: color}

                        return <rt-table-item>
                            <div class="app-color-cube" style={style}></div>
                        </rt-table-item>;
                        break
                    case 'code_variable_name':
                        return <rt-table-item>
                            <p>{this.color.code_variable_name}</p>
                        </rt-table-item>;
                        break
                    case 'label':
                        return <rt-table-item>
                            <p>{this.color.label}</p>
                        </rt-table-item>;
                        break
                    default:
                        return <rt-table-item></rt-table-item>
                }
            })
            return <rt-table-row>
                {renderItems}
            </rt-table-row>
        }
    };

</script>