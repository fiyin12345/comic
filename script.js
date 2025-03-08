AFRAME.registerComponent("flip",{
    schema:{
        pages:{type:"array", default:[
            {page:"first",color:"blue"},
            {page:"second",color:"red"},
            {page:"third",color:"yellow"},
            {page:"fourth",color:"purple"},
            {page:"fifth",color:"green"},
        ]},
        pageIndex:{type: "int", default: 0}
    },
    init:function(){
        var pageEL = this.pageEL = document.querySelector("[layer]");
        var pageIndex = this.data.pageIndex 
        window.addEventListener("keydown",(e)=>{
            if(e.key==="ArrowRight"&pageIndex<4){
                pageIndex = pageIndex + 1
                this.turnPage(pageIndex)
            }
            if(e.key==="ArrowLeft"&pageIndex>0){
                pageIndex = pageIndex - 1
                this.turnPage(pageIndex)
            }
        })
    },
    turnPage:function(pageIndex){
        var pages = this.data.pages
        var PagesID = pages[pageIndex].page
        var color = pages[pageIndex].color
        this.el.sceneEl.setAttribute("background","color",color)
        this.pageEL.setAttribute("layer","src","#"+PagesID)
    }
})
