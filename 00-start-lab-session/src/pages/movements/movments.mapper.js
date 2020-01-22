export const mapMovmentsFromApiToViewModel = MovmentsList => {
    return MovmentsList.map(movment => mapMovmentFromApiToViewModel(movment));
};

const mapMovmentFromApiToViewModel = movment => {
    return {
        id: movment.id,
        description: movment.description,
        amount: `${movment.amount} €`,
        balance: `${movment.balance} €`,
        transaction: new Date(movment.transaction).toLocaleDateString(),
        realTransaction: new Date(movment.realTransaction).toLocaleDateString(),
        accountId: movment.accountId
    };
};