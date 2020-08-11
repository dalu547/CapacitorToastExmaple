import { WebPlugin } from '@capacitor/core';
import { ToastExamplePlugin } from './definitions';

export class ToastExampleWeb extends WebPlugin implements ToastExamplePlugin {
  constructor() {
    super({
      name: 'ToastExample',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async printLog(options: { value: string }): Promise<{ value: string }> {
    console.log('printLog', options);
    return options;
  }
  
}

const ToastExample = new ToastExampleWeb();

export { ToastExample };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ToastExample);
