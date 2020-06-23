const RLE = {
  encode: (str) => str.replace(/(\w)\1+/g, (m, c) => `${m.length}${c}`),
  decode: (str) => str.replace(/(\d+)(\w)/g, (_, d, c) => c.repeat(d)),
};

module.exports = RLE;
