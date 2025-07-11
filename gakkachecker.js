const weights = [
    [10, 7, 5, 3, 2], // プログラミング
    [10, 6, 4, 2, 1], // ゲーム開発
    [6, 10, 7, 5, 2], // ロボット
    [4, 9, 6, 7, 1], // ドローン
    [10, 7, 6, 3, 2], // AI（人工知能）
    [8, 9, 8, 5, 3], // IoT
    [7, 9, 9, 6, 5], // センサー
    [8, 10, 8, 6, 2], // 自動運転
    [10, 6, 5, 3, 3], // データ分析
    [10, 6, 4, 2, 1], // アプリ開発
    [5, 6, 10, 5, 3], // 電気回路
    [7, 5, 10, 3, 2], // 通信技術
    [4, 3, 10, 2, 2], // 半導体
    [7, 5, 10, 2, 1], // スマホの仕組み
    [7, 6, 10, 2, 1], // 5G / 6G
    [5, 5, 6, 10, 3], // 宇宙開発
    [3, 4, 5, 10, 1], // 飛行機
    [3, 7, 6, 10, 2], // 自動車
    [3, 4, 4, 10, 4], // エネルギー問題
    [4, 4, 3, 8, 8], // 環境問題
    [4, 4, 3, 10, 5], // 再生可能エネルギー
    [3, 4, 4, 10, 5], // 水素エネルギー
    [5, 10, 7, 5, 3], // 工場の自動化
    [2, 2, 2, 3, 10], // 生物の不思議
    [2, 1, 2, 2, 10], // 化学実験
    [2, 1, 2, 1, 10], // 医薬品
    [1, 1, 1, 2, 10], // 食品開発
    [2, 2, 2, 2, 10], // バイオテクノロジー
    [1, 1, 1, 2, 10], // 遺伝子
    [3, 10, 4, 6, 2], // デザイン
    [3, 10, 7, 8, 3], // モノづくり
    [4, 5, 10, 4, 2], // 回路設計
    [10, 6, 3, 2, 1], // ゲームAI
    [2, 6, 6, 10, 2], // 機械の仕組み
    [9, 10, 8, 4, 3], // システム開発
    [5, 6, 5, 4, 10], // スマート農業
    [4, 5, 4, 4, 10], // 農業×テクノロジー
    [7, 10, 8, 4, 2], // 知能ロボット
    [4, 5, 3, 3, 9], // 人工生命
    [3, 2, 6, 3, 8], // ナノテクノロジー
    [3, 3, 5, 5, 8], // 材料開発
    [3, 3, 4, 10, 7], // クリーンエネルギー
    [3, 3, 4, 9, 6], // 燃料電池
    [10, 7, 4, 2, 1], // VR・AR
    [10, 6, 3, 1, 1], // メタバース
    [10, 5, 10, 2, 1], // ネットワーク
    [6, 5, 8, 3, 1], // パソコンを組む
    [5, 8, 9, 5, 2], // マイコン
    [7, 10, 6, 7, 6], // 技術で人を助ける
    [5, 5, 5, 5, 9], // 科学が好き
  ];

  const majors = [
    "AI・デジタル情報工学科",
    "ロボット・システムデザイン工学科",
    "半導体・電気情報通信工学科",
    "エネルギー・機械デザイン工学科",
    "化学・生命工学科"
  ];

  function calculateResult() {
  const checkboxes = document.querySelectorAll('input[name="interest"]:checked');
  if(checkboxes.length === 0){
    alert("少なくとも1つ選択してください。");
    return;
  }

  const scores = [0,0,0,0,0];
  checkboxes.forEach(cb => {
    const idx = parseInt(cb.value);
    if(weights[idx]){
      for(let i=0; i < scores.length; i++){
        scores[i] += weights[idx][i];
      }
    }
  });

  let maxScore = Math.max(...scores);
  let topMajors = [];

  scores.forEach((score,i) => {
    if(score === maxScore) topMajors.push(majors[i]);
  });

  showPopup(topMajors);
}

function showPopup(topMajors) {
  const popup = document.getElementById("popup");
  const content = popup.querySelector(".popup-content #result");

  if (topMajors.length === 1) {
    content.innerHTML = `
      <div class="result-message">あなたに最も向いている学科は</div>
      <div class="result-major">「${topMajors[0]}」</div>
      <br>
      <button onclick="closePopup()">閉じる</button>
    `;
  } else {
    const majorsHTML = topMajors.map(m => `<div class="result-major">「${m}」</div>`).join("");
    content.innerHTML = `
      <div class="result-message">あなたに向いている学科は複数あります：</div>
      ${majorsHTML}
      <br>
      <button onclick="closePopup()">閉じる</button>
    `;
  }

  popup.classList.remove("hidden");
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("hidden");
}