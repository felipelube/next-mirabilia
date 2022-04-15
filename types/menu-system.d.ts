export interface MenuItem {
  /** Unique identifier for this menu item */
  key: string;
  /** The title of the menu */
  title: string;
  /** Associated description for this menu item */
  description?: string | null;
  /** Internal Drupal uri for this menu item */
  uri: string;
  /** TODO: */
  alias?: string | null;
  /** If the link for this menu should open in another window */
  external: boolean;
  /** The absolute URL for this menu item */
  absolute: string;
  /** The relative URL for this menu item */
  relative: string;
  /** TODO: */
  existing: boolean;
  /** The order of this menu item */
  weight: string;
  /** If this menu item should rendered open (showing its children) */
  expanded: boolean;
  /** If this menu item is enabled */
  enabled: boolean;
  /** TODO: */
  uuid?: null;
  /** User options associated with this menu item */
  options?: Options | (null)[] | null;
  /** The children of this menu item */
  below?: (MenuItem)[] | null;
}

export type ISiteMenu = MenuItem[]