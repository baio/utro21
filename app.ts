/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {NgFor} from 'angular2/angular2';

interface IItem {
  text: string
  link: string
  image: string
}

interface IPair {
  date: string
  here: IItem
  there: IItem
}

interface IList {
  pairs: IPair[]
}

// Annotation section
@Component({
  selector: 'app-list'
})
@View({
  template: `
      <div class="row marketing" *ng-for="#pair of list.pairs">
        
        
        <h6 style="margin-bottom: -15px;">{{pair.date}}</h6>
        <div class="col-lg-6" >
          <a [href]="pair.there.link" target="_blank" class="item-content">
            <h3 class="caption">{{pair.there.text}}</h3>
            <img [src]="pair.there.image" class="img-thumbnail fix-height">
          </a>            
        </div>

        <div class="col-lg-6">
          <a [href]="pair.here.link" target="_blank" class="item-content">
            <h3 class="caption">{{pair.here.text}}</h3>
            <img [src]="pair.here.image" class="img-thumbnail fix-height">
          </a>            
        </div>
        
      </div>  
  `,
  directives: [NgFor]
})
// Component controller
class MyAppComponent {
  
  list : IList; 
  
  constructor() {
    this.loadItems().then((res) => this.list = res);
  }
  
  loadItems() : Promise<IList> {
    return Promise.resolve(list);
  }
}

bootstrap(MyAppComponent);

var list : IList = { 
  pairs :
  [
    {
      date : "18.06.2015",
      there : {
        text : "Google, Microsoft и другие cоздают новый формат для Web", 
        link: "http://techcrunch.com/2015/06/17/google-microsoft-mozilla-and-others-team-up-to-launch-webassembly-a-new-binary-format-for-the-web/", 
        image : "https://tctechcrunch2011.files.wordpress.com/2015/06/4466482623_cf7a5c483b_o.jpg?w=738"},
      here : {
        text : "Глава Роскомнадзора предлагает создать национальный мессенджер", 
        link: "http://www.kommersant.ru/doc/2749309", 
        image : "http://otvet.imgsmail.ru/download/a3549c8f02fedfc41239cdcb191ea099_i-1118.jpg"},
    },        
    {
      date : "18.06.2015",
      here : {
        text : "Рамзан Кадыров выступил за многоженство", 
        link: "http://politsovet.ru/48879-ramzan-kadyrov-vystupil-za-mnogozhenstvo.html", 
        image : "http://static.newsland.com/news_images/674/big_674309.jpg"},
      there : {
        text : "Вышла финальная версия стандарта Ecma Script 6", 
        link: "http://www.ecma-international.org/publications/standards/Ecma-262.htm", 
        image : "http://blog.falafel.com/wp-content/uploads/2015/01/JS6_Logo.png"
    },        
    {
      date : "17.06.2015",
      there : {
        text : "Представлен новый Kindle Paper White", 
        link: "http://www.amazon.com/gp/product/B00OQVZDJM", 
        image : "http://ecx.images-amazon.com/images/I/61-nX%2BU95bL._SL1000_.jpg"},
      here : {
        text : "Губернатор заказал молебен о стабильности", 
        link: "http://www.znak.com/urfo/news/2015-06-17/1041402.html", 
        image : "http://www.znak.com/images/news/201410241156/201506171624/moleben.jpg"}
    },        
    {
      date : "16.06.2015",
      there : {
        text : "В Лос-Анджелес открылась выставка E3 2015", 
        link: "http://www.e3expo.com/takeover", 
        image : "http://cloud.attackofthefanboy.com/wp-content/uploads/2015/05/xbox_e3_2014.jpg"},
      here : {
        text : "В Саратов привезли икону с изображением Сталина", 
        link: "http://saratov-room.ru/v-saratov-privezli-ikonu-s-izobrazheniem-iosifa-stalina-10026/", 
        image : "http://saratov-room.ru/uploads/saratov/2015/06/39068-266x177.jpg"}
    },    
    {
      date : "16.06.2015",
      here : {
        text : "Кадыров показал, как надо метать баранью ногу", 
        link: "http://tvzvezda.ru/news/vstrane_i_mire/content/201506142329-rvdg.htm", 
        image : "http://tvzvezda.ru/news/vstrane_i_mire/content/201506142329-rvdg.htm/2.jpg"},
      there : {
        text : "В Амстердаме построят 3D напечатанный мост", 
        link: "http://hi-news.ru/technology/v-amsterdame-postroyat-3d-napechatannyj-most.html", 
        image : "http://hi-news.ru/wp-content/uploads/2015/06/amsterdam.jpg"}
    },
    {
      date : "15.06.2015",
      there : {
        text : "Разработано управление автомобилем со смартфона", 
        link: "https://www.youtube.com/watch?v=QjJ2wKCMq5w", 
        image : "http://www.conceptcarz.com/images/articleimages/land-rover-remote-control-rr_01-400.jpg"},
      here : {
        text : "Не переизбранные депутаты получат по миллиону рублей", 
        link: "http://top.rbc.ru/politics/14/06/2015/557da9989a7947bbc4e7ec49", 
        image : "http://pics.v6.top.rbk.ru/v6_top_pics/resized/550xH/media/img/4/68/754343005028684.jpg"}
    },    
    {
      date : "11.06.2015",
      here : {
        text : "Учителя без спросу ремонтировали дороги", 
        link: "http://superomsk.ru/news/19581", 
        image : "http://st.superomsk.ru/images/public/news/6740d27048b9ae27792777c5ab9fa49a.jpg"},
      there : {
        text : "Oculus Shows Its First Consumer Headset", 
        link: "http://www.technologyreview.com/news/538186/oculus-shows-its-first-consumer-headset-circular-hand-controls/", 
        image : "http://www.technologyreview.com/sites/default/files/images/oculusx519_0.jpg"}
      }      
  ]};
