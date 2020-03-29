<script>
  import { Link } from "svelte-routing";
  import NavLink from "../components/NavLink.svelte";
  import InstagramIcon from "../assets/instagram.svg";
  import PhoneIcon from "../assets/phone.svg";

  let linkIsOpened = 0;

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: "active" };
    }
    return {};
  }
</script>

<header class="header">
  <div class="header__logo">
    <Link to="/">
      <div class="logotext">
        <div class="logotext__logo">MVB</div>
        <div class="logotext__sublogo">accesories</div>
      </div>
    </Link>
    <div class="header__contacts contacts">
      <a href="tel:123-456-7890" class="contacts__icon-link">
        <span>123-456-7890</span>
        <i class="contacts__icon-header">
          {@html PhoneIcon}
        </i>
      </a>
      <a
        href="https://www.instagram.com/mvb_accessories/"
        class="contacts__icon-link"
        target="_blank">
        <span>Instagram</span>
        <i class="contacts__icon-header">
          {@html InstagramIcon}
        </i>
      </a>
    </div>
  </div>
  <nav class="header__nav">
    <NavLink to="accessories">
      <span class="header__link">Украшения</span>
    </NavLink>
    <NavLink to="contacts">
      <span class="header__link">Контакты</span>
    </NavLink>
  </nav>
</header>


<style lang="scss">
  .header {
    position: relative;
    padding: 20px;
    font-size: 1.2rem;
    border-bottom: 1px #d3c9c452 solid;
    &__logo {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      position: relative;
      @media (max-width: 1024px) {
      flex-direction: column;
      align-items: flex-start;
      }
    }
    &__home {
      height: 100%;
    }
    &__nav {
      flex-grow: 1;
      text-align: center;
      padding: 30px 0 15px;
    }

    &__link {
      padding: 0 15px;
      transition: color 0.2s;
      text-transform: uppercase;
      &:hover {
        color: #c47179;
      } 
    }
    &__contacts {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }

  .logotext {
    display: flex;
    flex-direction: row;
    font-size: 4rem;
    opacity: 0.9;
    transition: opacity 0.2s;
    &__logo {
      background-color: #c47179;
      border-radius: 4px;
      color: #ffff;
      padding: 10px 20px;
    }
    &__sublogo {
      display: flex;
      align-items: center;
      color: #d3c9c4;
      padding: 10px;
      @media (max-width: 500px) {
        font-size: 3rem;
    }
    }
  }
  .contacts {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: 1024px) {
      position: relative;
      top: 0;
      transform: translate(0);
      display: flex;
      flex-direction: row;
    }
    &__icon-header {
      display: inline-block;
      width: 28px;
      height: 28px;
      cursor: pointer;
      padding-left: 20px;
      opacity: 1;
      transition: opacity 0.2s;
      &:hover {
        opacity: 0.5;
      }
      @media (max-width: 1024px) {
        padding-left: 5px;
      }
    }
    &__icon-link {
      display: flex;
      align-items: center;
      padding-bottom: 5px;
      opacity: 1;
      transition: opacity 0.2s;
      &:hover {
        opacity: 0.5;
      }
      @media (max-width: 1024px) {
        padding-right: 20px;
      }
    }
  }
</style>