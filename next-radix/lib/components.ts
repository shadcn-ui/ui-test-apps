export const components = [
  "accordion",
  "alert",
  "alert-dialog",
  "aspect-ratio",
  "avatar",
  "badge",
  "breadcrumb",
  "button",
  "button-group",
  "calendar",
  "card",
  "carousel",
  "chart",
  "checkbox",
  "collapsible",
  "combobox",
  "command",
  "context-menu",
  "dialog",
  "drawer",
  "dropdown-menu",
  "empty",
  "field",
  "hover-card",
  "input",
  "input-group",
  "input-otp",
  "item",
  "kbd",
  "label",
  "menubar",
  "native-select",
  "navigation-menu",
  "pagination",
  "popover",
  "progress",
  "radio-group",
  "resizable",
  "scroll-area",
  "select",
  "separator",
  "sheet",
  "sidebar",
  "sidebar-floating",
  "sidebar-icon",
  "sidebar-inset",
  "skeleton",
  "slider",
  "sonner",
  "spinner",
  "switch",
  "table",
  "tabs",
  "textarea",
  "toggle",
  "toggle-group",
  "tooltip",
] as const;

export type ComponentName = (typeof components)[number];

export const componentMap = new Map<ComponentName, { name: ComponentName }>(
  components.map((name) => [name, { name }])
);

export function getComponentIndex(name: string) {
  return components.indexOf(name as ComponentName);
}

export function getPrevComponent(name: string) {
  const index = getComponentIndex(name);
  if (index <= 0) return null;
  return components[index - 1];
}

export function getNextComponent(name: string) {
  const index = getComponentIndex(name);
  if (index === -1 || index >= components.length - 1) return null;
  return components[index + 1];
}
