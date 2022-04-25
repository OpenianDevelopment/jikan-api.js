"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverrideTheme = void 0;
const typedoc_1 = require("typedoc");
const fs_extra_1 = require("fs-extra");
// eslint-disable-next-line unicorn/prefer-node-protocol
const path_1 = __importDefault(require("path"));
const navigation_1 = require("../partials/navigation");
class OverrideThemeContext extends typedoc_1.DefaultThemeRenderContext {
    constructor(theme, options) {
        super(theme, options);
        this.navigation = (0, navigation_1.navigation)(this.urlTo.bind(this));
    }
}
class OverrideTheme extends typedoc_1.DefaultTheme {
    constructor(renderer) {
        super(renderer);
        this.listenTo(this.owner, typedoc_1.RendererEvent.END, () => __awaiter(this, void 0, void 0, function* () {
            const out = this.application.options.getValue('out');
            yield (0, fs_extra_1.copy)(
            // eslint-disable-next-line unicorn/prefer-module
            path_1.default.join(require.resolve('typedoc-theme-hierarchy'), '../assets'), path_1.default.join(out, '/assets'));
        }));
    }
    /**
     * Переопределяет стандартный контекст.
     */
    getRenderContext() {
        this._contextCache || (this._contextCache = new OverrideThemeContext(this, this.application.options));
        return this._contextCache;
    }
}
exports.OverrideTheme = OverrideTheme;
