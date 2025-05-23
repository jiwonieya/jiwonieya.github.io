      const wordList = ["고양이", "토마토", "책방", "찻집", "복숭아", "초록", "연인"];

      let start = wordList[Math.floor(Math.random() * wordList.length)];
      const $word = document.getElementById("word");
      const inputBox = document.getElementById("box");
      const $Btn = document.querySelector(".message>button");
      const $history = document.getElementById("history");

      let me = true;

      function updatePlaceholder() {
        inputBox.placeholder = me ? "‘나’가 제시어를 입력하세요" : "‘user 1’이 제시어를 입력하세요";
        inputBox.style.color = me ? "#52B42F" : "#000";
      }

      const startBtn = document.querySelector(".wrap>p");
      startBtn.addEventListener("click", () => {
        document.querySelector(".wrap").style.display = "none";
        document.querySelector(".game").style.display = "block";
        start = wordList[Math.floor(Math.random() * wordList.length)];
        $word.textContent = start;
        $history.innerHTML = `<div>시작: ${start}</div>`;
        me = true;
        updatePlaceholder();
      });

      $Btn.addEventListener("click", () => {
        const newWord = inputBox.value.trim();
        if (!newWord) return;

        const lastLetter = start[start.length - 1];
        const firstLetter = newWord[0];
        if ($history.children.length > 10){
            $history.removeChild($history.firstElementChild);
        }
        if (lastLetter === firstLetter) {
          start = newWord;
          $word.textContent = start;
          const player = me ? "나" : "user 1";
          const className = me ? "mine" : "not-mine";
          $history.innerHTML += `<div class="${className}"><strong>${player}:</strong> ${newWord}</div>`;
          inputBox.value = "";
          me = !me;
          updatePlaceholder();
        } else {
          alert("끝말이 이어지지 않아요! 다시 시도해보세요.");
        }
      });

      inputBox.addEventListener("keydown", (e) => {
        if (e.key === "Enter") $Btn.click();
      });