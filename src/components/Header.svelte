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
<div class='header__left'>
  <div>
    <Link to="/">
          <div class="logotext">
            <div class="logotext__logo">MVB</div>
            <div class="logotext__sublogo">accessories</div>
          </div>
    </Link>
  </div>

  <div class="header__subtitle">Аксессуары ручной работы из Армении</div> 

   <nav class="header__nav">
      <NavLink to="accessories">
        <span class="header__link button">Украшения</span>
      </NavLink>
      <NavLink to="contacts">
        <span class="header__link button">Контакты</span>
      </NavLink>
    </nav>


  <div class="header__contacts header-contacts">
      <a href="tel:123-456-7890" class="header-contacts__icon-link">
        <span>123-456-7890</span>
        <i class="header-contacts__icon-header">
          {@html PhoneIcon}
        </i>
      </a>
      <a
        href="https://www.instagram.com/mvb_accessories/"
        class="header-contacts__icon-link"
        target="_blank">
        <span>Instagram</span>
        <i class="header-contacts__icon-header">
          {@html InstagramIcon}
        </i>
      </a>
    </div>

</div>

<img
    height="360px"
    src="images/logo.png"
    class="item__img header__right"
    alt="украшения ободки handmade"
/>


  
</header>

<style lang="scss">
  .header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 20px 20px 0 20px;
    font-size: 1.2rem;
    background: #fbedea; 
    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
    }

    &__nav {
      padding: 40px 0 0;
        @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
  }

    &__link {
      display: inline-block;
      padding: 0 15px;
      transition: color 0.2s;
      text-transform: uppercase;
      // margin-right: 12px;
    }
    &__contacts {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-top: 40px;
    }
    &__subtitle {
      padding-top: 15px;
    }
    &__left {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .logotext {
    display: flex;
    flex-direction: row;
    font-size: 4rem;
    opacity: 0.9;
    transition: opacity 0.2s;
    @media (max-width: 400px) {
        font-size: 3rem;
        flex-direction: column;
        align-items: center;
    }
    &__logo {
      background-color: #c47179;
      border-radius: 20px;
      color: #ffff;
      padding: 10px 20px;
      max-width: 116px;
      text-align: center;
    }
    &__sublogo {
      display: flex;
      align-items: center;
      color: #924642;
      padding: 10px;
      @media (max-width: 500px) {
        font-size: 3rem;
      }
    }
  }
  .header-contacts {
    display: flex;
    flex-direction: row;
    // position: absolute;
    // right: 0;
    // top: 50%;
    // transform: translateY(-50%);
    @media (max-width: 1024px) {
      // position: relative;
      // top: 0;
      // transform: translate(0);
      // display: flex;
      // flex-direction: row;
    }
    &__icon-header {
      display: inline-block;
      width: 28px;
      height: 28px;
      cursor: pointer;
      padding-left: 8px;
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

  .button {
    background: #f5b6b0;
    border-radius: 20px;
    padding: 12px 16px;
    color: #fbedea;
    min-width: 150px;
    text-align: center;
    @media (max-width: 400px) {
       width: 90%;
       margin-bottom: 12px;
    }
  }
</style>