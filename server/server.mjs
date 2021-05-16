import alt from 'alt';

alt.on('playerConnect', (player) => {
    alt.emitClient(player, 'AUTH:Init')
})

alt.onClient('AUTH:Login', Login)

function Login(player,data) {
    let logData = JSON.parse(data)
    player.rpName = `${logData.firstName}, ${logData.lastName}`
    console.log(player)
}
