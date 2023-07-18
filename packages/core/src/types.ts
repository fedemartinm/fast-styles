/**
 * Extracts the individual keys from a string rule type by splitting on the "+" character.
 *
 * @template T - String Rule
 * @returns The extracted key.
 */
type TrimKeys<T extends string> = T extends `${infer Key}+${infer _Rest}`
  ? Key
  : T extends `${infer Key}`
  ? Key
  : never;

/**
 * Extracts the variant keys from a record type.
 *
 * @template T - Record type.
 * @returns The extracted variant keys.
 */
type ExtractVariantKeys<T extends Record<string, any>> = TrimKeys<
  Extract<keyof T, string>
>;

/**
 * Represents the variants of a styled object.
 *
 * @template T - Record type.
 */
export type VariantsOf<T extends Record<string, any>> = {
  [K in keyof T]: ExtractVariantKeys<T[K]>;
};

/**
 * Represents a styled object with variants.
 *
 * @template V - Type of the variants.
 * @template S - Type of the styles.
 */
export type StyledObject<V, S> = S & {
  variants: V;
};
