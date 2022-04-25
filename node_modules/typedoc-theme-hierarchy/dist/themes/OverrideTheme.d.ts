import { DefaultTheme, DefaultThemeRenderContext, Options } from 'typedoc';
import { Renderer } from 'typedoc/dist/lib/output/renderer';
declare class OverrideThemeContext extends DefaultThemeRenderContext {
    constructor(theme: DefaultTheme, options: Options);
}
export declare class OverrideTheme extends DefaultTheme {
    private _contextCache?;
    constructor(renderer: Renderer);
    /**
     * Переопределяет стандартный контекст.
     */
    getRenderContext(): OverrideThemeContext;
}
export {};
