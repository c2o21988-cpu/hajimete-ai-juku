// ========================================
// はじめてのAI塾 - JavaScript
// ========================================

// スクロールプログレスバー
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById('progressBar').style.width = progress + '%';
});

// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

// モバイルメニューのリンクをクリックしたらメニューを閉じる
document.querySelectorAll('.mobile-menu-link, .mobile-menu-cta').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});

// FAQ アコーディオン
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = answer.classList.contains('open');

  // 全て閉じる
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('active'));

  // クリックしたものだけ開く（既に開いていたら閉じる）
  if (!isOpen) {
    answer.classList.add('open');
    btn.classList.add('active');
  }
}

// ヘッダーのスクロール時の影
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
});
