const webpush=require('web-push')
const vapidKeys={
    publicKey:'BKD0IH4Eq6-_8-k8vViFfsFttmT8rkM1lXPB6uTwngR-Q27M4JFr4yFZJ3y56-gYBcBvFkXvD5-MlZfX0FHd-Fc',
    privateKey: 'OQ_YEviY-rpNr6dNaHx4V716zGkxcN9nxC4p-hE0LKg'
}

//setting VAPID keys
webpush.setVapidDetails(
    'mailto:soemyatmyat@protonmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)