function getBase64FromImageUrl(URL) {
        var canvas  = new fabric.Canvas('c');
        var img = new Image();
        img.onload = function() {
            var canvas1 = document.createElement("canvas");
            canvas1.width = this.width;
            canvas1.height = this.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(this, 0, 0);
            var dataURL = canvas.toDataURL({format: "png"});
        };
        img.src = URL;
    }