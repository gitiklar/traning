class Display {
  constructor(el, bus) {
    this.setupUi(el);
    this.bus = bus;
    this.bus.on("update", this.update);
  }

  setupUi(el) {
    el.innerHTML = `
            <p>And the maximum value is: <span class="maxvalue"></span></p>
        `;
    this.panel = el.querySelector(".maxvalue");
    this.panel.innerHTML = 0;
  }

  update = (newVal) => {
    const oldVal = Number(this.panel.innerHTML);
    newVal > oldVal && (this.panel.innerHTML = newVal);
  };
}
