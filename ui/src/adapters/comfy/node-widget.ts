import { createElement, StrictMode, type ComponentType } from "react";
import { createRoot, type Root } from "react-dom/client";

export type NodeWidgetRenderer = "classic" | "nodes2";

export type NodeWidgetHost = {
  element: HTMLElement;
  node?: unknown;
  widget?: unknown;
  renderer?: NodeWidgetRenderer;
  requestResize?: (height: number) => void;
  setDirtyCanvas?: () => void;
  registerCleanup?: (cleanup: () => void) => void;
};

export type NodeWidgetModel<State> = {
  nodeId: string | number;
  nodeType: string;
  state: State;
  disabled?: boolean;
  compact?: boolean;
  accent?: string;
  renderer: NodeWidgetRenderer;
};

export type NodeWidgetActions<State> = {
  onChange: (next: State) => void;
  onCommit?: (next: State) => void;
  onResizeRequest?: (height: number) => void;
  onDirtyCanvas?: () => void;
  onOpenSettings?: () => void;
  onOpenHelp?: () => void;
};

export type NodeWidgetProps<State> = NodeWidgetModel<State> & NodeWidgetActions<State>;
export type NodeWidgetComponent<State> = ComponentType<NodeWidgetProps<State>>;
export type NodeWidgetCleanup = () => void;
export type NodeWidgetMount<Props = unknown> = (
  host: NodeWidgetHost,
  props: Props,
) => NodeWidgetCleanup;

export type NodeWidgetHandle<State> = {
  update(model: NodeWidgetModel<State>): void;
  unmount(): void;
  measure(): { minWidth?: number; minHeight: number };
};

export type NodeWidgetBridge<State> = {
  mount(
    host: NodeWidgetHost,
    model: NodeWidgetModel<State>,
    actions?: Omit<NodeWidgetActions<State>, "onResizeRequest" | "onDirtyCanvas">,
  ): NodeWidgetHandle<State>;
};

type RootRecord = {
  root: Root;
  unmount: () => void;
};

const roots = new WeakMap<HTMLElement, RootRecord>();

function unmountExisting(element: HTMLElement) {
  roots.get(element)?.unmount();
}

function createActions<State>(
  host: NodeWidgetHost,
  actions: Omit<NodeWidgetActions<State>, "onResizeRequest" | "onDirtyCanvas">,
) {
  return {
    ...actions,
    onResizeRequest: (height: number) => host.requestResize?.(height),
    onDirtyCanvas: () => host.setDirtyCanvas?.(),
  } satisfies NodeWidgetActions<State>;
}

export function createNodeWidgetBridge<State>(
  component: NodeWidgetComponent<State>,
): NodeWidgetBridge<State> {
  return {
    mount: (host, model, actions) => mountNodeWidget(component, host, model, actions),
  };
}

export function mountNodeWidget<State>(
  component: NodeWidgetComponent<State>,
  host: NodeWidgetHost,
  model: NodeWidgetModel<State>,
  actions: Omit<NodeWidgetActions<State>, "onResizeRequest" | "onDirtyCanvas"> = {
    onChange: () => {},
  },
): NodeWidgetHandle<State> {
  unmountExisting(host.element);

  const root = createRoot(host.element);
  let currentModel = model;
  let mounted = true;
  const record: RootRecord = {
    root,
    unmount: () => {
      if (!mounted) return;
      mounted = false;
      try {
        root.unmount();
      } finally {
        if (roots.get(host.element) === record) roots.delete(host.element);
      }
    },
  };

  const render = () => {
    root.render(
      createElement(
        StrictMode,
        null,
        createElement(component, {
          ...currentModel,
          ...createActions(host, actions),
        }),
      ),
    );
  };

  roots.set(host.element, record);
  host.registerCleanup?.(record.unmount);
  render();

  return {
    update(nextModel: NodeWidgetModel<State>) {
      if (!mounted) return;
      currentModel = nextModel;
      render();
    },
    unmount: record.unmount,
    measure: () => ({ minHeight: host.element.scrollHeight }),
  };
}

export function hasNodeWidgetRoot(element: HTMLElement) {
  return roots.has(element);
}

export function cleanupNodeWidget(element: HTMLElement) {
  roots.get(element)?.unmount();
}

export type NodeWidgetSerialization<State> = {
  read(): State;
  write(next: State): void;
};

export function controlledNodeWidgetActions<State>(
  serialization: NodeWidgetSerialization<State>,
  onChange?: (next: State) => void,
): Pick<NodeWidgetActions<State>, "onChange" | "onCommit"> {
  const change = (next: State) => {
    serialization.write(next);
    onChange?.(next);
  };
  return {
    onChange: change,
    onCommit: change,
  };
}
