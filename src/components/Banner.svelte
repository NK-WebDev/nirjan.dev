<script lang="ts">
  export let title: string;
  export let subtitle: string;
</script>

<style lang="scss">
  .banner {
    padding: 6rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.8rem;
    background: var(--primary-gradient);

    &__title,&__subtitle {
        color: var(--light);
    }    
    
    &__title {
      margin: 0;
    }
    &__subtitle {
      margin-top: var(--spacing-1);
    }

    @media (max-width: 600px) {
      padding: var(--spacing-3) var(--spacing-1);
    }
    @media (max-width: 360px) {
      padding: var(--spacing-3) var(--spacing-0);
    }
  }
</style>

<section class="banner">
  <h2 class="banner__title">{title}</h2>
  {#if subtitle}
    <p class="banner__subtitle">{subtitle}</p>
  {/if}
</section>
