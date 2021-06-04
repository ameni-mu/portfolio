export default class Point {
  ///////////////////////////
  /// constructor
  ////////////////////////////
  constructor(center, radius, degree) {
    var radian = degree * (Math.PI / 180);
    var cos = Math.cos(radian) * radius;
    var sin = Math.sin(radian) * radius;
    this.x = cos + center.x;
    this.y = sin + center.y;
    this.radius = radius;
    this.degree = degree;
    this.radian = radian;
    this.speed = (Math.random() * 5 + 1) / 500;
    this.animType = Math.floor(Math.random() * 2) + 1;
    this.dis = Math.floor(Math.random() * 20) + 20;
    //アニメーションタイプをsin波にする
    if (this.animType == 1) {
      this.dy = Math.floor(Math.sin(this.radius) * this.dis);
      //アニメーションタイプをcos波にする
    } else if (this.animType == 2) {
      this.dy = Math.floor(Math.cos(this.radius) * this.dis);
    }
    this.moveX = this.x + this.dy;
    this.moveY = this.y + this.dy;
    this.shadowMoveX = this.moveX + 40;
    this.shadowMoveY = this.moveY + 40;
  }
}
