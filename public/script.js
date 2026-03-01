let accessTime = 0;
let interval = null;

function generatePrediction(){
    const num = Math.floor(Math.random()*10);
    const confidence = 60 + Math.floor(Math.random()*35);

    document.getElementById("prediction").innerText = num;
    document.getElementById("confidence").innerText =
        "Confidence: " + confidence + "%";
}

// ✅ Monetag Rewarded Integration
function watchAd(minutes){

    show_10667523('pop').then(() => {

        // Ad watched successfully
        accessTime = minutes * 60;

        if(interval) clearInterval(interval);

        interval = setInterval(()=>{
            if(accessTime <= 0){
                clearInterval(interval);
                document.getElementById("timer").innerText="Access Locked";
                return;
            }
            accessTime--;
            document.getElementById("timer").innerText=
                "Access: " + 
                Math.floor(accessTime/60)+"m "+(accessTime%60)+"s";
        },1000);

        generatePrediction();

    }).catch(e => {

        console.log("Ad error:", e);
        alert("Ad failed or skipped. Please try again.");

    });

}

// 📊 Chart
const ctx = document.getElementById('trendChart');
new Chart(ctx,{
    type:'line',
    data:{
        labels:[1,2,3,4,5,6,7],
        datasets:[{
            label:'Trend',
            data:[3,5,2,7,4,8,6],
            borderColor:'#00ff99',
            tension:0.4
        }]
    }
});
