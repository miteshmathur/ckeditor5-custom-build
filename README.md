# CKEditor 5 Custom Build

A custom build of CKEditor 5 Classic Editor with a comprehensive set of plugins for rich text editing.

## Features

This custom build includes the following CKEditor 5 plugins:

### Core Features
- **Essentials** - Essential editing features
- **Paragraph** - Basic paragraph support
- **Markdown** - Markdown GFM support for input/output

### Text Formatting
- **Bold**, **Italic**, **Underline**, **Strikethrough** - Basic text styling
- **Font Size**, **Font Color**, **Font Background Color** - Font customization
- **Heading** - Heading levels (H1-H6)
- **Alignment** - Text alignment (left, center, right, justify)

### Content Elements
- **List** - Ordered and unordered lists
- **Link** - Hyperlink creation and editing
- **Image** - Image insertion and toolbar
- **Image Upload** - Image upload functionality
- **Table** - Table creation and editing with toolbar
- **Block Quote** - Block quotations

### Additional Features
- **Autosave** - Automatic saving of content

## Build Output

After building, the following files are generated in the `build/` directory:
- `ckeditor.js` - The main editor JavaScript file
- `styles.css` - The editor theme styles

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Building

To build the custom editor:

```bash
npm run build
```

This will create the optimized build files in the `build/` directory.

## Usage

After building, you can use the custom editor in your web application by including the generated files:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>CKEditor 5 Custom Build</title>
    <link rel="stylesheet" href="build/styles.css">
</head>
<body>
    <div id="editor">
        <p>This is the initial editor content.</p>
    </div>

    <script src="build/ckeditor.js"></script>
    <script>
        ClassicEditor
            .create(document.querySelector('#editor'))
            .then(editor => {
                console.log('Editor was initialized', editor);
            })
            .catch(error => {
                console.error(error);
            });
    </script>
</body>
</html>
```

## Configuration

The editor is configured with all included plugins enabled by default. You can customize the toolbar and plugin configuration by modifying `src/ckeditor.js`.

## Development

To modify the build:
1. Edit `src/ckeditor.js` to add/remove plugins
2. Update `package.json` dependencies as needed
3. Run `npm run build` to generate new build files

## License

This project is based on CKEditor 5, which is licensed under the GPL 2+ license. Please refer to the [CKEditor 5 licensing page](https://ckeditor.com/legal/ckeditor-oss-license/) for more information.