declare global {
  interface Window {
    collectEvent: (event: string, data?: unknown) => void;
  }
}

interface InitParams {
  /**
   * 业务产品的唯一标识
   */
  app_id: number;
  channel_domain?: string;
  log?: boolean;
  disable_auto_pv?: boolean;
  disable_sdk_monitor?: boolean;
  autotrack?: boolean;
  enable_stay_duration?: boolean;
  timeout?: number;
  spa?: boolean;
  disable_track_event?: boolean;
  allow_hash?: boolean;
  enable_debug?: boolean;
  cross_subdomain?: boolean;
}

interface ConfigParams {
  user_unique_id?: string | null;
  /**
   * 平台类型
   */
  platform?: string;
}

export class VolcengineSDK {
  public static init(params: InitParams) {
    window.collectEvent("init", params);
  }

  public static start() {
    window.collectEvent("start");
  }

  public static config(params: ConfigParams) {
    window.collectEvent("config", params);
  }

  public static setUserUniqueID(user_unique_id: string | null) {
    window.collectEvent("config", { user_unique_id });
  }

  public static profileSet(profiles: Record<string, string | number | string[]>) {
    window.collectEvent("profileSet", profiles);
  }

  public static profileSetOnce(profiles: Record<string, string | number | string[]>) {
    window.collectEvent("profileSetOnce", profiles);
  }

  public static event(event: string, data?: Record<string, string | number>) {
    window.collectEvent(event.replace(/\./g, "__"), data);
  }
}
