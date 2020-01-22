import { getMovements } from './movements.api';
import addMovementRows from './movements.helpers'
import { mapMovmentsFromApiToViewModel } from './movments.mapper';


getMovements().then(movments => {
    const viewModelMovments = mapMovmentsFromApiToViewModel(movments);
    addMovementRows(viewModelMovments);

    viewModelMovments.forEach(movment => {
        onUpdateField(`select-${movment.id}`, event => {
            const route = event.target.value;
            history.push(route);
        });
    });
});