"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
const typedoc_1 = require("typedoc");
const OverrideTheme_1 = require("./themes/OverrideTheme");
/**
 * Инициализирует плагин с темой.
 */
const load = (app) => {
    app.renderer.hooks.on('head.end', (context) => (typedoc_1.JSX.createElement("link", { rel: 'stylesheet', href: context.relativeURL('assets/custom.css') })));
    app.renderer.hooks.on('body.end', (context) => (typedoc_1.JSX.createElement("script", { src: context.relativeURL('assets/custom.js') })));
    app.renderer.defineTheme('hierarchy', OverrideTheme_1.OverrideTheme);
};
exports.load = load;
