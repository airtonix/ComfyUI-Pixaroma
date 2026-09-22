export type NodeWidgetHost = {
  node?: unknown;
  widget?: unknown;
  element?: HTMLElement;
};

export type NodeWidgetCleanup = () => void;

export type NodeWidgetMount<Props = unknown> = (
  host: NodeWidgetHost,
  props: Props,
) => NodeWidgetCleanup;
