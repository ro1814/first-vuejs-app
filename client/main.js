var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description: "The best socks on earth",
    image: "./assets/vmSocks-green.jpg",
    link: "https://www.happysocks.com/",
    inventory: 10,
    inStock: false,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantdId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green.jpg",
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue.jpg",
      },
    ],
    sizes: ["small", "medium", "large", "extra-large"],
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    },
    removeFromCart: function (){
        this.cart -=1
    },
    updateProduct: function (variantImage) {
        this.image = variantImage
    }
  },
});
