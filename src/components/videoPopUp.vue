<template>
  <div>
  <div>
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
  <mdb-card>
    <mdb-view hover>
      <a href="#!">
        <mdb-card-image
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
          alt="Card image cap"/>
        <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
      </a>
    </mdb-view>
    <mdb-card-body>
      <mdb-card-title>Card with waves effect</mdb-card-title>
      <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
      <mdb-btn color="primary">Button</mdb-btn>
    </mdb-card-body>
  </mdb-card>
  </div>
</template>

<script>
import {mdbBtn, mdbCard, mdbCardBody, mdbCardImage, mdbCardText, mdbCardTitle, mdbMask, mdbView} from 'mdbvue'

export default {
  name: 'CardPage',
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbView,
    mdbMask
  }
}
</script>
