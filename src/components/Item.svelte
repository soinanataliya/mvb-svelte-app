<script>
export let src;
 
</script>

<div class="item">
  <img src={src} class="item__img" alt='украшения ободки handmade' />
  <div class="item__text good-description">
    <span class="good-description__description">
      Paper & Clay: Svlume Vase
    </span>
    <br />
    <span class="good-description__price">
      100P
    </span>
  </div>
</div>

<style lang='scss'>
.item {
  box-sizing: border-box;
  width: 100%;
  max-width: 33%;
  padding: 15px;
  &__img {
    width: 100%;
    border-radius: 4px;
  }
  @media (max-width: 900px) {
    max-width: 50%;
  }
  @media (max-width: 500px) {
    max-width: 100%;
  }
}
.good-description {
  flex-direction: column;
  &__price {
    color: #c47179;
  }
}
</style>