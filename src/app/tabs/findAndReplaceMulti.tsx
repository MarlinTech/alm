import * as ui from "../ui";
import * as csx from "csx";
import * as React from "react";
import * as tab from "./tab";
import {server,cast} from "../../socket/socketClient";
import * as commands from "../commands/commands";
import * as utils from "../../common/utils";
import * as d3 from "d3";
import * as $ from "jquery";
import * as styles from "../styles/styles";
import * as onresize from "onresize";
import {Clipboard} from "../clipboard";

import {Types} from "../../socket/socketContract";

type NodeDisplay = Types.NodeDisplay;
let EOL = '\n';

let {inputBlackStyle} = styles.Input;

/**
 * The styles
 */
require('./astView.less');

import {CodeEditor} from "../codemirror/codeEditor";

export interface Props extends tab.ComponentProps {
}
export interface State {
    selectedNode?: Types.NodeDisplay;
    text?:string;
}

@ui.Radium
export class ASTView extends ui.BaseComponent<Props, State> implements tab.Component {
    constructor(props: Props) {
        super(props);
        let {protocol,filePath} = utils.getFilePathAndProtocolFromUrl(props.url);
        this.filePath = filePath;
        this.state = {
        };
    }

    refs: {
        [string: string]: any;
        root: HTMLDivElement;
        graphRoot: HTMLDivElement;
    }

    filePath: string;
    mode: Types.ASTMode;
    componentDidMount() {
        // TODO tell server about clearing the search
    }

    render() {
        return (
            <div
                ref="root" tabIndex={0}
                style={csx.extend(csx.vertical,csx.flex,styles.noFocusOutline)}>
                <div style={csx.extend(csx.flex,csx.scroll)}>
                    {
                        // The search results go here
                    }
                </div>
                <div style={csx.extend(csx.flexRoot,styles.padded1,{background:'white'})}>
                    {
                        // The search controls go here
                    }
                </div>
            </div>
        );
    }

    /**
     * TAB implementation
     */
    focus = () => {
        this.refs.root.focus();
    }

    save = () => {
    }

    close = () => {
    }

    gotoPosition = (position: EditorPosition) => {
    }

    search = {
        doSearch: (options: FindOptions) => {
            // TODO
        },

        hideSearch: () => {
            // TODO
        },

        findNext: (options: FindOptions) => {
        },

        findPrevious: (options: FindOptions) => {
        },

        replaceNext: (newText: string) => {
        },

        replacePrevious: (newText: string) => {
        },

        replaceAll: (newText: string) => {
        }
    }
}
