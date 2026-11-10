import type {
  NodeWidgetActions,
  NodeWidgetComponent,
  NodeWidgetHost,
  NodeWidgetModel,
} from "./node-widget";
import { mountNodeWidget, type NodeWidgetHandle } from "./node-widget";

export type NodeWidgetHarness<State> = {
  configure(model: NodeWidgetModel<State>): void;
  update(model: NodeWidgetModel<State>): void;
  remove(): void;
  getHandle(): NodeWidgetHandle<State> | undefined;
};

export function createNodeWidgetHarness<State>(
  element: HTMLElement,
  component: NodeWidgetComponent<State>,
  model: NodeWidgetModel<State>,
  host: Omit<NodeWidgetHost, "element" | "registerCleanup"> = {},
  actions: Omit<NodeWidgetActions<State>, "onResizeRequest" | "onDirtyCanvas"> = {
    onChange: () => {},
  },
): NodeWidgetHarness<State> {
  let handle: NodeWidgetHandle<State> | undefined;
  let removed = false;
  const cleanups = new Set<() => void>();
  const mount = (nextModel: NodeWidgetModel<State>) => {
    if (removed) return;
    handle = mountNodeWidget(
      component,
      {
        ...host,
        element,
        registerCleanup: (cleanup) => cleanups.add(cleanup),
      },
      nextModel,
      actions,
    );
  };

  mount(model);
  return {
    configure(nextModel) {
      if (!removed) handle?.update(nextModel);
    },
    update(nextModel) {
      if (!removed) handle?.update(nextModel);
    },
    remove() {
      if (removed) return;
      removed = true;
      for (const cleanup of cleanups) cleanup();
      cleanups.clear();
      handle = undefined;
    },
    getHandle: () => handle,
  };
}
