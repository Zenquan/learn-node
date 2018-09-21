function getSyncTime(){
    return new Promise((reslove, reject)=>{
        try {
            let startTime = new Date().getTime();
            setTimeout(() => {
                let endTime = new Date().getTime();
                let data = endTime - startTime;
                reslove(data);
            }, 500);
        } catch (error) {
            reject(error)
        }
    })
}
async function getSycData(){
    let time = await getSyncTime();
    let data = `${time}`;
    return data;
}

async function getData(){
    let data = await getSycData();
    console.log(data);
}

getData()