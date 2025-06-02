// 2秒後淡入，3秒後跳轉
window.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('splash.html')) {
        // 先等0.2秒再開始淡入，避免載入閃現
        setTimeout(function() {
            document.querySelector('.main-banner').classList.add('visible');
        }, 200);

        // 2秒淡入 + 2秒停留 = 4秒後開始淡出
        setTimeout(function() {
            document.querySelector('.main-banner').classList.remove('visible');
            // 2秒淡出後再跳轉
            setTimeout(function() {
                window.location.href = 'index.html'; // 請改成你的首頁檔名
            }, 2000);
        }, 4000);
    }

    // 登入彈窗相關功能
    var btnLogin = document.querySelector(".btn-login");
    if (btnLogin) {
        btnLogin.addEventListener("click", showModal);
    }

    // 綁定關閉按鈕
    var btnClose = document.querySelector(".modal-close");
    if (btnClose) {
        btnClose.addEventListener("click", hideModal);
    }
});

// -------------------------------------// 登入彈窗相關功能
// 顯示彈窗
function showModal() {
    const modal = document.getElementById("loginModal");
    modal.classList.remove("hidden");
    modal.classList.add("show");
}

// 關閉彈窗
function hideModal() {
    const modal = document.getElementById("loginModal");
    modal.classList.remove("show");
    modal.classList.add("hidden");
}


//安排看看時間」按鈕觸發
document.addEventListener("DOMContentLoaded", function () {
  // 取得 Modal 元素
  const modal = document.getElementById("profileModal");
  const closeBtn = modal.querySelector(".profile-modal-close");
  const overlay = modal.querySelector(".profile-modal-overlay");

  // 抓所有「安排看看時間」按鈕
  const recommendBtns = document.querySelectorAll(".recommend-btn");
  recommendBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // 這裡之後可依 data- 屬性動態替換不同陪伴者資訊
      modal.style.display = "flex";
    });
  });

  // 點選 X 按鈕 => 隱藏 Modal
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // 點擊遮罩層 => 隱藏 Modal
  overlay.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
