/* primarystar 的个人博客 · 极简脚本 */
(function () {
  "use strict";
  // 页脚年份
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
