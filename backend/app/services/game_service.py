from nba_api.stats.endpoints import leaguegamefinder

def get_upcoming_games():

    finder = leaguegamefinder.LeagueGameFinder()

    games = finder.get_data_frames()[0]

    recent_games = games.head(10)

    result = []

    for _, game in recent_games.iterrows():

        result.append({
            "game_id": game["GAME_ID"],
            "matchup": game["MATCHUP"],
            "date": game["GAME_DATE"],
            "result": game["WL"],
        })

    return result