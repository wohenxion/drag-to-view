/**
 * 生成uuid方法
 * @returns {string}
 */
export const createUUID = function() {
  var d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now(); //use high-precision timer if available
  }
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
    c
  ) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

/**
 * 数组扁平化
 * @param {Array} arr
 */
export const flattenMd = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].items instanceof Array) {
      result = result.concat(flattenMd(arr[i].items));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
