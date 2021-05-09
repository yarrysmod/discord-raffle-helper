import {Participant, RaffleHelper} from './helper';

const participants: Participant[] = [
    {
        name: 'Yarry',
        pushupCount: 12
    },
    {
        name: 'Blob',
        pushupCount: 14
    },
    {
        name: 'Vert',
        pushupCount: 26
    },
    {
        name: 'Hybrid',
        pushupCount: 30
    },
    {
        name: 'Atica',
        pushupCount: 20
    },
    {
        name: 'Bish',
        pushupCount: 12
    },
    {
        name: 'winged_scapula',
        pushupCount: 15
    }
]

function main() {
    const raffleHelper = new RaffleHelper(participants);

    console.log(
        JSON.stringify(
            raffleHelper
                .populateShuffledList()
                .getChancesOfWinning(),
            null,
            2
        )
    )

    setTimeout(() => console.log(
        JSON.stringify(
            raffleHelper.getWinners(),
            null,
            2
        )
    ), 10000);
}

main();