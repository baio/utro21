if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var angular2_2 = require('angular2/angular2');
var MyAppComponent = (function () {
    function MyAppComponent() {
        var _this = this;
        this.loadItems().then(function (res) { return _this.list = res; });
    }
    MyAppComponent.prototype.loadItems = function () {
        return Promise.resolve(list);
    };
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'app-list'
        }),
        angular2_1.View({
            template: "\n      <div class=\"row marketing\" *ng-for=\"#pair of list.pairs\">\n        \n        \n        <h6 style=\"margin-bottom: -15px;\">{{pair.date}}</h6>\n        <div class=\"col-lg-6\" >\n          <a [href]=\"pair.there.link\" target=\"_blank\" class=\"item-content\">\n            <h3 class=\"caption\">{{pair.there.text}}</h3>\n            <img [src]=\"pair.there.image\" class=\"img-thumbnail fix-height\">\n          </a>            \n        </div>\n\n        <div class=\"col-lg-6\">\n          <a [href]=\"pair.here.link\" target=\"_blank\" class=\"item-content\">\n            <h3 class=\"caption\">{{pair.here.text}}</h3>\n            <img [src]=\"pair.here.image\" class=\"img-thumbnail fix-height\">\n          </a>            \n        </div>\n        \n      </div>  \n  ",
            directives: [angular2_2.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
var list = {
    pairs: [
        {
            date: "17.06.2015",
            there: {
                text: "Представлен новый Kindle Paper White",
                link: "http://www.amazon.com/gp/product/B00OQVZDJM",
                image: "http://ecx.images-amazon.com/images/I/61-nX%2BU95bL._SL1000_.jpg" },
            here: {
                text: "Губернатор заказал молебен о стабильности",
                link: "http://www.znak.com/urfo/news/2015-06-17/1041402.html",
                image: "http://www.znak.com/images/news/201410241156/201506171624/moleben.jpg" }
        },
        {
            date: "16.06.2015",
            there: {
                text: "В Лос-Анджелес открылась выставка E3 2015",
                link: "http://www.e3expo.com/takeover",
                image: "http://cloud.attackofthefanboy.com/wp-content/uploads/2015/05/xbox_e3_2014.jpg" },
            here: {
                text: "В Саратов привезли икону с изображением Сталина",
                link: "http://saratov-room.ru/v-saratov-privezli-ikonu-s-izobrazheniem-iosifa-stalina-10026/",
                image: "http://saratov-room.ru/uploads/saratov/2015/06/39068-266x177.jpg" }
        },
        {
            date: "16.06.2015",
            here: {
                text: "Кадыров показал, как надо метать баранью ногу",
                link: "http://tvzvezda.ru/news/vstrane_i_mire/content/201506142329-rvdg.htm",
                image: "http://tvzvezda.ru/news/vstrane_i_mire/content/201506142329-rvdg.htm/2.jpg" },
            there: {
                text: "В Амстердаме построят 3D напечатанный мост",
                link: "http://hi-news.ru/technology/v-amsterdame-postroyat-3d-napechatannyj-most.html",
                image: "http://hi-news.ru/wp-content/uploads/2015/06/amsterdam.jpg" }
        },
        {
            date: "15.06.2015",
            there: {
                text: "Разработано управление автомобилем со смартфона",
                link: "https://www.youtube.com/watch?v=QjJ2wKCMq5w",
                image: "http://www.conceptcarz.com/images/articleimages/land-rover-remote-control-rr_01-400.jpg" },
            here: {
                text: "Не переизбранные депутаты получат по миллиону рублей",
                link: "http://top.rbc.ru/politics/14/06/2015/557da9989a7947bbc4e7ec49",
                image: "http://pics.v6.top.rbk.ru/v6_top_pics/resized/550xH/media/img/4/68/754343005028684.jpg" }
        },
        {
            date: "11.06.2015",
            here: {
                text: "Учителя без спросу ремонтировали дороги",
                link: "http://superomsk.ru/news/19581",
                image: "http://st.superomsk.ru/images/public/news/6740d27048b9ae27792777c5ab9fa49a.jpg" },
            there: {
                text: "Oculus Shows Its First Consumer Headset",
                link: "http://www.technologyreview.com/news/538186/oculus-shows-its-first-consumer-headset-circular-hand-controls/",
                image: "http://www.technologyreview.com/sites/default/files/images/oculusx519_0.jpg" }
        }
    ] };
