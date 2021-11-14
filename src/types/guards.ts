import type { ResponsiveObject, ResponsiveArray, ResponsiveStyle } from './index'

/**
 * Type guard to check if a passed value is a {@link ResponsiveObject}
 *
 * @template T Type of values within the check
 * @param {any} check Value to check
 *
 * @returns {check is ResponsiveObject<T>} True if {@link check} is a ResponsiveObject
 *
 * @since 1.0.0
 */
export const ResponsiveObjectGuard = <T>(check: unknown): check is ResponsiveObject<T> =>
  (check as ResponsiveObject<T>)._ !== undefined

/**
 * Type guard to check if a passed value is a {@link ResponsiveArray}
 *
 * @template T Type of values within the check
 * @param {any} check Value to check
 *
 * @returns {check is ResponsiveArray<T>} True if {@link check} is a ResponsiveArray
 *
 * @since 1.0.0
 */
export const ResponsiveArrayGuard = <T>(check: unknown): check is ResponsiveArray<T> =>
  Array.isArray(check) && (check as ResponsiveArray<T>)[0] !== undefined

/**
 * Type guard to check if a passed value is a {@link ResponsiveStyle}
 *
 * @template T Type of values within the check
 * @param {any} check Value to check
 *
 * @returns {check is ResponsiveStyle<T>} True if {@link check} is a ResponsiveStyle
 *
 * @since 1.0.0
 */

export const ResponsiveStyleGuard = <T>(check: unknown): check is ResponsiveStyle<T> =>
  ResponsiveObjectGuard<T>(check) || ResponsiveArrayGuard<T>(check)
