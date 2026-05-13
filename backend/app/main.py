from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "NBA AI Backend Running"
    }

@app.get("/nba/live-games")
def live_games():
    return {
        "games": [
            {
                "home_team": "Lakers",
                "away_team": "Warriors",
                "home_score": 88,
                "away_score": 91,
                "status": "LIVE"
            },
            {
                "home_team": "Celtics",
                "away_team": "Bucks",
                "status": "UPCOMING"
            }
        ]
    }
