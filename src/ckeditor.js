import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import List from '@ckeditor/ckeditor5-list/src/list';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';

import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';

import '@ckeditor/ckeditor5-theme-lark/theme/theme.css';

export default class CustomEditor extends ClassicEditorBase {
  static builtinPlugins;
}

CustomEditor.builtinPlugins = [
    Essentials,
    Paragraph,
    Bold,
    Italic,
    Markdown,
    Autosave,
    Underline,
    Strikethrough,
    Heading,
    FontSize,
    FontColor,
    FontBackgroundColor,
    Alignment,
    List,
    Link,
    Image,
    ImageToolbar,
    ImageUpload,
    Table,
    TableToolbar,
    BlockQuote
];
