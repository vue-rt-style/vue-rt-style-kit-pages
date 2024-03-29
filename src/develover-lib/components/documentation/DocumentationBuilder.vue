<script type="text/jsx">
    import {
        Table,
        TableItem,
        TableRow,
        TableCol,
        TableHeadItem
    } from "@vue-rt-style-kit-molecules-local/components";
    import {markdown} from 'markdown';

    const componentsList = {};
    componentsList[Table.name] = Table;
    componentsList[TableItem.name] = TableItem;
    componentsList[TableRow.name] = TableRow;
    componentsList[TableCol.name] = TableCol;
    componentsList[TableHeadItem.name] = TableHeadItem;
    export default {
        name: "DocumentationBuilder",
        components: componentsList,
        props: {
            label: {
                type: String,
                default: null
            },
            type: {
                type: String,
                default: "components"
            },
            labelsJson: {
                type: [Object, Array],
                default: null
            },
            json: {
                type: Object,
                default: () => {
                    return {};
                }
            }
        },

        data() {
            if (!this.labelsJson) {
                switch (this.type) {
                    case 'classStyle':
                        return {
                            labels: [
                                {name: "name", label: "class name"},
                                {name: "description", label: "description"},
                            ]
                        };
                        break;
                    case 'events':
                        return {
                            labels: [
                                {name: "name", label: "event name"},
                                {name: "description", label: "description"},
                                {name: "component", label: "component tag"},
                                // {name: "params", label: "params<Type>"},
                                {name: "return", label: "return value"},
                            ]
                        };
                        break;
                    default:
                        return {
                            labels: [
                                {name: "name", label: "component name"},
                                {name: "property", label: "component property"},
                                {name: "type", label: "property type"},
                                {name: "description", label: "description"},
                                {name: "value", label: "default value"}
                            ]
                        };
                }
            } else {
                return {
                    labels: this.labelsJson
                };
            }
        },

        render(h) {
            if (!this.json["items"] || this.json["items"].length == 0) {
                return null;
            }
            const header = (() => {
                return this.labels.map(item => {
                    return <rt-table-head-item>{item.label}</rt-table-head-item>;
                });
            })();
            const bodyItem = data => {
                return this.labels.map(labelItem => {
                    if (labelItem.name === "version" && !data[labelItem.name]) {
                        data[labelItem.name] = "<= 0.0.16";
                    }
                    let tableCellText;
                    if (Array.isArray(data[labelItem.name])) {
                        tableCellText = data[labelItem.name].join(' ');
                    } else {
                        tableCellText = data[labelItem.name];
                    }
                  if(tableCellText.search('<br/>')>0){
                    tableCellText = tableCellText.replace(/<br\/>/g,'\n\n')
                  }
                    return <rt-table-item html={markdown.toHTML(tableCellText)}></rt-table-item>;
                });
            };

            const body = (() => {
                if (this["json"] && this["json"]["items"]) {
                    return this["json"]["items"].map(row => {
                        return <rt-table-row>{bodyItem(row)}</rt-table-row>;
                    });
                } else {
                    return null;
                }
            })();
            return (
                <div class="rt-space-top25 app-documentation">
                    <rt-table>
                        <template slot="label">{this.label ? this.label : this.type}</template>
                        <template slot="header">{header}</template>
                        <template slot="body">{body}</template>
                    </rt-table>
                </div>
            );
        }
    };
</script>
