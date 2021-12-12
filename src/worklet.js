const WORKLET = "houdini-example";

class HoudiniExample {
  static get inputProperties() {
    return [
      `--${WORKLET}-width`,
      `--${WORKLET}-height`,
      `--${WORKLET}-x`,
      `--${WORKLET}-y`,
      `--${WORKLET}-color`,
    ];
  }

  paint(ctx, size, properties) {
    const width = parseInt(properties.get(`--${WORKLET}-width`)) || size.width;
    const height =
      parseInt(properties.get(`--${WORKLET}-height`)) || size.height;
    const x = parseInt(properties.get(`--${WORKLET}-x`)) || 0;
    const y = parseInt(properties.get(`--${WORKLET}-y`)) || 0;
    const color = String(properties.get(`--${WORKLET}-color`)) || "purple";

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
}

registerPaint(WORKLET, HoudiniExample);
