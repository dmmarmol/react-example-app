import { ResponsePlayer } from './playersTypes';
import { FetchStatus } from 'App/app-types.d';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { onGetPlayersStarted, onGetPlayersSuccess, onGetPlayersFailed } from './reducers';
import { getPlayersAsync } from './actions';

export interface PlayersState {
    byName: { [i: string]: ResponsePlayer };
    fetchStatus: {
        get: FetchStatus;
    };
}

export const initialState: PlayersState = {
    byName: {},
    fetchStatus: {
        get: FetchStatus.IDLE,
    },
};

const reducer = reducerWithInitialState<PlayersState>(initialState)
    .case(getPlayersAsync.started, onGetPlayersStarted)
    .case(getPlayersAsync.done, onGetPlayersSuccess)
    .case(getPlayersAsync.failed, onGetPlayersFailed);

export default reducer;
