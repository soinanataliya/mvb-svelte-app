<script>
  import Item from "../components/Item.svelte";

  const allAccessories = [
    {
      id: "036",
      src: "images/items/036.jpg",
      category: [],
      price: "6 000",
      name: "Бархатный обрус ручной работы с классической вышевкой",
    },
    {
      id: "035",
      src: "images/items/035.jpg",
      category: [],
      price: "6 000",
      name: "Бархатный обрус ручной работы с классической вышевкой",
    },
    {
      id: "034",
      src: "images/items/034.jpg",
      category: [],
    },
    {
      id: "033",
      src: "images/items/033.jpg",
      category: [],
    },
    {
      id: "032",
      src: "images/items/032.jpg",
      category: [],
    },
    {
      id: "031",
      src: "images/items/031.jpg",
      category: [],
    },
    {
      id: "030",
      src: "images/items/030.jpg",
      category: [],
    },
    {
      id: "029",
      src: "images/items/029.jpg",
      category: [],
    },
    {
      id: "028",
      src: "images/items/028.jpg",
      category: [],
    },
    {
      id: "027",
      src: "images/items/027.jpg",
      category: [],
    },
    {
      id: "026",
      src: "images/items/026.jpg",
      category: [],
    },
    {
      id: "025",
      src: "images/items/025.jpg",
      category: [],
    },
    {
      id: "024",
      src: "images/items/024.jpg",
      category: [],
    },
    {
      id: "023",
      src: "images/items/023.jpg",
      category: [],
    },
    {
      id: "022",
      src: "images/items/022.jpg",
      category: [],
    },
    {
      id: "021",
      src: "images/items/021.jpg",
      category: [],
    },
    {
      id: "020",
      src: "images/items/020.jpg",
      category: [],
    },
    {
      id: "019",
      src: "images/items/019.jpg",
      category: [],
    },
    {
      id: "018",
      src: "images/items/018.jpg",
      category: [],
    },
    {
      id: "017",
      src: "images/items/017.jpg",
      category: [],
    },
    {
      id: "016",
      src: "images/items/016.jpg",
      category: [],
    },
    {
      id: "015",
      src: "images/items/015.jpg",
      category: [],
    },
    {
      id: "014",
      src: "images/items/014.jpg",
      category: [],
      name: "Бархатный обрус ручной работы с классической вышевкой",
    },
    {
      id: "013",
      src: "images/items/013.jpg",
      category: [],
    },
    {
      id: "012",
      src: "images/items/012.jpg",
      category: [],
      name: "Бархатный обрус ручной работы с классической вышевкой",
    },
    {
      id: "011",
      src: "images/items/011.jpg",
      category: [],
    },
    {
      id: "010",
      src: "images/items/010.jpg",
      category: [],
    },
    {
      id: "009",
      src: "images/items/009.jpg",
      category: [],
    },
    {
      id: "008",
      src: "images/items/008.jpg",
      category: [],
    },
    {
      id: "007",
      src: "images/items/007.jpg",
      category: [],
    },
    {
      id: "006",
      src: "images/items/006.jpg",
      category: [],
    },
    {
      id: "005",
      src: "images/items/005.jpg",
      category: [],
    },
    {
      id: "004",
      src: "images/items/004.jpg",
      category: [],
    },
    {
      id: "003",
      src: "images/items/003.jpg",
      category: [],
    },
    {
      id: "002",
      src: "images/items/002.jpg",
      category: [],
    },
    {
      id: "001",
      src: "images/items/001.jpg",
      category: [],
    }
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
    <Item src={item.src} name={item.name} price={item.price} />
  {/each}
</div>
