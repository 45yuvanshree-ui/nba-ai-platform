const API_BASE_URL = "http://127.0.0.1:8000";

export const fetchRecentGames = async () => {

    try {

        const response = await fetch(
            `${API_BASE_URL}/nba/recent-games`
        );

        const data = await response.json();

        return data.games;

    } catch (error) {

        console.error("API Error:", error);

        return [];
    }
};