import Component from "../Component";
import Header from "./Header";

class Layout extends Component {
  template() {
    return `
    <div class='header'></div>
    <div class='body'></div>
    `;
  }

  mounted() {
    const $body = document.querySelector(".body");
    const $header = document.querySelector(".header");
    new this.$props.children($body);
    new Header($header);
  }
}

export default Layout;
