const EXCLUDED_PARTICIPANTS = ['Yarry'];

export interface Participant {
    name: string;
    pushupCount: number;
}

export class RaffleHelper {
    public shuffledList: string[] = [];

    constructor(public participants: Participant[]) {
    }

    /**
     * populates the shuffled list based on the initialized participants.
     *
     * @see {@link https://bost.ocks.org/mike/shuffle/} for more details on the shuffle
     */
    public populateShuffledList(): RaffleHelper {
        const shuffledList = [].concat(
            ...this.participants.map(
                ({name, pushupCount}): string[] => new Array(pushupCount).fill(name)
            )
        )

        for (let index = shuffledList.length - 1; index > 0; index--) {
            const currentLength = index + 1;
            const currentIndex = Math.floor(Math.random() * currentLength);
            const temp = shuffledList[index];

            shuffledList[index] = shuffledList[currentIndex];
            shuffledList[currentIndex] = temp;
        }

        this.shuffledList = shuffledList;

        return this;
    }

    public getWinners(): string[] {
        return Array
            .from(
                new Set(this.shuffledList)
            )
            .filter((name) => !EXCLUDED_PARTICIPANTS.includes(name))
            .slice(0, 3);
    }

    public getChancesOfWinning(): string[] {
        const totalPushups = this.shuffledList.length;

        return this.participants
            .filter(({name}) => !EXCLUDED_PARTICIPANTS.includes(name))
            .map(
                ({name, pushupCount}) =>
                    `${name} has a ${((pushupCount / totalPushups) * 100).toFixed(2)}% chance of winning the raffle`
            )
    }
}