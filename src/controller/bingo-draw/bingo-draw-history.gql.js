const getHistory = (group_id, number) => {
    return `
        {
            poc_history(
                where: {
                group_id: {_eq: ${group_id}}, 
                number: {_eq: ${number}}}) {
                number
            }
        }
    `;
};

module.exports = getHistory;