export default class UpdateAnim {
  ///////////////////////////
  /// constructor
  ////////////////////////////
  constructor(point, animType, radius, dis) {
    //アニメーションタイプをsin波にする
    if (animType == 1) {
      point.dy = Math.floor(Math.sin(radius) * dis);
      point.radius += point.speed;
      //アニメーションタイプをcos波にする
    } else if (animType == 2) {
      point.dy = Math.floor(Math.cos(radius) * dis);
      point.radius += point.speed;
    }
    point.moveX = point.x + point.dy;
    point.moveY = point.y + point.dy;
    point.shadowMoveX = point.moveX + 40;
    point.shadowMoveY = point.moveY + 40;
    return point;
  }
}
