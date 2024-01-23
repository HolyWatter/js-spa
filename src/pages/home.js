import { navigateTo } from "@/router.js";
import Component from "@components/Component.js";

class HomePage extends Component {
  template() {
    return `
      <div>asdasdads</div>
     `;
  }

  mounted() {
    const $stateComponent = document.querySelector(".stateComponent");
  }

  setEvent() {
    this.addEvent("click", '[data-component="button-to-list"]', () => {
      this.moveToList();
    });
  }

  moveToList() {
    navigateTo("/");
  }
}

// // 이미지 주소(src)
// https://robohash.org/숫자?set=set2&size=180x180
// // 예시
// https://robohash.org/1?set=set2&size=180x180
// https://robohash.org/2?set=set2&size=180x180
// https://robohash.org/3?set=set2&size=180x180

export default HomePage;
