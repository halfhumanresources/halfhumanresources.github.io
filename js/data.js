$(document).ready(function(){
    $("select,input").change(function ()
    {
        let peach = {
            "_id": "01816dad-8ec0-4877-3808-ee05306104c7",
            "_owner": "like-capri-1qvbah6",
            "nameFirst": "Princess",
            "nameLast": "Peach",
            "age": 25,
            "gender": 1,
            "height": "5'7",
            "weight": 132,
            "bodytemp": 97.9,
            "pulserate": 62,
            "bloodpressure": "90/62",
            "respirationrate": 11,
            "avgWeeklyExercise": 5,
            "vacationBalance": 12,
            "avgWeeklyHours": 40
        }
        
        let snake = {
            "_id": "01816da6-8731-aff0-7f18-a6a906a0b0d5",
            "_owner": "like-capri-1qvbah6",
            "nameFirst": "Solid",
            "nameLast": "Snake",
            "age": 50,
            "gender": 2,
            "height": "5'10",
            "weight": 180,
            "bodytemp": 97.6,
            "pulserate": 74,
            "bloodpressure": "106/71",
            "respirationrate": 13,
            "avgWeeklyExercise": 5,
            "vacationBalance": 16,
            "avgWeeklyHours": 52
        }
        
        let fox = {
            "_id": "01816da0-63dc-93ca-f69b-bea0263c9c1f",
            "_owner": "like-capri-1qvbah6",
            "nameFirst": "Fox",
            "nameLast": "McCloud",
            "age": 25,
            "gender": 2,
            "height": "4'8",
            "weight": 100,
            "bodytemp": 98.4,
            "pulserate": 78,
            "bloodpressure": "90/60",
            "respirationrate": 11,
            "avgWeeklyExercise": 6,
            "vacationBalance": 12,
            "avgWeeklyHours": 40
        }
        
        let chunli = {
            "_id": "01816d9b-9a37-e150-7376-f97876c4e55a",
            "_owner": "like-capri-1qvbah6",
            "nameFirst": "Chun",
            "nameLast": "Li",
            "age": 32,
            "gender": 1,
            "height": "5'6",
            "weight": 143,
            "bodytemp": 97.7,
            "pulserate": 68,
            "bloodpressure": "98/71",
            "respirationrate": 12,
            "avgWeeklyExercise": 6,
            "vacationBalance": 12,
            "avgWeeklyHours": 50
        }
        
        let laracroft = {
            "_id": "01816d96-eb71-3839-635e-360e349d7a6f",
            "_owner": "like-capri-1qvbah6",
            "nameFirst": "Lara",
            "nameLast": "Croft",
            "age": 27,
            "gender": 1,
            "height": "5'10",
            "weight": 130,
            "bodytemp": 97.9,
            "pulserate": 62,
            "bloodpressure": "98/60",
            "respirationrate": 11,
            "avgWeeklyExercise": 7,
            "vacationBalance": 13,
            "avgWeeklyHours": 45
        }
        
        let freeman = {
            "_id": "01816d91-6d49-b5be-4e64-b9ea521e9188",
            "_owner": "like-capri-1qvbah6",
            "nameFirst": "Gordon",
            "nameLast": "Freeman",
            "age": 45,
            "gender": 2,
            "height": "5'11",
            "weight": 180,
            "bodytemp": 98,
            "pulserate": 80,
            "bloodpressure": "109/75",
            "respirationrate": 13,
            "avgWeeklyExercise": 4,
            "vacationBalance": 4,
            "avgWeeklyHours": 49
        }
        
        let falcon = {
            "_id": "01816d85-ac85-c369-71a2-b6fdbbfca161",
            "_owner": "like-capri-1qvbah6",
            "nameFirst": "Captain",
            "nameLast": "Falcon",
            "age": 37,
            "gender": 2,
            "height": "6'3",
            "weight": 203,
            "bodytemp": 97.5,
            "pulserate": 68,
            "bloodpressure": "103/72",
            "respirationrate": 13,
            "avgWeeklyExercise": 7,
            "vacationBalance": 13,
            "avgWeeklyHours": 40
        }
        
        let ash = {
            "_id": "01816d82-a305-fff1-cb4a-a71ea37e0e3d",
            "_owner": "like-capri-1qvbah6",
            "nameFirst": "Ash",
            "nameLast": "Ketchum",
            "age": 21,
            "gender": 2,
            "height": "5'9",
            "weight": 168,
            "bodytemp": 97.8,
            "pulserate": 72,
            "bloodpressure": "110/74",
            "respirationrate": 14,
            "avgWeeklyExercise": 4,
            "vacationBalance": 12,
            "avgWeeklyHours": 45
        }
        
        let harmony = {
            "_id": "01816d80-50d1-6e2e-de04-fec291aa113c",
            "_owner": "like-capri-1qvbah6",
            "nameFirst": "Harmony",
            "nameLast": "Rose",
            "age": 31,
            "gender": 3,
            "height": "5'8",
            "weight": 170,
            "bodytemp": 97.9,
            "pulserate": 72,
            "bloodpressure": "103/68",
            "respirationrate": 13,
            "avgWeeklyExercise": 3,
            "vacationBalance": 11,
            "avgWeeklyHours": 40
        }
        
        let samus = {
            "_id": "01816d7e-ab3c-0b08-2f83-f5d889c72eb8",
            "_owner": "like-capri-1qvbah6",
            "nameFirst": "Samus",
            "nameLast": "Aran",
            "age": 25,
            "gender": 1,
            "height": "6'1",
            "weight": 150,
            "bodytemp": 98.1,
            "pulserate": 65,
            "bloodpressure": "100/60",
            "respirationrate": 12,
            "avgWeeklyExercise": 6,
            "vacationBalance": 13,
            "avgWeeklyHours": 39
        }
        
        let wake = {
            "_id": "01816d7b-62c6-7e08-da63-25348749e390",
            "_owner": "like-capri-1qvbah6",
            "nameFirst": "Crasher",
            "nameLast": "Wake",
            "age": 45,
            "gender": 2,
            "height": "6'2",
            "weight": 210,
            "bodytemp": 97.8,
            "pulserate": 80,
            "bloodpressure": "120/80",
            "respirationrate": 15,
            "avgWeeklyExercise": 5,
            "vacationBalance": 14,
            "avgWeeklyHours": 40
        }
        
        let duke = {
            "_id": "01816d79-a55c-78b1-3f86-112eadf31dcd",
            "_owner": "like-capri-1qvbah6",
            "nameFirst": "Duke",
            "nameLast": "Nukem",
            "age": 29,
            "gender": 2,
            "height": "6'4",
            "weight": 240,
            "bodytemp": 97.5,
            "pulserate": 70,
            "bloodpressure": "110/70",
            "respirationrate": 15,
            "avgWeeklyExercise": 3,
            "vacationBalance": 10,
            "avgWeeklyHours": 41
        }
        
        let peach_ = JSON.parse(peach);
        let snake_ = JSON.parse(snake);
        let fox_ = JSON.parse(fox);
        let chunli_ = JSON.parse(chunli);
        let laracroft_ = JSON.parse(laracroft);
        let freeman_ = JSON.parse(freeman);
        let falcon_ = JSON.parse(falcon);
        let ash_ = JSON.parse(ash);
        let harmony_ = JSON.parse(harmony);
        let samus_ = JSON.parse(samus);
        let wake_ = JSON.parse(wake);
        let duke_ = JSON.parse(duke);
    })
});
