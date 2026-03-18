function urlmaker(){
    const shopNumber = parseInt(document.querySelector('input[type="number"]').value)
    const url = "https://fcs.cg.gov.in/rcmodule/Reports/Rpt_eKycPendingMemAgeGT5_I.aspx?shop_id="+shopNumber +"&District_ID=41";
    window.open(url, "_blank");
}

function checkRC(){ 
    const rcNumber = document.querySelector("body > div.container.w-full.h-screen.flex.flex-col.items-center.justify-center.gap-5 > div > div > input").value
    const url = `https://fcs.cg.gov.in/citizen/RptRCADetails.aspx?RCN=RC_Number%3D${rcNumber}%26RA%3DR`
    window.open(url,"_blank")
}