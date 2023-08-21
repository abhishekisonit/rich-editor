import lexicalEditorTheme from "../theme/lexicalEditorTheme";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { TableNode, TableCellNode, TableRowNode } from "@lexical/table";
import { ListNode, ListItemNode } from "@lexical/list";
// import { ImageNode } from "../components/CustomNodes/ImageNode";

function onError(error: any) {
  console.error(error);
}

export const lexicalEditorConfig = {
  namespace: "MyEditor",
  theme: lexicalEditorTheme,
  onError,

  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
    // ImageNode,
  ],
};
