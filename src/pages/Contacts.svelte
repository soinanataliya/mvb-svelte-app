<script>
  import InstagramIcon from "../assets/instagram.svg";
  import PhoneIcon from "../assets/phone.svg";
  import FacebookIcon from "../assets/facebook.svg";
</script>

<style lang="scss">
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
  }
  .contacts-item {
    display: flex;
    flex-flow: row;
    justify-content: center;
      align-items: center;
      padding: 30px;
    transition: opacity 0.2s, color 0.2s;
    width: 400px;
    &:hover {
        opacity: 0.8;
        color: #c47179;
      }
    &__left {
      padding-right: 10px;
    }
     &__right {
      padding-right: 10px;
      width: 200px;
    }
  }
  .contacts-icon {
    width: 45px;
    height: 45px;
  }
</style>

<div class="contacts">
  <div class="contacts-item">
    <div class="contacts__item contacts-item__left">
      <a href="tel:123-456-7890">
        <div class="contacts-icon">
          <i class="contacts-item__icon">
            {@html PhoneIcon}
          </i>
        </div>
      </a>
    </div>
    <div class="contacts__item contacts-item__right">
      <a href="tel:123-456-7890">
        <div class="contacts-info">
          Телефон / Whatsapp:
          <br />
          123 456 789
        </div>
      </a>
    </div>
  </div>

  <div class="contacts-item">
    <div class="contacts__item contacts-item__left">
      <a href="https://www.instagram.com/mvb_accessories/" target="_blank">
        <div class="contacts-icon">
          <i class="contacts-item__icon">
            {@html InstagramIcon}
          </i>
        </div>
      </a>
    </div>
    <div class="contacts__item contacts-item__right">
      <a href="https://www.instagram.com/mvb_accessories/" target="_blank">
        <div class="contacts-info">
          Instagram:
          <br />
          @mvb_accessories
        </div>
      </a>
    </div>
  </div>

    <div class="contacts-item">
    <div class="contacts__item contacts-item__left">
      <a href="https://www.facebook.com/mvbaccessories" target="_blank">
        <div class="contacts-icon">
          <i class="contacts-item__icon">
            {@html FacebookIcon}
          </i>
        </div>
      </a>
    </div>
    <div class="contacts__item contacts-item__right">
      <a href="https://www.facebook.com/mvbaccessories" target="_blank">
        <div class="contacts-info">
          Facebook:
          <br />
          mvbaccessories
        </div>
      </a>
    </div>
  </div>
</div>
