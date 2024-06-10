<script setup>
import {useAdvantageStore} from "./store/advantages/advantages.js";
import {storeToRefs} from "pinia";
import MainTitle from "./components/MainTitle.vue";
import OurAdvantage from "./components/OurAdvantage.vue";
import {onMounted} from "vue";
import ModelAdvantage from "./components/ModelAdvantage.vue";
import {useWindowSizeStore} from "./store/ViewPortStore/viewPort.js";



const store = useAdvantageStore()

const {uniqModelFigaro, title} = storeToRefs(store)

const viewPort = useWindowSizeStore()
const { windowWidth } = storeToRefs(viewPort)

onMounted(()=> {
  viewPort.onReloadWindow()
  viewPort.windowResize()
})
onMounted(async ()=> {
  await store.getDescription()
})

</script>

<template>
<div class="app">
  <div class="container">
    <header class="main__header">
      <h1 class="main__title">FIGARO</h1>
      <img v-if="windowWidth>1000" class="main_img" src="../src/assets/1989-Nissan-Figaro-Concept-00.png" alt="Car">
      <button class="main__button" type="button">
        <span>{{'тест-драйв'}}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4853 10.3495L6.24263 14.4224L8.36395 16.4589L12.6066 12.3859L14.7279 10.3495L12.6066 8.31299L8.36395 4.24006L6.24263 6.27653L10.4853 10.3495Z" fill="none"/>
        </svg>
      </button>
    </header>
    <main class="main">
      <main-title :tag="'h1'" :title="'Мы ценим Ваше время и комфорт!'"/>
      <main-title :tag="'h1'" :title="'Запишитесь на сервис Nissan онлайн'"/>
      <div class="main__items">
        <our-advantage
            :title="'выгода'"
            :text="'Узнайте о выгодных сервисных предложениях Nissan именно для вашего автомобиля'"
        >
          <template #svg>
            <svg width="177" height="100" viewBox="0 0 177 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M130.478 90.4471C135.601 90.4471 139.754 86.1138 139.754 80.7683C139.754 75.4227 135.601 71.0894 130.478 71.0894C125.354 71.0894 121.201 75.4227 121.201 80.7683C121.201 86.1138 125.354 90.4471 130.478 90.4471Z" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M130.478 26.766C128.138 25.172 124.128 26.9266 121.524 30.6995C118.931 34.4725 118.724 38.8188 121.063 40.4243" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M116.189 82.6835L57.2578 83.0504C57.2578 83.0504 57.5228 65.7798 44.4783 65.688C31.4338 65.5963 28.8064 76.5596 30.4658 83.2339C30.6387 85.3325 18.6428 82.133 18.297 78.7614C18.3662 78.4977 15.9347 64.6903 23.8974 59.3004C23.8974 59.3004 30.6732 54.7018 52.8558 53.9105C52.8558 53.9105 75.1537 39.8394 79.2445 39.7247C83.4506 37.9587 133.451 34.9082 145.527 38.8876C149.814 39.6674 144.859 40.8257 144.329 40.9403C144.329 40.9403 154.55 50.8027 155.484 53.2454C156.014 55.3211 155.714 63.5435 155.656 63.8991C155.714 65.7224 158.053 69.9885 158.053 71.7546C158.053 71.7546 158.756 82.1101 143.338 80.9518C143.165 77.7293 142.958 70.7798 135.467 67.3394C130.766 65.172 125.246 66.0321 121.524 69.7247C119.093 72.1215 117.007 76.055 116.557 82.477" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M135.721 46.2385C135.721 46.2385 127.228 52.6375 123.99 53.0045C120.752 53.3715 75.0847 57.11 64.2527 55.0458" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M43.3605 90.4471C48.4837 90.4471 52.6368 86.1138 52.6368 80.7683C52.6368 75.4227 48.4837 71.0894 43.3605 71.0894C38.2373 71.0894 34.0841 75.4227 34.0841 80.7683C34.0841 86.1138 38.2373 90.4471 43.3605 90.4471Z" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M31.3417 60.2178C31.5146 60.4931 27.7464 65.7912 19.7837 65.9747" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M147.36 49.0366C147.36 49.6444 141.99 53.7843 141.99 54.5182C141.99 55.2522 145.435 56.8348 145.838 57.0182C146.242 57.2017 153.605 57.1444 155.357 55.9173" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M128.668 30.8027L138.579 30.539L138.498 30.4587L150.851 19.4266L142.347 9.99997L129.994 21.0206L128.668 30.8027Z" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M132.829 26.1812C135.963 28.5435 135.387 34.5412 131.55 39.5756C127.712 44.6101 122.066 46.7775 118.931 44.4151" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </our-advantage>
        <our-advantage
            :title="'актуальность'"
            :text="'Выберите актуальные  для вас сервисные предложения'"
        >
          <template #svg>
            <svg width="177" height="100" viewBox="0 0 177 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M94.9843 46.1835C94.9843 46.1835 120.359 46.6422 124.922 45.5298C126.247 45.2087 130.557 40.5183 130.557 40.5183C130.557 40.5183 129.992 44.4633 131.306 44.8761C132.608 45.289 134.106 44.5092 134.106 44.5092C134.106 44.5092 136.711 50.8968 133.035 51.8257C130.523 52.4564 124.68 54.3486 121.246 55.4839C119.737 55.9885 118.377 56.8486 117.259 57.9839C116.326 58.9358 114.92 60.0596 113.122 60.5871C110.138 61.4587 95.3184 61.3784 95.3184 61.3784" stroke="#C31631" stroke-width="1.73019" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M95.33 58.3853C95.33 58.3853 101.218 58.5459 103.742 57.8463C106.98 56.9518 112.292 46.6078 116.81 46.2293" stroke="#C31631" stroke-width="1.73019" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M137.805 66.0572C137.805 66.0572 138.013 85.3691 136.146 87.3187C134.279 89.2682 125.51 88.5228 124.865 87.8806C124.219 87.2269 124.311 83.087 124.311 83.087" stroke="#C31631" stroke-width="1.73019" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M94.9843 69.3829C94.9843 69.3829 114.505 69.4632 115.657 69.6008C120.37 70.1857 125.233 75.0596 128.322 75.3807C133.599 75.9426 136.895 74.4518 136.895 74.4518" stroke="#C31631" stroke-width="1.73019" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M61.9352 36.7683C61.9352 36.7683 71.4881 22.9036 73.1821 21.2981C73.2512 21.2293 73.3203 21.1719 73.3895 21.1031C75.7057 18.7752 77.319 19.899 77.6647 20.1972C77.7108 20.243 77.7799 20.266 77.8375 20.2545C77.8375 20.2545 91.7117 19.9219 95.768 19.9105C100.331 19.8875 114.044 20.2545 114.044 20.2545C114.113 20.2545 114.171 20.2316 114.217 20.1972C114.563 19.899 116.176 18.7752 118.492 21.1031C118.561 21.1719 118.63 21.2408 118.7 21.2981C120.152 22.6742 127.434 33.133 129.439 36.0229C129.578 36.2293 129.912 36.1261 129.912 35.8738C129.923 34.7155 130.142 32.766 131.491 32.2614C133.357 31.5504 138.209 32.9839 138.681 33.133C138.704 33.1444 138.739 33.1559 138.762 33.1674C138.969 33.3279 139.834 34.2797 137.944 37.938C137.932 37.9495 137.932 37.9724 137.921 37.9839C137.506 38.4999 136.607 38.821 132.482 38.7637C132.263 38.7637 132.136 39.016 132.274 39.188C133.115 40.2086 135.293 42.9151 137.091 45.6215C139.373 49.0504 138.866 61.8944 137.229 69.2224V69.2339C136.112 76.321 135.973 80.4495 135.097 81.1261C134.233 81.8027 129.382 84.532 121.984 82.055C114.586 79.5779 89.649 80.7018 86.941 81.1031" stroke="#C31631" stroke-width="1.73019" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M96.828 36.4587L65.9106 36.2293C65.8761 35.2431 74.6108 22.5825 76.0282 22.5137C76.7887 22.4678 95.4567 22.2041 95.6411 22.2041C98.0034 22.2729 115.093 22.4678 115.865 22.5137C117.282 22.594 125.763 34.5665 125.763 35.5642C125.74 37.1238 96.828 36.4587 96.828 36.4587Z" stroke="#C31631" stroke-width="1.73019" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M96.9087 46.1834C96.9087 46.1834 71.5341 46.6422 66.9708 45.5298C65.9337 45.2775 63.0529 42.3302 61.8544 41.0802C61.6816 40.9082 61.3935 41.0344 61.405 41.2752C61.4972 42.4449 61.5202 44.5779 60.5868 44.8761C59.6074 45.1857 58.5126 44.8302 58.0402 44.6238C57.9019 44.5665 57.7406 44.6353 57.6945 44.7729C57.2566 45.977 55.6318 51.0114 58.8699 51.8256C61.405 52.4678 67.2935 54.3715 70.716 55.5068C72.191 56 73.5277 56.8486 74.6109 57.961C75.5443 58.9243 76.9616 60.0596 78.7708 60.5871C81.7554 61.4587 96.5745 61.3784 96.5745 61.3784" stroke="#C31631" stroke-width="1.73019" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M96.5629 58.3853C96.5629 58.3853 90.6745 58.5459 88.1508 57.8463C84.9127 56.9518 79.6004 46.6078 75.0833 46.2293" stroke="#C31631" stroke-width="1.73019" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M96.9088 69.3829C96.9088 69.3829 77.3881 69.4632 76.2357 69.6008C71.5227 70.1857 66.6598 75.0596 63.5715 75.3807C58.2938 75.9426 54.998 74.4518 54.998 74.4518" stroke="#C31631" stroke-width="1.73019" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M94.6501 62.4793C94.6501 78.2706 81.7784 91.0802 65.9106 91.0802C50.0428 91.0802 37.1711 78.2706 37.1711 62.4793C37.1711 46.688 50.0428 33.8784 65.9106 33.8784C81.7784 33.8784 94.6501 46.6765 94.6501 62.4793Z" fill="white"/>
              <path d="M65.9106 91.0802C81.783 91.0802 94.6501 78.2751 94.6501 62.4793C94.6501 46.6834 81.783 33.8784 65.9106 33.8784C50.0382 33.8784 37.1711 46.6834 37.1711 62.4793C37.1711 78.2751 50.0382 91.0802 65.9106 91.0802Z" stroke="#C31631" stroke-width="3.46038" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M53.592 61.8142C57.0952 65.266 63.3524 74.8302 63.5944 74.7958C63.894 74.7499 67.5815 60.0825 74.726 52.3073" fill="white"/>
              <path d="M53.592 61.8142C57.0952 65.266 63.3524 74.8302 63.5944 74.7958C63.894 74.7499 67.5815 60.0825 74.726 52.3073" stroke="#C31631" stroke-width="3.46038" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </template>
        </our-advantage>
        <our-advantage
            :title="'широкий выбор'"
            :text="'Выберите дилера,  который вам подходит'"
        >
          <template #svg>
            <svg width="177" height="100" viewBox="0 0 177 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M91.6503 7V18.2844H104.971" fill="white"/>
              <path d="M91.6503 7V18.2844H104.971" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M67.8309 31.2087H97.3425" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M67.8309 40.1995H97.3425" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M67.8309 49.179H97.3425" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M67.8309 58.7662H97.3425" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M67.8309 67.7455H97.3425" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M67.8309 76.7362H97.3425" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M61.9999 31.2087H62.0803" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M61.9999 40.1995H62.0803" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M61.9999 49.179H62.0803" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M61.9999 58.7662H62.0803" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M61.9999 67.7455H62.0803" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M61.9999 76.7362H62.0803" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M105.651 86.5757H52.7928V7H91.6499L98.3104 12.6422L104.971 18.2844L105.651 86.5757Z" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M136.925 71.0826C136.925 83.3303 126.946 93.2615 114.639 93.2615C102.332 93.2615 92.3525 83.3303 92.3525 71.0826C92.3525 58.8349 102.332 48.9037 114.639 48.9037C126.946 48.9037 136.925 58.8349 136.925 71.0826Z" fill="white"/>
              <path d="M114.627 93.2617C126.935 93.2617 136.913 83.3319 136.913 71.0828C136.913 58.8338 126.935 48.9039 114.627 48.9039C102.319 48.9039 92.3407 58.8338 92.3407 71.0828C92.3407 83.3319 102.319 93.2617 114.627 93.2617Z" stroke="#C31631" stroke-width="3.46038" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M107.771 71.1858C109.926 73.3189 113.786 79.2134 113.936 79.1904C114.12 79.1675 116.39 70.1193 120.792 65.3257" fill="white"/>
              <path d="M107.771 71.1858C109.926 73.3189 113.786 79.2134 113.936 79.1904C114.12 79.1675 116.39 70.1193 120.792 65.3257" stroke="#C31631" stroke-width="3.46038" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </our-advantage>
        <our-advantage
            :title="'онлайн обслуживание'"
            :text="'Отправьте дилеру данные о вашем автомобиле в форме удобной анкеты'"
        >
          <template #svg>
            <svg width="177" height="100" viewBox="0 0 177 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M72.977 52.7638C72.977 42.0757 63.7122 33.406 52.2809 33.406C40.8497 33.406 31.5848 42.0757 31.5848 52.7638C31.5848 56.0092 32.4376 59.0596 33.9471 61.7431C33.9702 61.8005 33.9932 61.8463 34.0278 61.9037L34.0739 61.984C34.3389 62.4312 34.6155 62.867 34.9151 63.2913L42.705 75.4587L51.4397 89.1055C51.82 89.6904 52.7303 89.6904 53.0991 89.1055L61.8339 75.4587L69.3702 63.6927C71.6518 60.5849 72.977 56.8234 72.977 52.7638Z" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linejoin="round"/>
              <path d="M52.2923 67.2247C59.9357 67.2247 66.1319 61.0583 66.1319 53.4517C66.1319 45.8452 59.9357 39.6788 52.2923 39.6788C44.6489 39.6788 38.4526 45.8452 38.4526 53.4517C38.4526 61.0583 44.6489 67.2247 52.2923 67.2247Z" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linejoin="round"/>
              <path d="M146.323 27.844C146.323 21.0091 140.4 15.4701 133.106 15.4701C125.812 15.4701 119.889 21.0091 119.889 27.844C119.889 29.9197 120.43 31.8692 121.398 33.5779C121.41 33.6123 121.421 33.6467 121.444 33.6811L121.479 33.727C121.64 34.0137 121.825 34.2889 122.021 34.5642L126.987 42.3394L132.565 51.055C132.807 51.4334 133.383 51.4334 133.625 51.055L139.202 42.3394L144.019 34.8165C145.471 32.8325 146.323 30.4357 146.323 27.844Z" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linejoin="round"/>
              <path d="M133.106 37.0871C137.994 37.0871 141.956 33.1439 141.956 28.2797C141.956 23.4156 137.994 19.4724 133.106 19.4724C128.219 19.4724 124.256 23.4156 124.256 28.2797C124.256 33.1439 128.219 37.0871 133.106 37.0871Z" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linejoin="round"/>
              <path d="M92.0023 17.8669C92.0023 13.5206 88.2341 9.99994 83.5901 9.99994C78.9462 9.99994 75.178 13.5206 75.178 17.8669C75.178 19.1857 75.5237 20.4242 76.1345 21.5137C76.146 21.5366 76.1575 21.5596 76.1691 21.571L76.1921 21.6054C76.2958 21.7889 76.411 21.9609 76.5378 22.1444L79.7067 27.0871L83.256 32.6261C83.4058 32.8669 83.7745 32.8669 83.9359 32.6261L87.4851 27.0871L90.5503 22.305C91.4607 21.0435 92.0023 19.5183 92.0023 17.8669Z" stroke="#C31631" stroke-width="1.73019" stroke-miterlimit="10" stroke-linejoin="round"/>
              <path d="M83.5902 23.2453C86.4223 23.2453 88.7181 20.9605 88.7181 18.1421C88.7181 15.3237 86.4223 13.0389 83.5902 13.0389C80.7581 13.0389 78.4623 15.3237 78.4623 18.1421C78.4623 20.9605 80.7581 23.2453 83.5902 23.2453Z" stroke="#C31631" stroke-width="1.84554" stroke-miterlimit="10" stroke-linejoin="round"/>
              <path d="M79.8104 35.4701C58.9184 39.8738 162.376 53.0275 118.356 54.9655C118.356 54.9655 38.1186 62.2362 132.426 76.1582C148.294 78.4977 112.272 83.8532 57.2936 89.6215" stroke="#C31631" stroke-width="2.30692" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </our-advantage>
      </div>
      <ModelAdvantage :model="uniqModelFigaro" :title="title"/>
    </main>
  </div>
</div>
</template>

<style scoped>
.container {
  max-width: 1920px;
  margin: 0 auto;
}

.main__header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  height: 464px;
  background: #0ABAB5;
  position: relative;
  padding: 0 120px;
}

.main__title {
  font-size: clamp(40px, 5vw, 216px);
  letter-spacing: clamp(20px, 5vw, 60px);
  color: #6ACCC9;
  margin: 0;
  font-weight: 400;
}

.main__button {
  width: 282px;
  height: 48px;
  display: flex;
  border: none;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  align-self: flex-start;
  color: black;
}

.main__button:hover {
  color: white;
}

.main__button svg path {
  fill: black;
}

.main__button:hover svg path {
  fill: white;
}

.main_img {
  display: block;
  width: 680px;
  height: 326px;
  position: absolute;
  right: 10%;
  bottom: -10%;

}

.main {
  margin-top: 48px;
  padding: 0 120px;
}

.main__items {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .main {
    padding: 0 20px;
  }

  .main__items {
    flex-flow: column nowrap;
  }
}
</style>
