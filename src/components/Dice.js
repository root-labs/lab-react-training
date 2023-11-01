import React, { useState } from 'react'




let dice = ["https://play-lh.googleusercontent.com/DGAleS46qOedNzJGsB3e29QLpL6Qi6EwIDze95nBvxMAMGEmbE6KOW__2haEkHVDs4Y", 
            "https://top10.netflix.com/images/big_numbers/2.png", 
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Eo_circle_orange_number-3.svg/480px-Eo_circle_orange_number-3.svg.png", 
            "https://st2.depositphotos.com/1561359/12173/v/450/depositphotos_121739536-stock-illustration-3d-shiny-blue-number-4.jpg", 
            "https://st.depositphotos.com/1001311/3411/i/450/depositphotos_34119713-stock-photo-3d-golden-number-collection-5.jpg", 
            "https://img.pixers.pics/pho_wat(s3:700/FO/83/37/73/5/700_FO8337735_14467f9a175cdce119956aca42b446db.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/stickers-the-number-6.jpg.jpg", 
            
]




function Dice() {

    const [dicePics, setDice] = useState("https://image.similarpng.com/very-thumbnail/2021/07/Cartoon-start-button-icon-on-transparent-background-PNG.png")

    

    function random() {
        let rando = Math.floor(Math.random() * 6)
        setDice(dice[rando])
        console.log(dice[Math.floor(Math.random * 6)])
    }

Math.floor(Math.random * 6)

  return (


    <div>
    
        <img onClick={random} src= {dicePics} alt="passed dice" style={{ height: 300 }}/>
    
    </div>
  )
}

export default Dice