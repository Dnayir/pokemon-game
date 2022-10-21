const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './img/Pokemon Style Game Map.png'

const playerImage = new Image()
playerImage.src = './img/playerDown.png'

image.onload = () => {
    c.drawImage(image, -1000, -225)
    c.drawImage(
        playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        130,
        390,
        playerImage.width / 4,
        playerImage.height
        )
}

