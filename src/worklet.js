class HoudiniExample {
  static get inputProperties() {
    return [
      "--houdiniExampleWidth",
      "--houdiniExampleHeight",
      "--houdiniExampleX",
      "--houdiniExampleY",
      "--houdiniExampleColor",
    ];
  }

  paint(ctx, size, properties) {
    const width =
      parseInt(properties.get("--houdiniExampleWidth")) || size.width;
    const height =
      parseInt(properties.get("--houdiniExampleHeight")) || size.height;
    const x = parseInt(properties.get("--houdiniExampleX")) || 0;
    const y = parseInt(properties.get("--houdiniExampleY")) || 0;
    const color = String(properties.get("--houdiniExampleColor")) || "purple";

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
}

registerPaint("houdiniExample", HoudiniExample);
