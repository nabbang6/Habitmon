export const fetchHabitList = async (memberId) => {
    try {
        const response = await fetch(`https://2335-210-119-237-95.ngrok-free.app/habit/${memberId}/list`);
        const data = await response.json();
        return data.data.habitList || [];
    } catch (error) {
        console.error("Error fetching habits: ", error);
        return [];
    }
};