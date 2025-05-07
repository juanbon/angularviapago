export class HeaderColumn {
    text: string;
    key: string;
  
    constructor(options: {
        text?: string;
        key?: string;
      } = {}) {
      this.text = options.text || '';
      this.key = options.key || '';
    }
    
  }