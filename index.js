const rastgele = Math.ceil(Math.random()*20)
let hak= 5;
let deneme=0;

while(hak>0){
    const tahmin= +prompt("0-20 aras覺nda bir say覺 giriniz")
      hak--;
    
     deneme++;
      if (tahmin==rastgele) {
      
       console.log(`Tebrikler ${deneme} . denemede bildiniz ??戊`);
    break;
    
    
    
      }else if(tahmin<rastgele) {
     console.log(`Dikkat ${hak} hakk覺n覺z kald覺`);
     console.log("ARTTIR ????");
    
    }else {
    console.log(`Dikkat ${hak} hakk覺n覺z kald覺`);
       console.log("AZALT????");
      }}
    if(hak==0)
      console.log("oyunu kaybettiniz ???? ");