<script>
  function handleSumbit(e) {
    e.preventDefault();
    
    console.log(login, password);
  }

  let login = "";
  let password = "";
</script>

<style lang="scss">
  .login {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    font-size: 16px;
    color: #c47179;
  }
</style>

<div class="login">
  <form on:submit={handleSumbit}>
    <label>
      Login:
      <input bind:value={login} />
    </label>
    <label>
      Password:
      <input bind:value={password} type="password" />
    </label>
    <button type='submit'>Войти</button>
  </form>
</div>
