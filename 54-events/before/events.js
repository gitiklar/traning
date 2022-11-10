class EventBus {
  constructor() {
    this.handlers = {};
  }

  on(eventName, handler) {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(handler);
  }

  emit(eventName, ...arg) {
    const handlers = this.handlers[eventName] || [];
    for (let i = 0; i < handlers.length; i++) {
      handlers[i](...arg);
    }
  }
}

const bus = new EventBus();
