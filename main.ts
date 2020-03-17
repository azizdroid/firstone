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


class YoutubeVideo{
  Title:any;
  views: number;
  videoUrl:any;
  likes: any;
  channelname: any;
  shares: string | undefined;
  comments: number;
  dislikes: number;

  constructor(Title:any,views:number,likes:any, videoUrl:any,comments:number, channelname: any,dislikes:number,shares?:string,){
this.Title = Title;
this.likes = likes;
this.comments = comments;
this.views = views;
this.videoUrl= videoUrl;
this.channelname = channelname;
this.dislikes = dislikes
  }
  getTitle = () =>{
    return this.Title
  }
  
getNumberofViews = () =>{
  return this.views
}
getNumberofLikes = () =>{
  return this.likes
}
getNumberofComments = () =>{
  return this.comments
}
getNumberofshares = () =>{
  return this.views
}
getNumberofdislikes = () =>{
  return this.dislikes
}

getCompleteDetails = () =>{
  console.log(` Title: `+this.Title+`\n Views: `+this.views+`\n Likes: `+this.likes+`\n Video url:`+this.videoUrl+`\n Dislikes: `+this.dislikes + `\n Channel: `+this.channelname+ `\n No.of Comments: `+this.comments)
}
}



let senorita =  new YoutubeVideo("Shawn Mendes, Camila Cabello - Señorita",959973592,15000000000,"https://www.youtube.com/watch?v=Pkh8UtuejGw",545231,"Shawn mendes",20000);


console.log(senorita.getCompleteDetails());