<template>
    <div>
      <nav-header></nav-header>
      <div class="nav-breadcrumb-wrap">
        <div class="container">
          <nav class="nav-breadcrumb">
            <a href="/">Home</a>
            <span>Goods</span>
          </nav>
        </div>
      </div>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" :class="{'filterby-show':filterBy}">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)" @click="priceChecked = 'All'" :class="{'cur':priceChecked=='All'}">All</a></dd>
                <dd v-for="(price,index) in priceFilter">
                  <a href="javascript:void(0)" @click="setPriceFilter(index)" :class="{'cur':priceChecked == index}">{{price.startPrice}} - {{price.endPrice}}</a>
                </dd>
                <!-- <dd>
                  <a href="javascript:void(0)">100 - 500</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)">500 - 1000</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)">1000 - 2000</a>
                </dd> -->
              </dl>
            </div>
<!-- asdasd111111111111111111111 -->
            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="(item,index) in goodsList">
                    <div class="pic">
                      <a href="#"><img v-lazy="'src/static/'+item.productImg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.productPrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                  <!-- <li>
                    <div class="pic">
                      <a href="#"><img src="../static/2.jpg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">XX</div>
                      <div class="price">1000</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="pic">
                      <a href="#"><img src="../static/3.jpg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">XX</div>
                      <div class="price">500</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="pic">
                      <a href="#"><img src="../static/4.jpg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">XX</div>
                      <div class="price">2499</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li> -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overLay" @click="closePop"></div>
      <nav-footer>
        <span slot="abc">123</span>
      </nav-footer>
    </div>
</template>
<script>
import '../assets/css/base.css'
import '../assets/css/product.css'
import '../assets/css/login.css'
import '../assets/css/checkout.css'
import axios from 'axios'
import NavHeader from '../components/Header.vue'
import NavFooter from '../components/Footer.vue'
    export default{
        data(){
            return {
              goodsList: [],
              priceFilter: [
                {startPrice: 0,endPrice: 100},
                {startPrice: 100,endPrice: 500},
                {startPrice: 500,endPrice: 1000},
                {startPrice: 1000,endPrice: 2000}
              ],
              priceChecked:'-1',
              filterBy:false,
              overLay:false
            }
        },
        components:{
          NavHeader,
          NavFooter
        },
        methods:{
          getGoodsList(){
            axios.get('./../../datajson/goods.json').then(function(res){
              this.goodsList = res.data.result;
            }.bind(this))
          },
          showFilterPop(){
            this.filterBy = true;
            this.overLay = true;
          },
          closePop(){
            this.filterBy = false;
            this.overLay = false;
          },
          setPriceFilter(index){
            this.priceChecked = index;
            this.closePop();
          }
        },
        mounted:function(){
          this.getGoodsList();
        }
    }
</script>
