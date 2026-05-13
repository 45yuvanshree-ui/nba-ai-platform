from nba_api.stats.static import teams
from nba_api.stats.endpoints import commonteamroster
from app.services.game_service import get_upcoming_games
from app.services.player_service import get_player_stats
from app.services.nba_service import get_recent_games
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
@app.get("/nba/recent-games")
def recent_games():
    return {
        "games": get_recent_games()
    }
@app.get("/player/{player_name}")
def player_stats(player_name: str):

    return get_player_stats(player_name)
@app.get("/nba/upcoming-games")
def upcoming_games():

    return {
        "games": get_upcoming_games()
    }
@app.get("/nba/team-players/{team_code}")
def get_team_players(team_code: str):

    nba_teams = teams.get_teams()

    team = next(
        (
            t for t in nba_teams
            if t["abbreviation"] == team_code.upper()
        ),
        None
    )

    if not team:
        return {"players": []}

    roster = commonteamroster.CommonTeamRoster(
        team_id=team["id"]
    )

    roster_df = roster.get_data_frames()[0]

    players = roster_df["PLAYER"].tolist()

    return {
        "team": team_code.upper(),
        "players": players
    }