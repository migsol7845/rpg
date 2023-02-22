namespace StatusBarKind {
    export const player1health = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.splash("New weapon found!")
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    game.gameOver(false)
})
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level1`)
let player1 = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(player1)
tiles.placeOnRandomTile(player1, sprites.dungeon.floorDarkDiamond)
scene.cameraFollowSprite(player1)
