import markdownItTinyMind from 'markdown-it-tinymind'
import markdownIt from 'markdown-it'
import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
    return {
        extendMarkdownIt(md: markdownIt) {
            return md.use(markdownItTinyMind);
        }
    };
}