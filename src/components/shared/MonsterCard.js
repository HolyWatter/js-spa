import { navigateTo } from "../../router";

class MonsterCard {
  id;
  name;

  constructor($props) {
    this.id = $props.monster.id;
    this.name = $props.monster.name;
    this.template();
    console.log(2);
    this.registEvent();
  }

  template() {
    return `
    <div class='monster${this.id} monster'>
      <img src="https://robohash.org/${this.id}?set=set2&size=180x180" />
      <p>${this.name}</p>
    </div>
    `;
  }

  registEvent() {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(`.monster${this.id}`)) return false;
      navigateTo(`/monster/${this.id}`);
    });
  }
}

export default MonsterCard;
