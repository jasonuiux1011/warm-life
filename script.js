
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


// 服務燈箱
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('show');
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('show');
    modal.classList.add('hidden');
  }
}


// 輪播邏輯
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');
    let currentIndex = 0; // 初始顯示第一張卡片（索引 0）

    // 移除所有卡片的 .main 類，確保僅一個卡片顯示
    function initializeCards() {
        cards.forEach(card => card.classList.remove('main'));
    }

    // 顯示指定索引的卡片
    function showCard(index) {
        initializeCards(); // 清除所有 .main 類
        cards.forEach((card, i) => {
            card.style.display = (i === index) ? 'block' : 'none';
            if (i === index) card.classList.add('main');
        });

        // 為當前卡片的按鈕綁定事件（移除舊的事件監聽器）
        const currentCard = cards[currentIndex];
        const prevButton = currentCard.querySelector('.feature-prev');
        const nextButton = currentCard.querySelector('.feature-next');

        // 移除舊的事件監聽器，避免重複綁定
        prevButton.replaceWith(prevButton.cloneNode(true));
        nextButton.replaceWith(nextButton.cloneNode(true));
        const newPrevButton = currentCard.querySelector('.feature-prev');
        const newNextButton = currentCard.querySelector('.feature-next');

        newPrevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            showCard(currentIndex);
        });

        newNextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % cards.length;
            showCard(currentIndex);
        });
    }

    // 初始顯示第一張卡片
    showCard(currentIndex);
});


// 客服對話框邏輯
document.addEventListener('DOMContentLoaded', () => {
    // 2秒後淡入，3秒後跳轉
    if (window.location.pathname.endsWith('splash.html')) {
        setTimeout(() => {
            document.querySelector('.main-banner').classList.add('visible');
        }, 200);
        setTimeout(() => {
            document.querySelector('.main-banner').classList.remove('visible');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        }, 4000);
    }

    // 登入彈窗相關功能
    const btnLogin = document.querySelector(".btn-login");
    if (btnLogin) {
        btnLogin.addEventListener("click", showModal);
    }
    const loginClose = document.querySelector(".modal-close");
    if (loginClose) {
        loginClose.addEventListener("click", hideModal);
    }

    // 安排看看時間 Modal
    const profileModal = document.getElementById("profileModal");
    const profileCloseBtn = profileModal ? profileModal.querySelector(".profile-modal-close") : null;
    const profileOverlay = profileModal ? profileModal.querySelector(".profile-modal-overlay") : null;
    const recommendBtns = document.querySelectorAll(".recommend-btn");
    recommendBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (profileModal) profileModal.style.display = "flex";
        });
    });
    if (profileCloseBtn) profileCloseBtn.addEventListener("click", () => {
        if (profileModal) profileModal.style.display = "none";
    });
    if (profileOverlay) profileOverlay.addEventListener("click", () => {
        if (profileModal) profileModal.style.display = "none";
    });

    // 服務燈箱
    function openModal(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('show');
        }
    }

    function closeModal(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.remove('show');
            modal.classList.add('hidden');
        }
    }

    // 輪播邏輯
    const cards = document.querySelectorAll('.feature-card');
    let currentIndex = 0;

    function initializeCards() {
        cards.forEach(card => card.classList.remove('main'));
    }

    function showCard(index) {
        initializeCards();
        cards.forEach((card, i) => {
            card.style.display = (i === index) ? 'block' : 'none';
            if (i === index) card.classList.add('main');
        });

        const currentCard = cards[currentIndex];
        const prevButton = currentCard.querySelector('.feature-prev');
        const nextButton = currentCard.querySelector('.feature-next');

        prevButton.replaceWith(prevButton.cloneNode(true));
        nextButton.replaceWith(nextButton.cloneNode(true));
        const newPrevButton = currentCard.querySelector('.feature-prev');
        const newNextButton = currentCard.querySelector('.feature-next');

        newPrevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            showCard(currentIndex);
        });

        newNextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % cards.length;
            showCard(currentIndex);
        });
    }

    showCard(currentIndex);

   // 客服對話框邏輯
    const aiIcon = document.querySelector('.ai-icon');
    const chatModal = document.querySelector('#chatModal');
    const chatClose = document.querySelector('.chat-close');
    const chatInput = document.querySelector('#chatInput');
    const chatMessages = document.querySelector('.chat-messages');

    if (aiIcon && chatModal) {
        aiIcon.addEventListener('click', () => {
            chatModal.classList.remove('hidden');
            chatModal.style.display = 'block';
        });
    }

    function closeChatModal() {
        if (chatModal) {
            chatModal.classList.add('hidden');
            chatModal.style.display = 'none';
        }
    }

    if (chatClose) {
        chatClose.addEventListener('click', closeChatModal);
    }

    window.addEventListener('click', (event) => {
        if (chatModal && event.target === chatModal) {
            closeChatModal();
        }
    });

    function sendChatMessage() {
        if (chatInput && chatMessages) {
            const messageText = chatInput.value.trim();
            if (messageText) {
                const userMessage = document.createElement('div');
                userMessage.classList.add('message', 'user');
                userMessage.textContent = messageText;
                chatMessages.appendChild(userMessage);

                setTimeout(() => {
                    const botMessage = document.createElement('div');
                    botMessage.classList.add('message', 'bot');
                    if (messageText === '立即配對') {
                    const link = document.createElement('a');
                    link.href = 'https://jasonuiux1011.github.io/warm-life/Form-Section.html';
                    link.textContent = '【  點擊前往配對  】';
                    link.target = '_blank'; // 開啟新標籤
                    link.classList.add('custom-link');
                    botMessage.appendChild(link);
                    } else {
                        botMessage.textContent = '感謝您的訊息！正在處理您的問題...';
                    }
                    chatMessages.appendChild(botMessage);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 500);

                chatInput.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                sendChatMessage();
            }
        });
    }
    const chatSendButton = document.querySelector('.chat-input button');
    if (chatSendButton) {
        chatSendButton.addEventListener('click', sendChatMessage);
    }
});

function showModal() {
    const modal = document.getElementById("loginModal");
    if (modal) {
        modal.classList.remove("hidden");
        modal.classList.add("show");
    }
}

function hideModal() {
    const modal = document.getElementById("loginModal");
    if (modal) {
        modal.classList.remove("show");
        modal.classList.add("hidden");
    }
}