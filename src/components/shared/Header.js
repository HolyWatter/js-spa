import { navigateTo } from "@/router";
import Component from "@components/Component";

class Header extends Component {
  template() {
    return `
      <button class='logo'>몬스터 SPA</button>
    `;
  }

  setEvent() {
    this.addEvent("click", ".logo", () => {
      navigateTo("/");
    });
  }
}

export default Header;
