from nba_api.stats.static import teams
from nba_api.stats.endpoints import leaguegamefinder

def get_recent_games():

    nba_teams = teams.get_teams()

    lakers = next(
        team for team in nba_teams
        if team["full_name"] == "Los Angeles Lakers"
    )

    gamefinder = leaguegamefinder.LeagueGameFinder(
        team_id_nullable=lakers["id"]
    )

    games = gamefinder.get_data_frames()[0]

    recent_games = games.head(5)

    result = []

    for _, game in recent_games.iterrows():

        result.append({
            "matchup": game["MATCHUP"],
            "date": game["GAME_DATE"],
            "result": game["WL"],
            "points": int(game["PTS"]),
        })

    return result