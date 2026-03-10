function urlmaker(){
    var shopNumber = document.querySelector('input[type="number"]').value;
    var url = "https://fcs.cg.gov.in/rcmodule/Reports/Rpt_eKycPendingMemAgeGT5_I.aspx?shop_id="+shopNumber +"&District_ID=41";
    window.open(url, "_blank");
}