<script>
  import Item from "../components/Item.svelte";

  const allAccessories = [
    {
      id: '030',
      src: "images/items/30.jpg",
      category: [],
      prize: '100',
      name: 'Paper & Clay: Svlume Vase1111',
    },
    {
      id: '029',
      src: "images/items/29.jpg",
      category: [],
      prize: '100',
    },
    {
      id: '028',
      src: "images/items/28.jpg",
      category: [],
      prize: '100',
    },
    {
      id: '027',
      src: "images/items/27.jpg",
      category: [],
      prize: '100',
    },
    {
      id: '026',
      src: "images/items/26.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '025',
      src: "images/items/25.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '024',
      src: "images/items/24.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '023',
      src: "images/items/23.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '022',
      src: "images/items/22.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '021',
      src: "images/items/21.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '020',
      src: "images/items/20.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '019',
      src: "images/items/19.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '018',
      src: "images/items/18.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '017',
      src: "images/items/17.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '016',
      src: "images/items/16.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '015',
      src: "images/items/15.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '014',
      src: "images/items/14.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '013',
      src: "images/items/13.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '012',
      src: "images/items/12.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '011',
      src: "images/items/11.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '010',
      src: "images/items/10.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '009',
      src: "images/items/09.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '008',
      src: "images/items/08.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '007',
      src: "images/items/07.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '006',
      src: "images/items/06.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '005',
      src: "images/items/05.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '004',
      src: "images/items/04.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '003',
      src: "images/items/03.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '002',
      src: "images/items/02.jpg",
      category: [],
      prize: '100',
    },
      {
      id: '001',
      src: "images/items/01.jpg",
      category: [],
      prize: '100',
    },
  ];
</script>

<style>
  .accessories {
    display: flex;
    flex-flow: row wrap;
    padding: 15px;
    font-size: 1.2rem;
    width: 100%;
  }
</style>

<div class="accessories">
{#each allAccessories as item, i}
 <Item src={item.src} name={item.name} />
{/each}
</div>
