<!-- C:\Users\user1\VSCProjects\imsound-frontend-side\pages\catalog\[product_slug]_[product_id].vue -->

<template>
  <div class="main_container">
    <MainHeader />
    <BreadcrumbsNav />
    <div class="content-wrapper grid">
      <div class="content-area col-10">
        <div class="grid">
          <div class="col-12 md:col-6 lg:col-6">
            <ProductImages :image="data.product.image" />
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            <ProductDetailsActions :productData="data.product"
                                   :productChars="data.characteristics"
                                   :productRating="data.average_rating"/>
          </div>
          <div class="col-12">
            <ProductDescrReviews :productDescr="data.product.description"
                                 :productReviews="data.reviews"/>
          </div>
          <div class="col-12">
            <ProductCarousel :products="data.recommended_products "/>
          </div>
          <div class="col-12">
            <ProductCallMe />
          </div>
        </div>
      </div>
    </div>
    <FooterBottom />
  </div>
</template>
  
<script setup>
import { useBaseStore } from '~/store/baseData';
import MainHeader from '~/components/header/MainHeader.vue'
import BreadcrumbsNav from '~/components/common/BreadcrumbsNav.vue';
import FooterBottom from '~/components/footer/FooterBottom.vue';

import ProductImages from '~/components/productdetails/ProductImages.vue'
import ProductDetailsActions from '~/components/productdetails/ProductDetailsActions.vue'
import ProductDescrReviews from '~/components/productdetails/ProductDescrReviews.vue'
import ProductCarousel from '~/components/productdetails/ProductCarousel.vue'
import ProductCallMe from '~/components/productdetails/ProductCallMe.vue';

const baseStore = useBaseStore();

const route = useRoute();
const config = useRuntimeConfig()
const BASE_API_URL = config.public.apiBase;
const endpoint = `catalog/${route.params.product_slug}/${route.params.product_id}/`;

const { data } = await useAsyncData(
  'data',
  () => $fetch(`${BASE_API_URL}${endpoint}`)
);

const baseData = baseStore.baseResponse;
provide('categories', baseData.categories);
provide('subcategories', baseData.subcategories);

provide('breadcrumbs', data.value.breadcrumbs);
</script>

<style scoped>
.main_container {
  overflow-x: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  margin-left: 0.9rem;
  margin-right: 0.9rem;
  padding-top: 0.2rem;
}
.content-area {
  flex: 1;
  padding: 0px;
}
</style>
