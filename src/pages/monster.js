import Component from "@components/Component.js";
import { navigateTo } from "../router";

class MonsterPage extends Component {
  async setup() {
    this.$state = {};
    this.mid = window.location.pathname.split("/monster/")[1];
    await this.getMonsterDetail();
  }

  setEvent() {
    this.addEvent("click", ".backbutton", () => navigateTo("/"));
  }

  async getMonsterDetail() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${this.mid}`
    );

    this.setState({
      ...this.$state,
      monster: await res.json(),
    });
  }

  template() {
    if (this.$state.monster == null) return null;

    const { name, email, phone } = this.$state.monster;

    return `
      <div class='detail-card'>
        <h1 class='title'>${name}</h1>
        <img src='https://robohash.org/${this.mid}?set=set2&size=180x180' />
        <p>${email}</p>
        <p>${phone}</p>
        <button class='btn backbutton'>돌아가기</button>
      </div>
    `;
  }
}

export default MonsterPage;
