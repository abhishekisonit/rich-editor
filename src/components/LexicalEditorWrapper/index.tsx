import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { lexicalEditorConfig } from "../../config/lexicalEditorConfig";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { Box, Divider } from "@mui/material";
import { MuiContentEditable, placeHolderSx } from "./styles";

const LexicalEditorWrapper = () => {
  return (
    <LexicalComposer initialConfig={lexicalEditorConfig}>
      <Box sx={{ position: "relative", background: "white" }}>
        <RichTextPlugin
          contentEditable={<MuiContentEditable />}
          placeholder={<Box sx={placeHolderSx}> Enter some text...</Box>}
          ErrorBoundary={}
        />
      </Box>
    </LexicalComposer>
  );
};

export default LexicalEditorWrapper;
