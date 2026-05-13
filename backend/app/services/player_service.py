from nba_api.stats.static import players
from nba_api.stats.endpoints import playercareerstats

def get_player_stats(player_name):

    nba_players = players.get_players()

    player = next(
        (
            p for p in nba_players
            if p["full_name"].lower() == player_name.lower()
        ),
        None
    )

    if not player:
        return {
            "error": "Player not found"
        }

    career = playercareerstats.PlayerCareerStats(
        player_id=player["id"]
    )

    data = career.get_data_frames()[0]

    latest_season = data.iloc[-1]

    return {
        "player": player["full_name"],
        "season": latest_season["SEASON_ID"],
        "team": latest_season["TEAM_ABBREVIATION"],
        "games": int(latest_season["GP"]),
        "points": round(float(latest_season["PTS"]) / latest_season["GP"], 1),
        "rebounds": round(float(latest_season["REB"]) / latest_season["GP"], 1),
        "assists": round(float(latest_season["AST"]) / latest_season["GP"], 1),
        "steals": round(float(latest_season["STL"]) / latest_season["GP"], 1),
        "blocks": round(float(latest_season["BLK"]) / latest_season["GP"], 1),
        "fg_pct": round(float(latest_season["FG_PCT"]) * 100, 1),
        "fg3_pct": round(float(latest_season["FG3_PCT"]) * 100, 1),
        "ft_pct": round(float(latest_season["FT_PCT"]) * 100, 1),
        "minutes": round(float(latest_season["MIN"]) / latest_season["GP"], 1),
    }