document.addEventListener("DOMContentLoaded", () => {
    const loaderWrapper = document.getElementById("intro-loader");
    const percentText = document.getElementById("loading-percent");
    
    let progress = 0;

    // 1. 0%에서 100%까지 숫자가 올라가는 타이머 설정
    const loadingInterval = setInterval(() => {
        // 한 번에 1~5씩 불규칙하게 올라가도록 설정해 실제 데이터를 불러오는 듯한 리얼함 부여
        const randomStep = Math.floor(Math.random() * 5) + 2;
        progress += randomStep;

        if (progress >= 100) {
            progress = 100;
            percentText.textContent = `${progress}%`;
            clearInterval(loadingInterval); // 100% 도달 시 타이머 정지

            // 2. 100%가 된 후 0.3초(300ms) 정도 여운을 주고 셔터 열기 실행
            setTimeout(() => {
                openMainScreen();
            }, 300);
        } else {
            percentText.textContent = `${progress}%`;
        }
    }, 35); // 0.035초마다 숫자 업데이트 (약 1.2~1.5초 소요)

    // 3. 화면 셔터를 열고 로딩 요소를 제거하는 함수
    function openMainScreen() {
        // CSS에 정의해 둔 '.loaded' 클래스를 추가하여 위아래 셔터 애니메이션 발동
        loaderWrapper.classList.add("loaded");

        // 셔터가 열리는 시간(0.8초)이 완전히 끝난 뒤, 로딩창이 클릭을 가로막지 않도록 숨김 처리
        setTimeout(() => {
            loaderWrapper.style.display = "none";
        }, 850);
    }
});