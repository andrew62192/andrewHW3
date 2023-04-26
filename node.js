// 當頁面載入完成後，將焦點設定在搜尋輸入框
window.onload = function() {
    document.getElementById('search-input').focus();
};

// 點擊幸運一下按鈕時，導航到隨機的網站
document.getElementById('feeling-lucky').addEventListener('click', function() {
    var sites = ['https://www.example1.com', 'https://www.example2.com', 'https://www.example3.com']; // 可以加入更多網站
    var randomIndex = Math.floor(Math.random() * sites.length);
    window.location.href = sites[randomIndex];
});
