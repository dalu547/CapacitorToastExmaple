declare module '@capacitor/core' {
  interface PluginRegistry {
    ToastExample: ToastExamplePlugin;
  }
}

export interface ToastExamplePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  
  printLog(options: { value: string }): Promise<{ value: string }>;
  
}
