import { JSX, PageEvent, Reflection } from 'typedoc';
/**
 * Рендерит панель навигации.
 */
export declare const navigation: (urlTo: (reflection: Reflection) => string | undefined) => (props: PageEvent<Reflection>) => JSX.Element;
