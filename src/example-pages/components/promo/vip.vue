<template>
    <div class="wc-inline rt-space-top5">
        <div class="rt-container">
            <canvas class="point-space"></canvas>
        </div>

    </div>
    <!-- Описание -->

    <!-- Тарифы -->
</template>


<script>
    const componentsList = {};

    export default {
        name: "AppPromoVip",
        components: componentsList,
        mounted() {
            var points = {
                init: function () {
                    this.hasFirstDraw = false;
                    this.matrix = [];
                    this.pointRadius = 1.5;
                    this.minPointRadius = 0.2;
                    this.startOpacity = 0.2
                    this.maxPointRadius = 1;
                    this.maxDelraCoord = 20;
                    this.matrixWidth = 130;
                    this.matrixHeight = 60;
                    this.circleRadiusStart = [];
                    this.circleRadiusEnd = [];
                    this.liveSteps = []
                    this.liveSize = 350;
                    this.radius = 1;
                    this.startsPoint = [];
                    this.radiusDeflection = 600;
                    this.gradeStep = 2;
                    this.canvas = document.querySelector('.point-space');
                    this.canvas.width = 1400;
                    this.canvas.height = 700;
                    this.matrixStep = parseInt(Math.min(this.canvas.width / this.matrixWidth, this.canvas.height / this.matrixHeight));
                    this.context = this.canvas.getContext('2d');
                    this.context.scale(1, 1);
                    this.mouseX = 0;
                    this.mouseY = 0;
                    // this.redColor = 119;
                    // this.greenColor = 1;
                    // this.blueColor = 255;
                    this.redColor = 255;
                    this.greenColor = 255;
                    this.blueColor = 255;

                    this.canvas.addEventListener('mousemove', function (event) {
                        this.mouseX = event.pageX - this.canvas.offsetLeft;
                        this.mouseY = event.pageY - this.canvas.offsetTop;
                    }.bind(this), false);
                    this.createMatrix()
                    this.bind();


                },

                renderMatrix() {
                    if (!this.hasFirstDraw || this.startsPoint.length > 0) {
                        this.hasFirstDraw = true;
                        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                        var ctx = this.context
                        ctx.beginPath();
                        this.matrix.forEach(function (row) {
                            row.forEach(function (item) {
                                ctx.beginPath();
                                ctx.fillStyle = 'rgba('+item.red+','+item.green+','+item.blue+',' + item.opacity + ')';
                                ctx.arc(item.x, item.y, item.radius, 0, 2 * Math.PI, false);
                                ctx.fill();
                            }.bind(this))
                        }.bind(this))
                        this.stepWave();
                    }
                },
                createMatrix: function () {
                    for (var i = 0; i < this.matrixHeight; i++) {
                        var row = [];
                        for (var j = 0; j < this.matrixWidth; j++) {
                            row.push({
                                radius: this.pointRadius,
                                opacity: this.startOpacity,
                                x: this.matrixStep * j,
                                y: this.matrixStep * i,
                                beforeX: this.matrixStep * j,
                                beforeY: this.matrixStep * i,
                                msToGoBack: 0,
                                red: this.redColor,
                                green: this.greenColor,
                                blue: this.blueColor
                            })
                        }
                        this.matrix.push(row)
                    }

                    this.animate()
                },
                checkCircle(x, y, a, b, radius) {
                    return (x - a) ** 2 + (y - b) ** 2 <= radius ** 2
                },

                animate: function () {
                    requestAnimationFrame(this.animate.bind(this));
                    this.renderMatrix();

                },
                stepWave: function () {
                    this.circleRadiusStart.forEach(function (item, index) {
                        this.circleRadiusStart[index]++
                    }.bind(this))
                    this.circleRadiusEnd.forEach(function (item, index) {
                        this.circleRadiusEnd[index]--;
                    }.bind(this))
                    var indexForRemove = []
                    this.startsPoint.forEach(function (startPos, index) {

                        this.liveSteps[index]--;

                        if (this.liveSteps[index] > 0) {
                            for (var i = startPos.y - this.circleRadiusStart[index]; i < startPos.y + this.circleRadiusStart[index]; i++) {
                                for (var j = startPos.x - this.circleRadiusStart[index]; j < startPos.x + this.circleRadiusStart[index]; j++) {
                                    if (this.matrix[i] && this.matrix[i][j] && this.checkCircle(j, i, this.startsPoint[index].x, this.startsPoint[index].y, this.circleRadiusStart[index])) {
                                        if (this.matrix[i][j].msToGoBack) {
                                            this.matrix[i][j].msToGoBack--;
                                            this.matrix[i][j].opacity += (1 - this.matrix[i][j].opacity) / this.matrix[i][j].msToGoBack;
                                            this.matrix[i][j].radius += (this.pointRadius - this.matrix[i][j].radius)/this.pointRadius / this.matrix[i][j].msToGoBack
                                            this.matrix[i][j].x -= (this.matrix[i][j].x - this.matrix[i][j].beforeX)/this.matrix[i][j].msToGoBack
                                            this.matrix[i][j].y -= (this.matrix[i][j].y - this.matrix[i][j].beforeY)/this.matrix[i][j].msToGoBack
                                            this.matrix[i][j].red -= (this.matrix[i][j].red - this.redColor)/this.matrix[i][j].msToGoBack*30
                                            this.matrix[i][j].green -= (this.matrix[i][j].green - this.greenColor)/this.matrix[i][j].msToGoBack*30
                                            this.matrix[i][j].blue -= (this.matrix[i][j].blue - this.blueColor)/this.matrix[i][j].msToGoBack*30
                                        } else {
                                            if (this.liveSteps > 1) {
                                                this.matrix[i][j].msToGoBack = this.liveSteps[index];
                                                this.matrix[i][j].opacity = 1
                                                var delta = (this.circleRadiusStart[index] - Math.sqrt((i-startPos.y)**2+(j-startPos.x)**2))/this.circleRadiusStart[index]
                                                var deltaY = (i-startPos.y)/this.circleRadiusStart[index];
                                                var deltaX = (j-startPos.x)/this.circleRadiusStart[index];
                                                var newRadius = 10 * delta;
                                                if(this.minPointRadius > newRadius){
                                                    newRadius = this.minPointRadius;
                                                }
                                                // newRadius =
                                                this.matrix[i][j].radius = newRadius;
                                                if(this.matrix[i][j].radius > this.maxPointRadius){
                                                    this.matrix[i][j].radius = this.maxPointRadius;
                                                }

                                                var minRadius = 5
                                                // if(Math.sqrt((i - startPos.y)**2 + (j-startPos.x)**2) > minRadius) {
                                                    this.maxDelraCoord
                                                    this.matrix[i][j].red = 100;
                                                    this.matrix[i][j].green = 100;
                                                    this.matrix[i][j].blue = 100;
                                                    deltaX *= 100;
                                                    deltaY *= 100;
                                                    if(deltaX > this.maxDelraCoord){
                                                        deltaX = this.maxDelraCoord
                                                    }
                                                    if(deltaY > this.maxDelraCoord){
                                                        deltaY = this.maxDelraCoord
                                                    }
                                                    this.matrix[i][j].x -= deltaX;
                                                    this.matrix[i][j].y -= deltaY;
                                                // }
                                            }
                                        }

                                    }
                                }
                            }
                        } else {
                            indexForRemove.push(index)
                            console.info('indexForRemove', indexForRemove);
                        }
                    }.bind(this))
                    for (var i = indexForRemove.length - 1; i >= 0; i--) {
                        console.info('!', i)
                        this.liveSteps.splice(i, 1)
                        console.info('this.liveSteps after', this.liveSteps);
                        this.circleRadiusStart.splice(i, 1)
                        this.circleRadiusEnd.splice(i, 1)
                        this.startsPoint.splice(i, 1);
                        this.hasFirstDraw = false;
                    }

                },
                startWave: function (x, y) {
                    this.circleRadiusStart.push(this.radius);
                    this.circleRadiusEnd.push(0);
                    for (var i = 0; i < this.matrixHeight; i++) {
                        for (var j = 0; j < this.matrixWidth; j++) {
                            if (this.checkCircle(this.matrix[i][j].x, this.matrix[i][j].y, x, y)) {
                                this.matrix[i][j].opacity = 0.3;
                                this.matrix[i][j].msToGoBack = 10;
                            }
                        }
                    }

                },
                bind: function () {
                    var node = document.querySelector('.point-space')
                    node.addEventListener('mousedown', function (event) {
                        this.mouseX = parseInt((event.pageX - this.canvas.offsetLeft) / this.matrixStep);
                        this.mouseY = parseInt((event.pageY - this.canvas.offsetTop) / this.matrixStep);
                        this.liveSteps.push(this.liveSize);
                        this.startsPoint.push({y: 0, x: 0})
                        this.startWave(this.mouseX, this.mouseY);
                    }.bind(this));
                }
            }
            points.init();
        },
        created() {
        },
        methods: {}
    };
</script>
