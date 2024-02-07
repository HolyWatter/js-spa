import { navigateTo } from "@/router.js";
import Component from "@components/Component.js";
import MonsterCard from "../components/shared/MonsterCard";

class HomePage extends Component {
  async setup() {
    this.$state = {};
    await this.getMonster();
  }

  template() {
    return `
      <h1 class='title'>Monster List</h1>
      <div class='list-container'>
        ${this.$state.monsters
          ?.map((monster) => new MonsterCard({ monster }).template())
          .join("")}
      </div>
     `;
  }

  mounted() {}

  setEvent() {}

  async getMonster() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const json = await res.json();

    this.setState({
      monsters: json,
    });
  }
}

export default HomePage;
