/**
 * @fileoverview Type definitions for random-related API responses
 */

import { AnimeResponse } from './anime';
import { MangaResponse } from './manga';
import { CharacterResponse } from './characters';
import { PersonResponse } from './people';
import { UserResponse } from './users';

/**
 * Response type for random anime
 * @type RandomAnimeResponse
 */
export type RandomAnimeResponse = AnimeResponse;

/**
 * Response type for random manga
 * @type RandomMangaResponse
 */
export type RandomMangaResponse = MangaResponse;

/**
 * Response type for random character
 * @type RandomCharacterResponse
 */
export type RandomCharacterResponse = CharacterResponse;

/**
 * Response type for random person
 * @type RandomPersonResponse
 */
export type RandomPersonResponse = PersonResponse;

/**
 * Response type for random user
 * @type RandomUserResponse
 */
export type RandomUserResponse = UserResponse;