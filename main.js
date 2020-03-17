/*class Makeup {
    great: string;
  private  brand : string;
private lipshade : string;
    constructor( brand: string, lipcare: string ,lipcolor:string ) {
      this.great= brand;
      this.brand = lipcare;
      this.lipshade = lipcolor;
    }
    getbrand =()=> {
      return this.great
    }
  
  getlipcare =()=> {
    return this.brand
  }
  setlipshade =( lipcolor: string)=>{
    this.lipshade= lipcolor
}

  getlipshade =()=>{
   return this.lipshade
}

}


  
  let brand1 = new Makeup("huda", "maii","bombshell");
  let brand2 = new Makeup("kylie","glossy","baby");
  let brand3 = new Makeup("nykka","soft","light");
  let brand4 = new Makeup("toofaced","glossy","cute");
  let brand5 = new Makeup("sephora","matte" ,"toosexy");

//existing shade
  console.log(brand4.getlipshade());
  //updated shade
  brand4.setlipshade("sexy");
  console.log(brand4.getlipshade());


console.log(brand5.getlipcare());
*/
var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(Title, views, likes, videoUrl, comments, channelname, dislikes, shares) {
        var _this = this;
        this.getTitle = function () {
            return _this.Title;
        };
        this.getNumberofViews = function () {
            return _this.views;
        };
        this.getNumberofLikes = function () {
            return _this.likes;
        };
        this.getNumberofComments = function () {
            return _this.comments;
        };
        this.getNumberofshares = function () {
            return _this.views;
        };
        this.getNumberofdislikes = function () {
            return _this.dislikes;
        };
        this.getCompleteDetails = function () {
            console.log(" Title: " + _this.Title + "\n Views: " + _this.views + "\n Likes: " + _this.likes + "\n Video url:" + _this.videoUrl + "\n Dislikes: " + _this.dislikes + "\n Channel: " + _this.channelname + "\n No.of Comments: " + _this.comments);
        };
        this.Title = Title;
        this.likes = likes;
        this.comments = comments;
        this.views = views;
        this.videoUrl = videoUrl;
        this.channelname = channelname;
        this.dislikes = dislikes;
    }
    return YoutubeVideo;
}());
var senorita = new YoutubeVideo("Shawn Mendes, Camila Cabello - Señorita", 959973592, 15000000000, "https://www.youtube.com/watch?v=Pkh8UtuejGw", 545231, "Shawn mendes", 20000);
console.log(senorita.getCompleteDetails());
