/**
 * @fileoverview Main entry point for the Jikan API wrapper
 * @module jikan-api.js
 * @version 2.0.0
 * @author Rohan Kumar <rohan.shuvam@gmail.com>
 * @license MIT
 */

import Jikan from "./jikan";

// Export all type definitions for consumers
export * from "./types/anime";
export * from "./types/manga";
export * from "./types/common";

// Export the main Jikan class as the default export
export default Jikan;