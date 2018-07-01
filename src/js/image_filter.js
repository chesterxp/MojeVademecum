

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';
// console.log(dom)

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');

//Filters
document.addEventListener('click', function(e){
    if(e.target.classList.contains('filter-btn')){
        if(e.target.classList.contains('brightness-add')){
            Caman('#canvas',img, function(){
                this.brightness(5).render();
            });
        }
        else if(e.target.classList.contains('brightness-remove')){
            Caman('#canvas',img, function(){
                this.brightness(-5).render();
            });
        }
        //contrast
        else if(e.target.classList.contains('contrast-add')){
            Caman('#canvas',img, function(){
                this.contrast(5).render();
            });
        }
        else if(e.target.classList.contains('contrast-remove')){
            Caman('#canvas',img, function(){
                this.contrast(-5).render();
            });
        }
        //saturation
        else if(e.target.classList.contains('saturation-add')){
            Caman('#canvas',img, function(){
                this.saturation(5).render();
            });
        }
        else if(e.target.classList.contains('saturation-remove')){
            Caman('#canvas',img, function(){
                this.saturation(-5).render();
            });
        }
        //vibrance
        else if(e.target.classList.contains('vibrance-add')){
            Caman('#canvas',img, function(){
                this.vibrance(5).render();
            });
        }
        else if(e.target.classList.contains('vibrance-remove')){
            Caman('#canvas',img, function(){
                this.vibrance(-5).render();
            });
        }
        //vintage
        else if(e.target.classList.contains('vintage-add')){
            Caman('#canvas',img, function(){
                this.vintage().render();
            });
        }
        //lomo
        else if(e.target.classList.contains('lomo-add')){
            Caman('#canvas',img, function(){
                this.lomo().render();
            });
        }
        //clarity
        else if(e.target.classList.contains('clarity-add')){
            Caman('#canvas',img, function(){
                this.clarity().render();
            });
        }
        //sincity
        else if(e.target.classList.contains('sincity-add')){
            Caman('#canvas',img, function(){
                this.sinCity().render();
            });
        }
        //crossprocess
        else if(e.target.classList.contains('crossprocess-add')){
            Caman('#canvas',img, function(){
                this.crossProcess().render();
            });
        }
        //pinhole
        else if(e.target.classList.contains('pinhole-add')){
            Caman('#canvas',img, function(){
                this.pinhole().render();
            });
        }
        //nostalgia
        else if(e.target.classList.contains('nostalgia-add')){
            Caman('#canvas',img, function(){
                this.nostalgia().render();
            });
        }
        //hermajesty
        else if(e.target.classList.contains('hermajesty-add')){
            Caman('#canvas',img, function(){
                this.herMajesty().render();
            });
        }
    }
});

//revert filters
revertBtn.addEventListener('click', function(){
    Caman('#canvas',img,function(){
        this.revert();
    })
})

//upload File
uploadFile.addEventListener('change', function(){
    const file = document.getElementById('upload-file').files[0];
    console.log('fileeee');
    

    const reader = new FileReader();

    if(file){
        fileName = file.name.toLocaleLowerCase();
        // console.log('fileName',fileName);
        reader.readAsDataURL(file);
    }
    reader.addEventListener('load', function(){
        //creat img
        img = new Image();
        //set src
        img.src = reader.result;
        //on image load, add to canvas
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0,0,img.width,img.height);
            canvas.removeAttribute('data-caman-id');
        }
    }, false)
})

//download event

downloadBtn.addEventListener('click', function(e){
    //get file extenction
    const fileExtenstion = fileName.slice(-4).toLocaleLowerCase();

    //init new file variables
    let newFileName;
    
    //check image type
    if(fileExtenstion == '.jpg' || fileExtenstion == '.png'){
        newFileName = fileName.substr(0, fileName.length - 4) + '-edited.jpg';
    }

    //call download
    download(canvas, newFileName);
})


function download(canvas, fileName){
    //init 
    let e;
    //create link
    const link = document.createElement('a');
    //set prop
    link.download = fileName;
    link.href = canvas.toDataURL('image/jpeg', 0.8);
    e = new MouseEvent('click');
    //dispatch event
    link.dispatchEvent(e);
}